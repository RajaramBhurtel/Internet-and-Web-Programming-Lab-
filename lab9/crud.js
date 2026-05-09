const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
app.use(cors());
app.use(express.json());
let students = [
  { id: 1, name: "Raja", age: 26 },
  { id: 2, name: "Ram", age: 27 },
];
app.post("/students", (req, res) => {
  // Create a new student
  const { name, age } = req.body;
  const newStudent = {
    id: students.length + 1,
    name,
    age,
  };
  students.push(newStudent);
  res.status(201).json({
    message: "Student created successfully",
    data: newStudent,
  });
});
app.get("/students", (req, res) => {
  // Get all students
  res.json(students);
});
app.get("/students/:id", (req, res) => {
  // Get a student by ID
  const id = parseInt(req.params.id);
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  res.json(student);
});
app.put("/students/:id", (req, res) => {
  // Update a student by ID
  const id = parseInt(req.params.id);
  const { name, age } = req.body;
  const student = students.find((s) => s.id === id);
  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }
  student.name = name || student.name;
  student.age = age || student.age;
  res.json({
    message: "Student updated successfully",
    data: student,
  });
});
app.delete("/students/:id", (req, res) => {
  // Delete a student by ID
  const id = parseInt(req.params.id);
  const index = students.findIndex((s) => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }
  const deletedStudent = students.splice(index, 1);
  res.json({
    message: "Student deleted successfully",
    data: deletedStudent,
  });
});
app.listen(PORT, () => {
  // Start the server
  console.log(`Server running on http://localhost:${PORT}`);
});
