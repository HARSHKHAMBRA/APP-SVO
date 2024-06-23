const { admin, db } = require('./firebaseAdmin');

const getUserDetails = async (idToken) => {
  if (!idToken) {
    throw new Error('Unauthorized');
  }

  // Verify the ID token to get user information
  const decodedToken = await admin.auth().verifyIdToken(idToken);
  const user = await admin.auth().getUser(decodedToken.uid);

  // Reference to the user document in Firestore
  const userRef = db.collection('users').doc(user.uid);
  const userDoc = await userRef.get();

  // If the user document does not exist, create a new one with default values
  if (!userDoc.exists) {
    const username = generateUsername(user.email);
    await userRef.set({
      email: user.email,
      balance: 0,
      username: username,
    });

    // Return the newly created user details
    return {
      email: user.email,
      uid: user.uid,
      username: username,
      balance: 0,
    };
  }

  // If user document exists, fetch and return existing user details
  const userData = userDoc.data();

  // If username is missing, update it based on the email and return updated user details
  if (!userData.username) {
    const username = generateUsername(user.email);
    await userRef.update({ username: username });
    userData.username = username;
  }

  // Return the existing user details
  return {
    email: user.email,
    uid: user.uid,
    username: userData.username,
    balance: userData.balance || 0,
  };
};

// Helper function to generate username from email (assuming username is the portion before '@')
const generateUsername = (email) => {
  return email.split('@')[0];
};

module.exports = {
  getUserDetails,
};
