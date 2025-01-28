import express from "express";
import {
  createSubCategoryController,
  getAllSubCategoriesController,
  getSubCategoriesByCategoryController,
  getSubCategoryByIdController,
  updateSubCategoryController,
  deleteSubCategoryController,
} from "../../controllers/subCategoryController.js";

const router = express.Router();

// Sub-category routes under Category

// Create a sub-category under a specific category
router.post("/:categoryId/subcategory", createSubCategoryController);

// Get all sub-categories (if needed globally)
router.get("/subcategories", getAllSubCategoriesController); // bugfix needed

// Get all sub-categories for a specific category
router.get("/:categoryId/subcategories", getSubCategoriesByCategoryController);

// Get a sub-category by ID
router.get("/subcategory/:id", getSubCategoryByIdController);

// Update a sub-category
router.put("/subcategory/:id", updateSubCategoryController);

// Delete a sub-category
router.delete("/subcategory/:id", deleteSubCategoryController);

export default router;
