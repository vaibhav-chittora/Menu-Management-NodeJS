import express from "express";
import testRouter from "./v1/testRouter.js";

const router = express.Router();

router.use("/test", testRouter);

export default router;
