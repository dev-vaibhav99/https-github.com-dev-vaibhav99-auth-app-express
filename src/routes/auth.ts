// src/routes/auth.ts
import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { UserRegistration, UserLogin } from "../models/UserInterface";
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
// Example user data (replace this with your database logic)
const users: UserRegistration[] = [];

// Registration endpoint
router.post("/register", registrationValidation, registrationController);

// Login endpoint
router.post("/login", loginValidation, inputType, loginController);

export default router;
