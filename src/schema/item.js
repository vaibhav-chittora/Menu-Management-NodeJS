import mongoose from "mongoose";

const itemSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
    },
    image: {
      type: String, // URL for the item image
    },
    taxApplicable: {
      type: Boolean,
      default: false,
    },
    tax: {
      type: Number,
      default: 0,
    },
    baseAmount: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      default: 0,
    },
    totalAmount: {
      type: Number,
      required: true,
    },
    subCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubCategory", // Link to sub-category
      required: true,
    },
  },
  { timestamps: true }
);

itemSchema.pre("save", function (next) {
  // Calculate totalAmount before saving
  this.totalAmount = this.baseAmount - this.discount;
  next();
});

const Item = mongoose.model("Item", itemSchema);

export default Item;
