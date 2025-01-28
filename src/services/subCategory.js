import {
  createSubCategory,
  deleteSubCategoryById,
  getAllSubCategories,
  getSubCategoriesByCategory,
  getSubCategoryById,
  updateSubCategoryById,
} from "../repositories/subCategory.js";

export const createSubCategoryService = async (
  name,
  description,
  categoryId
) => {
  try {
    const subCategory = await createSubCategory(name, description, categoryId);
    return subCategory;
  } catch (error) {
    console.log("Error in createSubCategoryService", error);
    if (error.name === "MongoServerError" || error.code === "11000") {
      throw {
        status: 400,
        message: "Sub-Category with same name already exists",
        error: error,
      };
    }
    throw error;
  }
};

export const getAllSubCategoriesService = async () => {
  try {
    const subCategories = await getAllSubCategories();
    return subCategories;
  } catch (error) {
    console.log("Error in getAllSubCategoriesService", error);
    throw error;
  }
};

export const getSubCategoriesByCategoryService = async (categoryId) => {
  try {
    const subCategories = await getSubCategoriesByCategory(categoryId);
    return subCategories;
  } catch (error) {
    console.log("Error in getSubCategoriesByCategoryService", error);
    throw error;
  }
};

export const getSubCategoryByIdService = async (id) => {
  try {
    const subCategory = await getSubCategoryById(id);
    return subCategory;
  } catch (error) {
    console.log("Error in getSubCategoryByIdService", error);
    throw error;
  }
};

export const updateSubCategoryByIdService = async (id, updateObject) => {
  try {
    const subCategory = await updateSubCategoryById(id, updateObject);
    return subCategory;
  } catch (error) {
    console.log("Error in updateSubCategoryByIdService", error);
    throw error;
  }
};

export const deleteSubCategoryByIdService = async (id) => {
  try {
    const response = await deleteSubCategoryById(id);
    return response;
  } catch (error) {
    console.log("Error in deleteSubCategoryByIdService", error);
    throw error;
  }
};
