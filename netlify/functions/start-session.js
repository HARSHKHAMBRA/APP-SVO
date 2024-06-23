const jwt = require('jsonwebtoken'); // Assuming you use JWT for auth
const { startUserSession } = require('./sessionService'); // Your service for starting sessions

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
    const sessionId = await startUserSession(decoded.userId);
    return {
      statusCode: 200,
      body: JSON.stringify({ sessionId }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to start session' }),
    };
  }
};
