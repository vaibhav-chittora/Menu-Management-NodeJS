import express from "express";
import testRouter from "./v1/testRouter.js";
import authRouter from "./v1/authROuter.js";
import categoryRouter from "./v1/categoryRouter.js";

const router = express.Router();

router.use("/test", testRouter);

router.use("/auth", authRouter);

router.use("/category", categoryRouter);

export default router;
