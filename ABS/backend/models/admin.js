// models/Admin.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Admin schema
const adminSchema = new Schema({
  adminId: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

// Create and export the model
const Admin = mongoose.model('Admin', adminSchema);
module.exports = Admin;
