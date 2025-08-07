const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  collegeDetails: {
    type: String,
    required: true,
  },
  dob: {
    type: Date,
    required: true,
  },
  phoneno: {
    type: String,
    required: true,
    unique: true,
  },
  guardianDetails: {
    type: String,
    required: true,
  },
  passwd: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Student", studentSchema);
