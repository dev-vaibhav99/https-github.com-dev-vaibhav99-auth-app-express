import { Request, Response } from "express";
import { UserRegistration } from "../models/UserInterface";

const collectionName: string = "users";

export const registerDao = async (user: UserRegistration, req: Request) => {
  try {
    const db = req.app.locals.db;
    const result = await db.collection(collectionName).insertOne(user);
    console.log(result);
    return result.insertedId;
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};

export const findUser = async (req: Request, res: Response) => {
  const db = req.app.locals.db;
  const result = await db.collection(collectionName).findOne({
    $or: [{ email: req.body.email }, { mobile: req.body.mobile }],
  });
  return result;
};
