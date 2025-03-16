import express from "express";
import connectDB from "./database/db.js";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js";
import timetableRouter from "./routes/timetableRoute.js";
import classRouter from "./routes/classRoute.js";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());
app.use(
  cors({
    origin: "http://localhost:5173", // Change this to your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
const port = 3000;

dotenv.config();

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use("/api/class", classRouter);
app.use("/api/timetable", timetableRouter);
app.use("/api/auth", authRouter);

app.listen(port, () => {
  connectDB();
  console.log(`Server is running on port ${port}`);
});
