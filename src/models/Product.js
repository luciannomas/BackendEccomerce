import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      trim: true,
    },
    price: {
      type: Number,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
    collection: "product",
  }
);

export default mongoose.model("product", ProductSchema);