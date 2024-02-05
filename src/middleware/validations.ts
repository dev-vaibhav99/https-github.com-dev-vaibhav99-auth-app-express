import { NextFunction, Request, Response } from "express";
import { registrationSchema, loginSchema } from "./zod-validations";

export const registrationValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    registrationSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: "Data Invalid" });
  }
};

export const loginValidation = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    loginSchema.parse(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: "Data Invalid" });
  }
};
