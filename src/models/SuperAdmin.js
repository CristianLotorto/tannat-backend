const mongoose = require('mongoose');

const { Schema } = mongoose;

const superAdminsSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('SuperAdmin', superAdminsSchema);
