import { Request, Response } from "express";
import * as userDao from "../dao/user-dao";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userDao.getAllUsers(req, res);
  users == null || users == undefined
    ? res.status(401).json({ message: "Users not found" })
    : res.status(200).json(users);
};
