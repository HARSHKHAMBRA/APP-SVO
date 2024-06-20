// backend/server.js
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

const users = [];

// Register route
app.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = { email, password: hashedPassword };
    users.push(user);

    const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '12y' });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Server start
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
