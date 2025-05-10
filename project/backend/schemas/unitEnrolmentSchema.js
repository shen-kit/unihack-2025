// backend/schemas/unitEnrolmentSchema.js

import mongoose from "mongoose";

const unitEnrolmentSchema = new mongoose.Schema({
  unitcode: {
    type: String,
    required: true,
  },
  classes: {
    type: [Number], // Array of class IDs
    required: true,
  },
});

const UnitEnrolment = mongoose.model("UnitEnrolment", unitEnrolmentSchema);
export { unitEnrolmentSchema, UnitEnrolment };
