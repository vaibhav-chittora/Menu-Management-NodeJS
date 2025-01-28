import mongoose from "mongoose";

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    taxApplicable: {
      type: Boolean,
      default: false,
    },
    taxNumber: {
      type: String,
    },
    taxType: {
      type: String,
      default: "percentage",
    },
  },
  { timestamps: true }
);

const Category = mongoose.model("Category", categorySchema);

export default Category;
