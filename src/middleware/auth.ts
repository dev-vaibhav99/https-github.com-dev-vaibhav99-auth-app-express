import { Request, Response, NextFunction } from "express";
import jwt, { GetPublicKeyOrSecret, Secret } from "jsonwebtoken";

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const secret: Secret | GetPublicKeyOrSecret | string | undefined =
    process.env.JWT_SECRET;
  const authHeader: string | undefined = req.headers["authorization"];
  const token: string | undefined = authHeader && authHeader.split(" ")[1];
  if (token == null) res.status(401).json({ message: "Invalid token" });

  token &&
    jwt.verify(token, secret!, (err, user) => {
      if (err) res.status(403).json({ message: "Forbidden" });
      // req.user = user;
      next();
    });
};

export const inputType = (req: Request, res: Response, next: NextFunction) => {
  if (req.body.email.includes("@")) req.inputType = "email";
  else req.inputType = "mobile";
  next();
};
