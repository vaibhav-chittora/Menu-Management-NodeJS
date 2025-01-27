import express from "express";
import { PORT } from "./config/serverConfig.js";

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World, this is an express server application.");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
