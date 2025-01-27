import { testController } from "../../controllers/testController.js";
import express from "express";

const router = express.Router();

router.get("/test-user", testController);

export default router;
