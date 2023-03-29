import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please provide a name for the product"],
  },
  description: {
    type: String,
    required: [true, "Please provide description for the product"],
  },
  price: {
    type: Number,
    required: [true, "Please provide price for the product"],
  },
  images: [
    {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter product category"],
    enum: {
      values: [
        "Electronics",
        "Cameras",
        "Laptops",
        "Accessories",
        "Headphones",
        "Sports",
      ],
      message: "Please select correct category",
    },
  },
  seller: {
    type: String,
    required: [true, "Product must have a seller name"],
  },
  stocks: {
    type: Number,
    required: [true, "Please provide a stock for the product"],
  },
  rating: {
    type: Number,
    default: 0,
    min: 1,
    max: 5,
  },
  reviews: [
    {
      rating: {
        type: Number,
        required: true,
      },
      comment: {
        type: String,
        required: true,
      },
      created_at: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  created_at: {
    type: Date,
    default: Date.now,
  },
});
export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);
