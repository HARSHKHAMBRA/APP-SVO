import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import useAuth from './hooks/useAuth'; // Replace with your actual authentication hook
import { exec } from 'child_process';

const App = () => {
  const { user, loading } = useAuth(); // Get user and loading state from useAuth hook

  useEffect(() => {
    // Function to start the Node.js server
    const startServer = () => {
      const serverProcess = exec('npm run server');
      serverProcess.stdout.on('data', (data) => {
        console.log(`Server stdout: ${data}`);
      });
      serverProcess.stderr.on('data', (data) => {
        console.error(`Server stderr: ${data}`);
      });
      serverProcess.on('close', (code) => {
        console.log(`Server process exited with code ${code}`);
      });
    };

    // Start the server when component mounts
    startServer();

    // Cleanup function (optional)
    return () => {
      // Stop server or perform cleanup if needed
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Protected route */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Login />} // Redirect to login if not authenticated
        />
      </Routes>
    </Router>
  );
};

export default App;
