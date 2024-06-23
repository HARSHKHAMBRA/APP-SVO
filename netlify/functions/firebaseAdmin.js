const { admin, db } = require('./firebaseAdmin');

const getUserDetails = async (idToken) => {
  if (!idToken) {
    throw new Error('Unauthorized');
  }

  const decodedToken = await admin.auth().verifyIdToken(idToken);
  const user = await admin.auth().getUser(decodedToken.uid);

  const userRef = db.collection('users').doc(user.uid);
  const userDoc = await userRef.get();

  if (!userDoc.exists) {
    const username = generateUsername(user.email);
    await userRef.set({
      email: user.email,
      balance: 0,
      username: username,
    });
    return {
      email: user.email,
      uid: user.uid,
      username: username,
      balance: 0,
    };
  }

  const userData = userDoc.data();

  if (!userData.username) {
    const username = generateUsername(user.email);
    await userRef.update({ username: username });
    userData.username = username;
  }

  return {
    email: user.email,
    uid: user.uid,
    username: userData.username,
    balance: userData.balance || 0,
  };
};

const generateUsername = (email) => {
  return email.split('@')[0];
};

module.exports = {
  getUserDetails,
};
