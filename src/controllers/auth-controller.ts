import { Request, Response, response } from "express";
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
    imageUrl: req.body.imageUrl,
  };
  const insertedUser = await registerDao(user, req);
  console.log(insertedUser);
  insertedUser && res.status(201).json(insertedUser);
};

export const loginController = async (req: Request, res: Response) => {
  const user = await findUser(req, res);
  if (user == null) return res.status(404).send("User not found");

  // Check if the password is correct
  if (await bcrypt.compare(req.body.password, user.password)) {
    const accessToken = sign(user, "JWT_SECRET");
    res.json({ accessToken, user });
  } else {
    res.status(401).send("Incorrect password");
  }
};
