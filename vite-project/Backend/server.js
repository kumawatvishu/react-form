const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// Import users data
let users = require("./data/users");

const app = express();
app.use(cors());
app.use(express.json());

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // folder to save images
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // unique filename
  },
});
const upload = multer({ storage });

// Get all users
app.get("/api/users", (req, res) => {
  res.json(users);
});

// Get user by ID
app.get("/api/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

// Add new user with optional file
app.post("/api/users", (req, res) => {
  const newUser = {
    id: users.length + 1,
    ...req.body,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Update user with optional file
app.put("/api/users/:id", upload.single("file"), (req, res) => {
  const index = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: "User not found" });

  users[index] = {
    ...users[index],
    ...req.body,
    filePath: req.file ? req.file.path : users[index].filePath,
  };
  res.json(users[index]);
});

// Delete user
app.delete("/api/users/:id", (req, res) => {
  console.log("Deleting user with id:", req.params.id);
  users = users.filter((u) => u.id !== parseInt(req.params.id));
  console.log("Updated users:", users);
  res.json({ message: "User deleted successfully" });
});

// Root route
app.get("/", (req, res) => {
  res.send("Backend server is running 🚀. Use /api/users to get data.");
});

// Serve uploaded images
app.use("/uploads", express.static("uploads"));

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
