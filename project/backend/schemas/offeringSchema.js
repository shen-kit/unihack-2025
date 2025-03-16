// backend/schemas/offeringSchema.js

import mongoose from "mongoose";
import { classTypeSchema } from "./classTypeSchema.js";

const offeringSchema = new mongoose.Schema({
  year: {
    type: Number,
    required: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  campus: {
    type: String,
    required: true,
  },
  classTypes: [classTypeSchema], // Array of class types
});

const Offering = mongoose.model("Offering", offeringSchema);
export { offeringSchema, Offering };
