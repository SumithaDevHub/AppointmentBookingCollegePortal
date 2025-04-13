const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const staffSchema = new Schema({
  staffId: {
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
  password: {
    type: String,
    required: true
  },
  id: {
    type: String,
    required: true
  }
});

const Staff = mongoose.model('Staff', staffSchema);
module.exports = Staff;
