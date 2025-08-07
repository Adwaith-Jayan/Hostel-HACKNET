const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json()); // This must come BEFORE routes

// Connect to MongoDB
connectDB();

// Routes
app.get("/", (req, res) => {
  res.send("Backend is working with MongoDB! 🚀");
});

const loginRoute = require("./loginroutes");
const registerRoute = require("./register");
const admin = require("./adminlogin");

app.use("/api/login", loginRoute);
app.use("/api/register", registerRoute);
app.use("/api/adminlogin", admin);

app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
