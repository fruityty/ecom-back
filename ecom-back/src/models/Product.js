import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String },
    brand: {
        id: { type: String },
        name: { type: String }
    },
    createdAt: { type: Date, default: Date.now },
    salePercentage: { type: Number, default: 0 },
    description: { type: String },
    colors: [{ type: String }]
});

// collection products
const Product = mongoose.model("Product", productSchema, "products");

export default Product;