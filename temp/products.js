import mongoose from "mongoose";
const { Schema, model } = mongoose; // Destructurare pentru a obține Schema și model

const productSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: { type: Number, required: true, min: 0 },
  category: {
    type: String,
    enum: ["electronics", "clothing", "home", "other"],
  },
  inStock: { type: Boolean, default: true },
});

// Metodă pentru a calcula prețul cu TVA
productSchema.methods.getPriceWithVAT = function () {
  return this.price * 1.19; // Presupunem TVA de 19%
};

// Modelul "Product"
const Product = model("Product", productSchema);

export default Product; // Exportăm modelul pentru a-l putea folosi în alte fișiere
