const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(express.json());
app.use(cors());
mongoose.connect("mongodb://127.0.0.1:27017/studentDB123")
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));


const Student = require("./models/Students");

app.post("/students", async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
app.get("/students", async (req, res) => {
  const students = await Student.find();
  res.json(students);
});
t
app.get("/students/:rollNo", async (req, res) => {
  const student = await Student.findOne({ rollNo: req.params.rollNo });
  if (!student) return res.status(404).json({ message: "Not found" });
  res.json(student);
});

app.put("/students/:rollNo", async (req, res) => {
  const student = await Student.findOneAndUpdate(
    { rollNo: req.params.rollNo },
    req.body,
    { new: true }
  );
  res.json(student);
});

app.delete("/students/:rollNo", async (req, res) => {
  await Student.findOneAndDelete({ rollNo: req.params.rollNo });
  res.json({ message: "Student deleted" });
});

app.listen(5050, () => {
  console.log("Server running on port 5000");
});
