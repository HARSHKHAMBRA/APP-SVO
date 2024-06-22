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

    // Fetch additional user details from Firestore
    const db = admin.firestore();
    const userDoc = await db.collection('users').doc(user.uid).get();

    if (!userDoc.exists) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User data not found' }),
      };
    }

    const userData = userDoc.data();

    return {
      statusCode: 200,
      body: JSON.stringify({
        email: user.email,
        uid: user.uid,
        username: userData.username, // Assuming 'username' is stored in the user document
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
