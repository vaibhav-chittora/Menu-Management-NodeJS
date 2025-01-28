import express from "express";
import {
  createCategoryController,
  deleteCategoryController,
  getAllCategoriesController,
  getCategoryByIdController,
  updateCategoryController,
} from "../../controllers/categoryController.js";

const router = express.Router();

// category routes

router.post("/create", createCategoryController);

router.get("/:id", getCategoryByIdController);

router.get("/", getAllCategoriesController);

router.put("/:id", updateCategoryController);

router.delete("/:id", deleteCategoryController);

export default router;
