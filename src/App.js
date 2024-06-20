import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import useAuth from './hooks/useAuth'; // Replace with your actual authentication hook

const App = () => {
  const { user, loading } = useAuth(); // Get user and loading state from useAuth hook

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
