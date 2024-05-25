import mongoose from "mongoose";
const { Schema, model } = mongoose;

/* Numele Modelul -> Colectia cu litera mica si la plural, 

Product -> products,
User    -> users,
Task    -> tasks
*/
const schema = new Schema({
  password: {
    type: String,
    required: [true, "Password is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  role: {
    type: String,
    enum: ["buyer", "seller"],
    default: "buyer",
  },
  token: {
    type: String,
    default: null,
  },
});

const User = model("User", schema);

export default User;
