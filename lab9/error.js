//Lab 10: Error Handling in Express.js
const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.get("/error", (req, res, next) => {
  const err = new Error("This is a custom error!");
  err.status = 500;
  next(err);
});
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "Page Not Found (404)",
  });
});
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
