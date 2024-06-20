// netlify/functions/user-details.js
const admin = require('firebase-admin');
const serviceAccount = require('../../src/key/serviceaccountkey.json'); // Adjust the path as needed

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

exports.handler = async (event, context) => {
  const idToken = event.headers.authorization?.split('Bearer ')[1];
  if (!idToken) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' }),
    };
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const user = await admin.auth().getUser(decodedToken.uid);
    return {
      statusCode: 200,
      body: JSON.stringify({
        email: user.email,
        uid: user.uid,
        displayName: user.displayName,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch user details' }),
    };
  }
};
