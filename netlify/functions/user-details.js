const admin = require('firebase-admin');
const serviceAccount = require('../../src/key/serviceaccountkey.json'); // Adjust the path as needed

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

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

    // Retrieve user document from Firestore
    const userRef = db.collection('users').doc(user.uid);
    const userDoc = await userRef.get();

    if (!userDoc.exists) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User data not found' }),
      };
    }

    const userData = userDoc.data();
    const username = userData.username || 'No username available'; // Assuming 'username' field exists in Firestore

    // Check if user has a balance field
    if (!userData.hasOwnProperty('balance')) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User balance not found' }),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({
        email: user.email,
        uid: user.uid,
        username: username,
        balance: userData.balance,
      }),
    };
  } catch (error) {
    console.error('Error fetching user details:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch user details' }),
    };
  }
};
