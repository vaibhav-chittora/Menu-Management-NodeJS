import {
  createCategoryService,
  deleteCategoryByIdService,
  getAllCategoriesService,
  getCategoryByIdService,
  updateCategoryByIdService,
} from "../services/category.js";

export const createCategoryController = async (req, res) => {
  try {
    const { name, description } = req.body;
    const category = await createCategoryService(name, description);
    return res.status(201).json({
      success: true,
      message: "Category created successfully",
      data: category,
    });
  } catch (error) {
    console.log("Error in createCategoryController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while creating the category",
      error: error,
    });
  }
};

export const getAllCategoriesController = async (req, res) => {
  try {
    const categories = await getAllCategoriesService();
    return res.status(200).json({
      success: true,
      message: "All categories fetched successfully",
      data: categories,
    });
  } catch (error) {
    console.log("Error in getAllCategoriesController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while getting/fetching all the categories.",
      error: error,
    });
  }
};

export const getCategoryByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await getCategoryByIdService(id);
    return res.status(200).json({
      success: true,
      message: "Category fetched successfully",
      data: category,
    });
  } catch (error) {
    console.log("Error in getCategoryByIdController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Something went wrong while getting/fetching the category.",
      error: error,
    });
  }
};

export const updateCategoryController = async (req, res) => {
  try {
    const { id } = req.params;
    // const { name, description } = req.body;

    const response = await updateCategoryByIdService(id, req.body);
    return res.status(201).json({
      success: true,
      message: "Category updated successfully",
      data: response,
    });
  } catch (error) {
    console.log("Error in updateCategoryController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(400).json({
      success: false,
      message: "Something went wrong while updating the category.",
      error: error,
    });
  }
};
export const deleteCategoryController = async (req, res) => {
  try {
    const response = await deleteCategoryByIdService(req.params.id);
    return res.status(200).json({
      success: true,
      message: "Category deleted successfully",
      data: response,
    });
  } catch (error) {
    console.log("Error in deleteCategoryController", error);
    if (error.status) {
      return res.status(error.status).json({
        success: false,
        message: error.message,
      });
    }
    return res.status(400).json({
      success: false,
      message: "Something went wrong while deleting the category.",
      error: error,
    });
  }
};
