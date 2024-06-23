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
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User not found' }),
      };
    }

    const userData = userDoc.data();

    // Validate if user has a balance field
    if (!userData.hasOwnProperty('balance')) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User balance not found' }),
      };
    }

    // Return the user's balance
    return {
      statusCode: 200,
      body: JSON.stringify({
        balance: userData.balance,
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
