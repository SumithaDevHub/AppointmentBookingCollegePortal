// routes/adminLogin.js
const express = require('express');
const Admin = require('../models/admin');  // Import the Admin model
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { adminId, password } = req.body;

    // Find the admin by adminId
    const admin = await Admin.findOne({ adminId });

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Admin not found!' });
    }

    // Compare passwords
    if (password !== admin.password) {
      return res.status(400).json({ success: false, message: 'Invalid password!' });
    }

    // Login successful
    return res.status(200).json({
      success: true,
      message: 'Login successful',
      adminId: admin.adminId,
      name: admin.name,
      email: admin.email,
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ success: false, message: 'Server error!' });
  }
});

module.exports = router;
