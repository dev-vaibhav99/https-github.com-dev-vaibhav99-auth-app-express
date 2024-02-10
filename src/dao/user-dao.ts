import { Request, Response } from "express";
import { userEnums } from "../utils/app-constants";

export const getAllUsers = async (req: Request, res: Response) => {
  const db = req.app.locals.db;
  const result = db.collection(userEnums.COLLECTION_NAME).find({}).toArray();
  return result;
};

export const getUser = async (req: Request, res: Response) => {
  const db = req.app.locals.db;
  const result = await db.collection(userEnums.COLLECTION_NAME).findOne({
    $or: [{ email: req.body.email }, { mobile: req.body.email }],
  });
  return result;
};
