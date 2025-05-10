// backend/schemas/unitSchema.js

import mongoose from "mongoose";
import { offeringSchema } from "./offeringSchema.js";
const unitSchema = new mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  offerings: [offeringSchema], // Array of offerings
});

const Unit = mongoose.model("Unit", unitSchema);
export { unitSchema, Unit };
