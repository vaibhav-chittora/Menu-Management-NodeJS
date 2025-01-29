import Item from "../schema/item.js";

// Create an item
export async function createItem(subCategory, name, baseAmount, totalAmount) {
  try {
    const item = new Item({
      subCategory,
      name,
      baseAmount,
      totalAmount,
    });
    await item.save();
    return item;
  } catch (error) {
    console.log("Error in createItem repository", error);
    throw error;
  }
}

// Get all items
export async function getAllItems() {
  try {
    const items = await Item.find();
    return items;
  } catch (error) {
    console.log("Error in getAllItems repository", error);
    throw error;
  }
}

// Get all items by category
export async function getItemsByCategory(categoryId) {
  try {
    const items = await Item.find({ "subCategory.category": categoryId });
    return items;
  } catch (error) {
    console.log("Error in getItemsByCategory repository", error);
    throw error;
  }
}

// Get all items by sub-category
export async function getItemsBySubCategory(subCategoryId) {
  try {
    const items = await Item.find({ subCategory: subCategoryId });
    return items;
  } catch (error) {
    console.log("Error in getItemsBySubCategory repository", error);
    throw error;
  }
}

// Get an item by ID or name
export async function getItemByIdOrName(idOrName) {
  try {
    const item = await Item.findOne({
      $or: [{ _id: idOrName }, { name: idOrName }],
    });
    return item;
  } catch (error) {
    console.log("Error in getItemByIdOrName repository", error);
    throw error;
  }
}

// Update an item by ID
export async function updateItemById(id, updateFields) {
  try {
    const item = await Item.findByIdAndUpdate(id, updateFields, { new: true });
    return item;
  } catch (error) {
    console.log("Error in updateItemById repository", error);
    throw error;
  }
}

// Delete an item by ID
export async function deleteItemById(id) {
  try {
    const item = await Item.findByIdAndDelete(id);
    return item;
  } catch (error) {
    console.log("Error in deleteItemById repository", error);
    throw error;
  }
}

// Search item by name
export async function searchItemByName(name) {
  try {
    const items = await Item.find({ name: new RegExp(name, "i") }); // Case-insensitive search
    return items;
  } catch (error) {
    console.log("Error in searchItemByName repository", error);
    throw error;
  }
}
