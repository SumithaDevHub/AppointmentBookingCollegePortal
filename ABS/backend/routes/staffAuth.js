const express = require('express');
const Staff = require('../models/staff');
const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { staffId, password } = req.body;

    const staff = await Staff.findOne({ staffId });

    if (!staff) {
      return res.status(404).json({ success: false, message: 'Staff not found!' });
    }

    if (password !== staff.password) {
      return res.status(400).json({ success: false, message: 'Invalid password!' });
    }

    return res.status(200).json({
      success: true,
      email: staff.email,
      staffId: staff.staffId,
    });

  } catch (error) {
    console.error('Staff login error:', error);
    res.status(500).json({ success: false, message: 'Server error!' });
  }
});

module.exports = router;
