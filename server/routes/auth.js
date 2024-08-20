// backend/routes/auth.js
const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../modules/User');

const router = express.Router();
const JWT_SECRET = 'sangamyadavvdev';

// Signup route
router.post('/signup', async (req, res) => {
  const {username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();
    res.status(201).json({ message: 'Account created successfully!' });
  } catch (error) {
    res.status(400).json({ message: 'Already exists email.' });
  }
});

// Login route
router.post('/login', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ message: 'Invalid credentials.' });
    }

    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ message: 'Error logging in.' });
  }
});

module.exports = router;
