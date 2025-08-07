// loginroutes.js
const express = require("express");
const router = express.Router();
const Student = require("./Student");

// @route POST /api/login
router.post("/", async (req, res) => {
  const { phoneNumber, password } = req.body;

  if (!phoneNumber || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const user = await Student.findOne({ phoneno: phoneNumber });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    if (user.passwd !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful", user });
  } catch (err) {
    console.error("Login error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
