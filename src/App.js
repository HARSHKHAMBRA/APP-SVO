import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './LandingPage';
import Register from './Register';
import Login from './Login';
import Dashboard from './Dashboard';
import useAuth from './hooks/useAuth'; // Replace with your actual authentication hook
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import NotFound from './pages/NotFound'; // Import the NotFound component
import Market from './pages/Market'; // Import the NotFound component
import Game from './pages/Game';
import Game1 from './pages/cdsc87/Game1';

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
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/Market" element={<Market />} />
        {/* Protected route */}
        <Route
          path="/dashboard"
          element={user ? <Dashboard /> : <Navigate to="/login" />} // Redirect to login if not authenticated
        />
        {/* Fallback route for 404 */}
        <Route path="/Game" element={<Game />} />
        <Route path="/Game1" element={<Game1 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
