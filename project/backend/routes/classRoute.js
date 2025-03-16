import express from "express";
import { getClassFromClassId } from "../controllers/classController.js";

const classRouter = express.Router();

classRouter.get("/:classId", getClassFromClassId);

export default classRouter;
