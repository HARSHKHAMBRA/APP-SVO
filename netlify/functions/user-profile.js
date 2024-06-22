const admin = require('firebase-admin');
const serviceAccount = require('../../src/key/serviceaccountkey.json'); // Adjust the path as needed

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
    const userDoc = await db.collection('users').doc(user.uid).get();

    if (!userDoc.exists) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'User not found' }),
      };
    }

    const userData = userDoc.data();
    return {
      statusCode: 200,
      body: JSON.stringify({
        username: userData.username,
        email: userData.email,
        profile: userData.profile || {}, // Assuming profile information is stored under 'profile' key
      }),
    };
  } catch (error) {
    console.error('Error fetching user profile:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch user profile' }),
    };
  }
};
