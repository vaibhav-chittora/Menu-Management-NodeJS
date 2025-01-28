import {
  createItemService,
  getAllItemsService,
  getItemsByCategoryService,
  getItemsBySubCategoryService,
  getItemByIdOrNameService,
  updateItemByIdService,
  deleteItemByIdService,
  searchItemByNameService,
} from "../services/item.js";

// Create item controller
export const createItemController = async (req, res) => {
  try {
    const {
      subCategoryId,
      name,
      description,
      image,
      taxApplicable,
      tax,
      baseAmount,
      discount,
    } = req.body;
    const item = await createItemService(
      subCategoryId,
      name,
      description,
      image,
      taxApplicable,
      tax,
      baseAmount,
      discount
    );
    return res.status(201).json({
      success: true,
      message: "Item created successfully",
      data: item,
    });
  } catch (error) {
    console.log("Error in createItemController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// Get all items controller
export const getAllItemsController = async (req, res) => {
  try {
    const items = await getAllItemsService();
    return res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items,
    });
  } catch (error) {
    console.log("Error in getAllItemsController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// Get items by category controller
export const getItemsByCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const items = await getItemsByCategoryService(categoryId);
    return res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items,
    });
  } catch (error) {
    console.log("Error in getItemsByCategoryController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// Get items by sub-category controller
export const getItemsBySubCategoryController = async (req, res) => {
  try {
    const { subCategoryId } = req.params;
    const items = await getItemsBySubCategoryService(subCategoryId);
    return res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items,
    });
  } catch (error) {
    console.log("Error in getItemsBySubCategoryController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// Get item by name or ID controller
export const getItemByIdOrNameController = async (req, res) => {
  try {
    const { idOrName } = req.params;
    const item = await getItemByIdOrNameService(idOrName);
    return res.status(200).json({
      success: true,
      message: "Item fetched successfully",
      data: item,
    });
  } catch (error) {
    console.log("Error in getItemByIdOrNameController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// Update item controller
export const updateItemController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedItem = await updateItemByIdService(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Item updated successfully",
      data: updatedItem,
    });
  } catch (error) {
    console.log("Error in updateItemController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// Delete item controller
export const deleteItemController = async (req, res) => {
  try {
    const { id } = req.params;
    await deleteItemByIdService(id);
    return res
      .status(200)
      .json({ success: true, message: "Item deleted successfully" });
  } catch (error) {
    console.log("Error in deleteItemController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};

// Search item by name controller
export const searchItemController = async (req, res) => {
  try {
    const { name } = req.query;
    const items = await searchItemByNameService(name);
    return res.status(200).json({
      success: true,
      message: "Items fetched successfully",
      data: items,
    });
  } catch (error) {
    console.log("Error in searchItemController", error);
    return res
      .status(500)
      .json({ success: false, message: "Something went wrong", error });
  }
};
