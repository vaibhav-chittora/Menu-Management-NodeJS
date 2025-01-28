import express from "express";
import {
  createItemController,
  getAllItemsController,
  getItemsByCategoryController,
  getItemsBySubCategoryController,
  getItemByIdOrNameController,
  updateItemController,
  deleteItemController,
  searchItemController,
} from "../../controllers/itemController.js";

const router = express.Router();

// Item routes

router.post("/create", createItemController);

router.get("/", getAllItemsController);
router.get("/category/:categoryId", getItemsByCategoryController);
router.get("/subcategory/:subCategoryId", getItemsBySubCategoryController);
router.get("/:idOrName", getItemByIdOrNameController);

router.put("/:id", updateItemController);

router.delete("/:id", deleteItemController);

router.get("/search", searchItemController);

export default router;
