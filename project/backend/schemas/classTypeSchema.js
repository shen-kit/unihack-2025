// backend/schemas/classTypeSchema.js

import mongoose from "mongoose";
import { classSchema } from "./classSchema.js";

const classTypeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    required: true,
  },
  capacity: {
    type: Number,
    required: true,
  },
  tutor_count: {
    type: Number,
    required: true,
  },
  classes: [classSchema], // Array of classes
});

const ClassType = mongoose.model("ClassType", classTypeSchema);

export { classTypeSchema, ClassType };
