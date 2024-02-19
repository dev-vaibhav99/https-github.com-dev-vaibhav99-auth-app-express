import { Request, Response } from "express";
import { UserRegistration } from "../models/UserInterface";
import { userEnums } from "../utils/app-constants";
export const registerDao = async (user: UserRegistration, req: Request) => {
  try {
    const db = req.app.locals.db;
    const result = await db
      .collection(userEnums.COLLECTION_NAME)
      .insertOne(user);
    return result.insertedId && user;
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};

export const saveImageToS3 = async (req: Request, url: string) => {
  try {
    const formData = new FormData();
    formData.append("image", req.body.profileImage);
    const result = await fetch(url, {
      method: "PUT",
      body: formData,
    });
  } catch (error) {
    console.error("Error inserting data:", error);
    throw error;
  }
};

export const findUser = async (req: Request, res: Response) => {
  const db = req.app.locals.db;
  const result = await db.collection(userEnums.COLLECTION_NAME).findOne({
    $or: [{ email: req.body.email }, { mobile: req.body.email }],
  });
  return result;
};
