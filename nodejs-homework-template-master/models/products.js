import mongoose from "mongoose";
const { Schema, model } = mongoose;

/* Numele Modelul -> Colectia cu litera mica si la plural, 

Product -> products,
User    -> users,
Task    -> tasks
*/
const schema = new Schema(
  {
    name: {
      type: String,
      minLength: 2,
      maxLength: 300,
      required: true,
      unique: true,
    },
    size: {
      type: Number,
    },
    type: {
      type: String,
      enum: ["shoe", "tshirt"],
    },
    // Pot eu sa specific in mod direct numele colectiei de care o sa fie legat modelul
  },
  { collection: "products" } // camp optional, daca numele colectiei difera
);
const Product = model("Product", schema);

export default Product;
