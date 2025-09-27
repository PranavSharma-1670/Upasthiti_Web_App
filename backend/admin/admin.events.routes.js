import express from "express";
import { getAllEvents ,addEvent} from "./admin.events.controller.js";

const router = express.Router();

// GET /api/events
router.get("/",getAllEvents);
router.post("/",addEvent);

export default router;
