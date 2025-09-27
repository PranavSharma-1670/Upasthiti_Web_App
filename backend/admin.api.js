// backend/admin/routes/api.js (New File)
import express from "express";
import eventsRoutes from "./admin/admin.events.routes.js";
import studentsRoutes from "./admin/admin.students.routes.js";
import teacherRoutes from "./admin/admin.teachers.routes.js";
import classRecordRoutes from "./admin/admin.class.records.routes.js";
import attendanceRoutes from "./admin/admin.attendance.routes.js";

const router = express.Router();

// Root check
router.get("/", (req, res) => {
    res.send("Admin Backend is running...");
    // res.status(200).json({ message: "Admin Backend is running..." });
});

// Mount all the individual admin routes
router.use("/events", eventsRoutes);
router.use("/students", studentsRoutes);
router.use("/teachers", teacherRoutes);
router.use("/records", classRecordRoutes);
router.use("/attendance", attendanceRoutes);

export default router;