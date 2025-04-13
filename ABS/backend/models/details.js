const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the schema for the Student
const studentSchema = new Schema({
  rollNo: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  department: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

// Create the model from the schema
const Student = mongoose.model('Student', studentSchema);

// Export the model
module.exports = Student;
