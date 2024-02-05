// src/routes/protected.ts
import { Router, Request, Response } from "express";
import { authenticateToken } from "../middleware/auth";

const router = Router();

// Example protected route
router.get("/profile", authenticateToken, (req: Request, res: Response) => {
  // Access user details from req.user
  // res.send(req.user);
  res.send("Profile");
});

export default router;
