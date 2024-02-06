import express, { Request, Response } from "express";
import authRouter from "./routes/auth";
import protectedRouter from "./routes/protected";
import { connectToDatabase } from "./config/db-config";
import * as dotenv from "dotenv";
import userRoutes from "./routes/user-routes";

dotenv.config();

declare global {
  namespace Express {
    interface Request {
      user?: any; // Adjust the type of 'user' according to your user model
      inputType: string;
    }
  }
}

const app = express();
const PORT = process.env.PORT || 3000;

// Routes
app.use(express.json());
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);
app.use("/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

connectToDatabase()
  .then((db) => {
    app.locals.db = db; // Share the database connection across the application
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });
