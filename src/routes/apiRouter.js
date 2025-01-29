import express from "express";
import testRouter from "./v1/testRouter.js";
import authRouter from "./v1/authROuter.js";
import categoryRouter from "./v1/categoryRouter.js";
import itemRouter from "./v1/itemRouter.js";
import SubCategory from "./v1/subCategory.js";

const router = express.Router();

router.use("/test", testRouter);

router.use("/auth", authRouter);

router.use("/category", categoryRouter);

router.use("/category", SubCategory);

router.use("/category/item", itemRouter);

export default router;
