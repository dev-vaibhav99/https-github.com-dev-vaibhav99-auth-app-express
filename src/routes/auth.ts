// src/routes/auth.ts
import { Router, Request, Response } from "express";
import { inputType } from "../middleware/auth";
import {
  registrationValidation,
  loginValidation,
} from "../middleware/validations";
import {
  loginController,
  registrationController,
} from "../controllers/auth-controller";

const router = Router();

router.post("/register", registrationValidation, registrationController);

router.post("/login", loginValidation, inputType, loginController);

export default router;
