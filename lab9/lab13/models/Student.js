const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters"],
    maxlength: [50, "Name cannot exceed 50 characters"],
  },

  age: {
    type: Number,
    required: [true, "Age is required"],
    min: [16, "Minimum age is 16"],
    max: [60, "Maximum age is 60"],
  },

  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Please enter a valid email address"],
  },
});

module.exports = mongoose.model("Student", studentSchema);
