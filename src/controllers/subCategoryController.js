import Category from "../schema/category.js";
import {
  createSubCategoryService,
  deleteSubCategoryByIdService,
  getAllSubCategoriesService,
  getSubCategoriesByCategoryService,
  getSubCategoryByIdService,
  updateSubCategoryByIdService,
} from "../services/subCategory.js";

export const createSubCategoryController = async (req, res) => {
  try {
    const { name, description } = req.body;
    const categoryId = req.params.categoryId;
    const subCategory = await createSubCategoryService(
      name,
      description,
      categoryId
    );
    return res.status(201).json({
      success: true,
      message: "Sub-Category created successfully",
      data: subCategory,
    });
  } catch (error) {
    console.log("Error in createSubCategoryController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating the sub-category",
      error: error,
    });
  }
};

export const getAllSubCategoriesController = async (req, res) => {
  try {
    const subCategories = await getAllSubCategoriesService();
    return res.status(200).json({
      success: true,
      message: "All sub-categories fetched successfully",
      data: subCategories,
    });
  } catch (error) {
    console.log("Error in getAllSubCategoriesController", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the sub-categories",
      error: error,
    });
  }
};

export const getSubCategoriesByCategoryController = async (req, res) => {
  try {
    const { categoryId } = req.params;
    const subCategories = await getSubCategoriesByCategoryService(categoryId);
    return res.status(200).json({
      success: true,
      message: "Sub-categories fetched successfully",
      data: subCategories,
    });
  } catch (error) {
    console.log("Error in getSubCategoriesByCategoryController", error);
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while fetching sub-categories for the category",
      error: error,
    });
  }
};

export const getSubCategoryByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const subCategory = await getSubCategoryByIdService(id);
    return res.status(200).json({
      success: true,
      message: "Sub-category fetched successfully",
      data: subCategory,
    });
  } catch (error) {
    console.log("Error in getSubCategoryByIdController", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while fetching the sub-category",
      error: error,
    });
  }
};

export const updateSubCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedSubCategory = await updateSubCategoryByIdService(id, req.body);
    return res.status(200).json({
      success: true,
      message: "Sub-category updated successfully",
      data: updatedSubCategory,
    });
  } catch (error) {
    console.log("Error in updateSubCategoryController", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while updating the sub-category",
      error: error,
    });
  }
};

export const deleteSubCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteSubCategoryByIdService(id);
    return res.status(200).json({
      success: true,
      message: "Sub-category deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log("Error in deleteSubCategoryController", error);
    return res.status(500).json({
      success: false,
      message: "Something went wrong while deleting the sub-category",
      error: error,
    });
  }
};
