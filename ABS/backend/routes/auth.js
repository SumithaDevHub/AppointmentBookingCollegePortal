const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/details');
// const Admin = require('../models/Admins');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { rollNo, password } = req.body;

    const user = await User.findOne({ rollNo });

    if (!user) {
      return res.status(404).json({ success: false, message: 'User not found!' });
    }

    // Plain-text password comparison
    if (password !== user.password) {
      return res.status(400).json({ success: false, message: 'Invalid password!' });
    }

    // If needed: create a token
    // const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    return res.status(200).json({
      success: true,
      email: user.email,
      rollNo: user.rollNo,
      // token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error!' });
  }
});

module.exports = router;
