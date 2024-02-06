import { Request, Response } from "express";
import { userEnums } from "../utils/app-constants";

export const getAllUsers = async (req: Request, res: Response) => {
  const db = req.app.locals.db;
  const result = db.collection(userEnums.COLLECTION_NAME).find({}).toArray();
  return result;
};
