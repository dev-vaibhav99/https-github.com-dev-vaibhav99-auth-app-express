// src/app.ts
import express from "express";
import authRouter from "./routes/auth";
import protectedRouter from "./routes/protected";

const app = express();

app.use(express.json());

// Routes
app.use("/auth", authRouter);
app.use("/protected", protectedRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
