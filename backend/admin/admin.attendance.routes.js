import express from "express";
import { getAttendance, saveAttendance } from "./admin.attendance.controller.js";

const router = express.Router();

// GET /api/attendance - Fetches attendance for a class/date
router.get("/", getAttendance);

// POST /api/attendance - Saves attendance for a class/date
router.post("/", saveAttendance);

export default router;