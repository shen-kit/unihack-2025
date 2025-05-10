import express from "express";
import {
  getTimetable,
  getAllClassesForEnrolledUnits,
  getGeneratedTimetable,
  saveTimetable,
} from "../controllers/timetableController.js";

const timetableRouter = express.Router();

timetableRouter.get("/:studentId/:year/:semester", getTimetable);
timetableRouter.get("/period");
timetableRouter.put("/update");

// get all classes for enrolled units
timetableRouter.get(
  "/:studentId/:year/:semester/all",
  getAllClassesForEnrolledUnits,
);

// generator
timetableRouter.post(
  "/:studentId/:year/:semester/generate",
  getGeneratedTimetable,
);

// save timetable
timetableRouter.post("/:studentId/:year/:semester/save", saveTimetable);

export default timetableRouter;
