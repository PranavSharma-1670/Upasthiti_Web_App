import express from "express";
import { getAllTeachers, addTeacher } from "./admin.teachers.controller.js";

const router = express.Router();

// GET /api/teachers - Fetches all teachers
router.get("/", getAllTeachers);

// POST /api/teachers - Adds a new teacher
router.post("/", addTeacher);

export default router;