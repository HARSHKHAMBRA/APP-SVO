const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');

// Path to your service account key file
const serviceAccount = require(path.resolve(__dirname, './key/serviceAccountKey.json'));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();

// Configure CORS to allow only the specified origin
const corsOptions = {
  origin: 'https://svo-v2.netlify.app',
  optionsSuccessStatus: 200 // For legacy browser support
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

// Middleware to verify Firebase ID token
const verifyToken = async (req, res, next) => {
  const idToken = req.headers.authorization?.split('Bearer ')[1];
  if (!idToken) {
    return res.status(401).send('Unauthorized: No token provided');
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    console.error('Token verification failed:', error);
    return res.status(401).send('Unauthorized: Invalid token');
  }
};

// Endpoint to fetch user details
app.get('/api/user-details', verifyToken, async (req, res) => {
  try {
    const user = await admin.auth().getUser(req.user.uid);
    res.status(200).json({
      email: user.email,
      uid: user.uid,
      displayName: user.displayName,
    });
  } catch (error) {
    console.error('Failed to fetch user details:', error);
    res.status(500).json({ error: 'Failed to fetch user details' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
