import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { UserRegistration } from "../models/UserInterface";
import { findUser, registerDao } from "../dao/auth-dao";
import { sign } from "jsonwebtoken";

export const registrationController = async (req: Request, res: Response) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user: UserRegistration = {
    // id: Date.now(),
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: hashedPassword,
    mobile: req.body.mobile,
    gender: req.body.gender,
    userRole: req.body.userRole,
  };
  const insertedId = await registerDao(user, req);
  insertedId &&
    res.status(201).send(`User registered successfully with id: ${insertedId}`);
};

export const loginController = async (req: Request, res: Response) => {
  const user = await findUser(req, res);
  if (user == null) return res.status(404).send("User not found");

  // Check if the password is correct
  if (await bcrypt.compare(req.body.password, user.password)) {
    const accessToken = sign(user, "JWT_SECRET");
    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("user", user);
    res.json({ accessToken });
  } else {
    res.status(401).send("Incorrect password");
  }
};