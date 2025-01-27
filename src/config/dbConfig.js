import mongoose from "mongoose";
import { DB_URL } from "./serverConfig.js";
export default async function connectDB() {
  try {
    await mongoose.connect(DB_URL);
    console.log("Connect to MongoDB Database Successfully");
  } catch (error) {
    console.log("Error while connecting to the database", error.message);
  }
}
