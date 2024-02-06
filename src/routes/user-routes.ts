import { Router, Request, Response } from "express";
import * as userController from "../controllers/user-controller";
import { authenticateToken } from "../middleware/auth";

const router = Router();

router.get("/", authenticateToken, userController.getAllUsers);

export default router;
