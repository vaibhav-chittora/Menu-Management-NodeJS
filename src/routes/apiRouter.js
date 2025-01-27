import express from "express";
import testRouter from "./v1/testRouter.js";
import authRouter from "./v1/authROuter.js";

const router = express.Router();

router.use("/test", testRouter);

router.use("/auth", authRouter);

export default router;
