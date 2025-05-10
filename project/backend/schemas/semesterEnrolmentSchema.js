// backend/schemas/semesterEnrolmentSchema.js

import mongoose from "mongoose";
import { unitEnrolmentSchema } from "./unitEnrolmentSchema.js";

const semesterEnrolmentSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  unitEnrolment: [unitEnrolmentSchema], // Array of unit enrolments
});

const SemesterEnrolment = mongoose.model(
  "SemesterEnrolment",
  semesterEnrolmentSchema,
);
export { semesterEnrolmentSchema, SemesterEnrolment };
