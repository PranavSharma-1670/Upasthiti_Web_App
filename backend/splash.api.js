import express from 'express';
import authRoutes from './splash_intro/auth.routes.js';

const router = express.Router();

router.get("/", (req, res) => {
    res.send("Splash Backend is running...");
    // res.status(200).json({ message: "Splash Backend is running..." });
});

router.use('/auth', authRoutes);

export default router;