import {
  createItem,
  getAllItems,
  getItemsByCategory,
  getItemsBySubCategory,
  getItemByIdOrName,
  updateItemById,
  deleteItemById,
  searchItemByName,
} from "../repositories/item.js";

// Create item service
export const createItemService = async (
  subCategoryId,
  name,
  description,
  image,
  taxApplicable,
  tax,
  baseAmount,
  discount
) => {
  try {
    const newItem = await createItem(
      subCategoryId,
      name,
      description,
      image,
      taxApplicable,
      tax,
      baseAmount,
      discount
    );
    return newItem;
  } catch (error) {
    console.log("Error in createItemService", error);
    throw error;
  }
};

// Get all items service
export const getAllItemsService = async () => {
  try {
    const items = await getAllItems();
    return items;
  } catch (error) {
    console.log("Error in getAllItemsService", error);
    throw error;
  }
};

// Get items by category service
export const getItemsByCategoryService = async (categoryId) => {
  try {
    const items = await getItemsByCategory(categoryId);
    return items;
  } catch (error) {
    console.log("Error in getItemsByCategoryService", error);
    throw error;
  }
};

// Get items by sub-category service
export const getItemsBySubCategoryService = async (subCategoryId) => {
  try {
    const items = await getItemsBySubCategory(subCategoryId);
    return items;
  } catch (error) {
    console.log("Error in getItemsBySubCategoryService", error);
    throw error;
  }
};

// Get item by ID or name service
export const getItemByIdOrNameService = async (idOrName) => {
  try {
    const item = await getItemByIdOrName(idOrName);
    return item;
  } catch (error) {
    console.log("Error in getItemByIdOrNameService", error);
    throw error;
  }
};

// Update item by ID service
export const updateItemByIdService = async (id, updateFields) => {
  try {
    const updatedItem = await updateItemById(id, updateFields);
    return updatedItem;
  } catch (error) {
    console.log("Error in updateItemByIdService", error);
    throw error;
  }
};

// Delete item by ID service
export const deleteItemByIdService = async (id) => {
  try {
    const deletedItem = await deleteItemById(id);
    return deletedItem;
  } catch (error) {
    console.log("Error in deleteItemByIdService", error);
    throw error;
  }
};

// Search item by name service
export const searchItemByNameService = async (name) => {
  try {
    const items = await searchItemByName(name);
    return items;
  } catch (error) {
    console.log("Error in searchItemByNameService", error);
    throw error;
  }
};
