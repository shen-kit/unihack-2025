// backend/schemas/studentSchema.js

import mongoose from "mongoose";
import { semesterEnrolmentSchema } from "./semesterEnrolmentSchema.js";

const studentSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  stuid: {
    type: String,
    required: true,
    unique: true,
  },
  passwd: {
    type: String,
    required: true,
  },
  semesterEnrolment: [semesterEnrolmentSchema], // Array of semester enrolments
});

const Student = mongoose.model("Student", studentSchema);
export { studentSchema, Student };
