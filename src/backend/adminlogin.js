// adminlogin.js

const express = require("express");
const router = express.Router();
const Admin = require("./admin");

router.post("/", async (req, res) => {
  const { adminusername, password } = req.body;

  if (!adminusername || !password) {
    return res.status(400).json({ error: "adminusername and password required" });
  }

  try {
    const admin = await Admin.findOne({ adminusername });

    if (!admin || admin.password !== password) {
      return res.status(401).json({ error: "Invalid admin credentials" });
    }

    res.json({ message: "Admin login successful", admin });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
