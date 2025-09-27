import express from "express";
import { getClassesWithSections ,getStudentsByGradeAndSection, addStudent} from "./admin.students.controller.js";

const router = express.Router();

// GET /api/students/classes
router.get("/classes", getClassesWithSections);

router.get("/:grade/:section", getStudentsByGradeAndSection);

router.post("/", addStudent);

export default router;
