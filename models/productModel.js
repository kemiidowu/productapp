const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "A product must have a name"],
    unique: true,
  },
  description: String,
  images: "",
  categories: String,
  price: { type: Number, required: [true, "A product must have a price"] },
  sale_price: Number,
});
const Product = mongoose.model("Product", productSchema);

module.exports = Product;
