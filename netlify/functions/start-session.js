const jwt = require('jsonwebtoken');
const { startUserSession } = require('./sessionService'); // Assuming this service handles session management

exports.handler = async (event) => {
  const token = event.headers.Authorization?.split(' ')[1];
  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Validate email format before starting session
    if (!isValidEmail(decoded.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    const sessionId = await startUserSession(decoded.userId);
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId }),
    };
  } catch (error) {
    console.error('Error starting session:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to start session' }),
    };
  }
};

// Helper function to validate email format
const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
