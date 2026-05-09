const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to Home Page");
});
app.get("/about", (req, res) => {
  res.send("This is About Page");
});
app.get("/contact", (req, res) => {
  res.send("Contact us at: rajarambhurtei@gmail.com");
});
app.get("/user/:name", (req, res) => {
  const name = req.params.name;
  res.send(`Hello, ${name}`);
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
