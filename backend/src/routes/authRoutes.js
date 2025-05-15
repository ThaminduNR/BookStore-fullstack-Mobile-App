import express from 'express';
import User from '../models/User.js';

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { email, username, password } = req.body;
    if (!email || !username || !password) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: 'Password must be at least 6 characters long' });
    }
    if (username.length < 3) {
      return res
        .status(400)
        .json({ message: 'Username must be at least 3 characters long' });
    }

    // check if user already exists

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: 'Username already exists' });
    }

    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    //get random profile Image
    const profileImage = `https://api.dicebear.com/7.x/pixel-art/svg?seed=${username}`;

    const user = new User({
      username,
      email,
      password,
      profileImage,
    });

    const result = await user.save();
  } catch (error) {}
});

router.post('/login', async (req, res) => {
  res.send('Login Success');
});

export default router;
