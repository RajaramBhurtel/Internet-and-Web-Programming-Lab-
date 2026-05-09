const jwt = require("jsonwebtoken");
const SECRET_KEY = "mca2026";
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Student = require("./models/Student");
const Department = require("./models/Department");
const app = express();
const PORT = 3000;
app.use(cors());
app.use(express.json());
mongoose
  .connect("mongodb://127.0.0.1:27017/studentDB")
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

app.post("/departments", verifyToken, async (req, res) => {
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
app.get("/departments", verifyToken, async (req, res) => {
  try {
    const departments = await Department.find();
    res.json(departments);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.post("/students", verifyToken, async (req, res) => {
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
app.get("/students", verifyToken, async (req, res) => {
  try {
    const students = await Student.find().populate("department");

    res.json(students);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
app.get("/students/:id", verifyToken, async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).populate(
      "department",
    );

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    res.json(student);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});
app.put("/students/:id", verifyToken, async (req, res) => {
  try {
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true },
    );
    if (!updatedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    res.json(updatedStudent);
  } catch (err) {
    res.status(400).json({
      message: err.message,
    });
  }
});
app.delete("/students/:id", verifyToken, async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return res.status(404).json({
        message: "Student not found",
      });
    }
    res.json({
      message: "Student deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email } = req.body;

    const student = await Student.findOne({
      email,
    });

    if (!student) {
      return res.status(401).json({
        message: "Invalid email",
      });
    }

    // Create token
    const token = jwt.sign(
      {
        id: student._id,
        email: student.email,
      },
      SECRET_KEY,
      {
        expiresIn: "1h",
      },
    );

    res.json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
});

function verifyToken(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({
      message: "Access denied",
    });
  }

  const token = authHeader.split(" ")[1];

  try {
    const verified = jwt.verify(token, SECRET_KEY);

    req.user = verified;

    next();
  } catch (err) {
    res.status(400).json({
      message: "Invalid token",
    });
  }
}

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
