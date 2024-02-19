// src/routes/protected.ts
import { Router, Request, Response } from "express";
import { authenticateToken } from "../middleware/auth";

const router = Router();

// Example protected route
router.get("/profile", authenticateToken, (req: Request, res: Response) => {
  
  res.json("Profile");
});

export default router;
