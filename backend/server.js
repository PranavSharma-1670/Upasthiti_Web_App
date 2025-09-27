// backend/server.js
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

import adminApiRoutes from './admin.api.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

// --- Mount API Routes ---
// app.use("/api/student", ...); // Example from previous modules
// app.use("/api/teacher", ...); // Example from previous modules

// Root check
app.get("/", (req, res) => {
    res.send("Backend is running...");
  });

app.use("/api/admin", adminApiRoutes);

app.listen(5050, () => {
  console.log("Server running on http://localhost:5050");
});