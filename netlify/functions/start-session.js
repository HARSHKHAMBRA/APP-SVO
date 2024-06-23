const jwt = require('jsonwebtoken');
const { admin, db } = require('./firebaseAdmin'); // Assuming this provides access to Firestore
const { startUserSession } = require('./sessionService'); // Assuming this service handles session management

exports.handler = async (event) => {
  const token = event.headers.Authorization?.split(' ')[1];
  if (!token) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized: No token provided' }),
    };
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Check if user is authorized (optional step depending on your app's logic)
    if (!isUserAuthorized(decoded)) {
      return {
        statusCode: 401,
        body: JSON.stringify({ error: 'Unauthorized: Invalid token' }),
      };
    }

    // Fetch user details from Firestore
    const userRef = db.collection('users').doc(decoded.userId);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User not found' }),
      };
    }

    const userData = userDoc.data();

    // Validate email format
    if (!isValidEmail(userData.email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' }),
      };
    }

    // Start user session
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

// Example function to check user authorization (replace with your own logic)
const isUserAuthorized = (decodedToken) => {
  // Example: Check if the token issuer is trusted or perform any other checks
  // You can add additional checks based on your application's requirements
  return true; // Replace with actual authorization logic
};
