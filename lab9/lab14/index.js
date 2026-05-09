const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const PORT = 3000;
const Student = require("./models/Student");
const Department = require("./models/Department");
const app = express();
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

/* CREATE DEPARTMENT */
app.post("/departments", async (req, res) => {
  try {
    const department = new Department(req.body);

    const savedDepartment = await department.save();

    res.status(201).json(savedDepartment);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

/* CREATE STUDENT */
app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);

    const savedStudent = await student.save();

    res.status(201).json(savedStudent);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});

/* GET STUDENTS */
app.get("/students", async (req, res) => {
  try {
    const students = await Student.find().populate("department");

    res.json(students);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.get("/departments", async (req, res) => {
  try {
    const departments = await Department.find();

    res.json(departments);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
