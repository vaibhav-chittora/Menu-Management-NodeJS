import SubCategory from "../schema/subCategory.js";

export async function createSubCategory(name, description, categoryId) {
  try {
    const subCategory = await SubCategory.create({
      name,
      description,
      category: categoryId,
    });
    return subCategory;
  } catch (error) {
    console.log("Error in createSubCategory repository", error);
    throw error;
  }
}

export async function getAllSubCategories() {
  try {
    const subCategories = await SubCategory.find();
    return subCategories;
  } catch (error) {
    console.log("Error in getAllSubCategories repository", error);
    throw error;
  }
}

export async function getSubCategoriesByCategory(categoryId) {
  try {
    const subCategories = await SubCategory.find({ category: categoryId });
    return subCategories;
  } catch (error) {
    console.log("Error in getSubCategoriesByCategory repository", error);
    throw error;
  }
}

export async function getSubCategoryById(id) {
  try {
    const subCategory = await SubCategory.findById(id);
    return subCategory;
  } catch (error) {
    console.log("Error in getSubCategoryById repository", error);
    throw error;
  }
}

export async function updateSubCategoryById(id, updateObject) {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
    return subCategory;
  } catch (error) {
    console.log("Error in updateSubCategory repository", error);
    throw error;
  }
}

export async function deleteSubCategoryById(id) {
  try {
    const response = await SubCategory.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("Error in deleteSubCategory repository", error);
    throw error;
  }
}
