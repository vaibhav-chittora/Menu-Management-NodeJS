import {
  createCategory,
  deleteCategoryById,
  findCategoryByName,
  getAllCategories,
  getCategoryById,
  updateCategoryById,
} from "../repositories/category.js";

export const createCategoryService = async (name, description) => {
  try {
    const category = await findCategoryByName(name);
    if (category) {
      throw {
        status: 400,
        message: "Category already exists",
      };
    }
    const newCategory = await createCategory(name, description);
    return newCategory;
  } catch (error) {
    console.log("error in createCategoryService", error);
    throw error;
  }
};

export const getAllCategoriesService = async () => {
  try {
    const categories = await getAllCategories();
    return categories;
  } catch (error) {
    console.log("error in getAllCategoriesService", error);
    throw error;
  }
};

export const getCategoryByIdService = async (id) => {
  try {
    const category = await getCategoryById(id);
    return category;
  } catch (error) {
    console.log("error in getCategoryByIdService", error);
    throw error;
  }
};

export const updateCategoryByIdService = async (id, updateObject) => {
  try {
    const category = await updateCategoryById(id, updateObject);
    console.log("updated category - ", category);
    return category;
  } catch (error) {
    console.log("error in updateCategoryService", error);
    throw error;
  }
};

export const deleteCategoryByIdService = async (id, user) => {
  try {
    const response = await deleteCategoryById(id);
    console.log("deleted category - ", response);
    return response;
  } catch (error) {
    console.log("error in deleteCategoryService", error);
    throw error;
  }
};
