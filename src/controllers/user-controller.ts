import { Request, Response } from "express";
import * as userDao from "../dao/user-dao";
import { generateUploadURL } from "../utils/S3";

export const getAllUsers = async (req: Request, res: Response) => {
  const users = await userDao.getAllUsers(req, res);
  users == null || users == undefined
    ? res.status(401).json({ message: "Users not found" })
    : res.status(200).json(users);
};

export const generateS3UploadUrl = async (req: Request, res: Response) => {
  const url = await generateUploadURL();
  // console.log(url);
  res.status(200).json(url ? url : null);
};

export const getUser = async (req: Request, res: Response) => {
  const users = await userDao.getUser(req, res);
  users == null || users == undefined
    ? res.status(401).json({ message: "User not found" })
    : res.status(200).json(users);
};
