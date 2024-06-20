import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      const token = localStorage.getItem('jwtToken');
      if (!token) {
        setError('No token found');
        return;
      }

      try {
        const response = await fetch('https://svo-v2.netlify.app:5000/api/user-details', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error || 'Failed to fetch user details');
          return;
        }

        const userData = await response.json();
        setUser(userData);
      } catch (err) {
        setError(err.message || 'Failed to fetch user details');
      }
    };

    fetchUserDetails();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Welcome, {user.email}</p>
      {/* Render more user details as needed */}
    </div>
  );
};

export default Dashboard;
