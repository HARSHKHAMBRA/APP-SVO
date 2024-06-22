const admin = require('firebase-admin');
const serviceAccount = require('../../src/key/serviceaccountkey.json'); // Adjust the path as needed

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

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
    const userRef = db.collection('users').doc(user.uid);
    const userDoc = await userRef.get();

    // Check if the user document exists in Firestore
    if (!userDoc.exists) {
      // Create a new user document with a balance of 0 and generate username
      const username = generateUsername(user.email); // Generate username based on email
      await userRef.set({
        email: user.email,
        balance: 0,
        username: username,
      });
      return {
        statusCode: 200,
        body: JSON.stringify({
          balance: 0,
          username: username,
        }),
      };
    }

    // Retrieve existing user data including balance and username
    const userData = userDoc.data();
    // Ensure username exists, if not generate one based on email
    if (!userData.username) {
      const username = generateUsername(user.email); // Generate username based on email
      await userRef.update({
        username: username,
      });
      userData.username = username;
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        balance: userData.balance || 0,
        username: userData.username,
      }),
    };
  } catch (error) {
    console.error('Error fetching user balance:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch user balance' }),
    };
  }
};

// Helper function to generate a username based on email
function generateUsername(email) {
  // Implement your own logic to generate a username
  // Here's a basic example that extracts the portion before '@'
  const username = email.split('@')[0];
  return username;
}
