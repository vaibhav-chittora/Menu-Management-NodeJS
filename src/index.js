import express from "express";
import { PORT } from "./config/serverConfig.js";
import apiRouter from "./routes/apiRouter.js";
import connectDB from "./config/dbConfig.js";
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", apiRouter);

app.get("/", (req, res) => {
  res.send("Hello World, this is an express server application.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
