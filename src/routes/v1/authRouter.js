import express from "express";
import { signUpController } from "../../controllers/userController.js";
import { signInController } from "../../controllers/userController.js";

const router = express.Router();

//signup route
router.post("/signup", signUpController);

//signin route
router.post("/signin", signInController);

export default router;
