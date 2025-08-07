const express = require("express");
const router = express.Router();
const Student = require("./Student"); // adjust path if needed

// @route POST /api/register
// @desc Register a new student
router.post("/", async (req, res) => {
  const { name, collegeDetails, dob, phoneno, guardianDetails, passwd } = req.body;

  // Basic validation
  if (!name || !collegeDetails || !dob || !phoneno || !guardianDetails || !passwd) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if student with same phone number exists
    const existingStudent = await Student.findOne({ phoneno });

    if (existingStudent) {
      return res.status(409).json({ message: "Student already exists with this phone number" });
    }

    // Create and save new student
    const newStudent = new Student({
      name,
      collegeDetails,
      dob,
      phoneno,
      guardianDetails,
      passwd,
    });

    await newStudent.save();

    res.status(201).json({ message: "Student registered successfully", student: newStudent });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
