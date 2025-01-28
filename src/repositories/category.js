import Category from "../schema/category.js";

export async function createCategory(name, description) {
  try {
    const category = await Category.create({
      name,
      description,
    });
    return category;
  } catch (error) {
    console.log("error in create category repository", error);
    throw error;
  }
}

export async function findCategoryByName(name) {
  try {
    const category = await Category.findOne({ name });
    return category;
  } catch (error) {
    console.log("error in findCategory Repository", error);
    throw error;
  }
}

export async function getAllCategories() {
  try {
    const categories = await Category.find();
    return categories;
  } catch (error) {
    console.log("error in getAllCategories Repository", error);
    throw error;
  }
}

export async function getCategoryById(id) {
  try {
    const category = await Category.findById(id);
    return category;
  } catch (error) {
    console.log("error in getCategoryById Repository", error);
    throw error;
  }
}

export async function updateCategoryById(id, updateObject) {
  try {
    const category = await Category.findByIdAndUpdate(id, updateObject, {
      new: true,
    });
    return category;
  } catch (error) {
    console.log("error in updateCategory Repository", error);
    throw error;
  }
}

export async function deleteCategoryById(id) {
  try {
    const response = await Category.findByIdAndDelete(id);
    return response;
  } catch (error) {
    console.log("error in deleteCategory Repository", error);
    throw error;
  }
}
