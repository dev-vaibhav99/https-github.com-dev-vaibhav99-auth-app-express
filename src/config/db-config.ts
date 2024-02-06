// db.ts
import { MongoClient, Db } from "mongodb";

const mongoURI =
  "mongodb+srv://devvaibhav99:Vaibhav123@cluster0.q9njiop.mongodb.net/";

export async function connectToDatabase(): Promise<Db> {
  const client = await MongoClient.connect(mongoURI, {});
  client.connect();
  const db = client.db("user-management");
  console.log("Connected to MongoDB");
  return db;
}
