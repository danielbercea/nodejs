import mongoose from "mongoose";

async function connectToDb() {
  const dbUri =
    "mongodb+srv://apopa:1dFMHJ0Ali6uz2uE@cluster0.kpq4vhm.mongodb.net/products";

  try {
    await mongoose.connect(dbUri);
    console.log("Connected to the database succesfully.");
  } catch (err) {
    console.error("Eroare la conectare:", err);
    process.exit(1);
  }
}

export default connectToDb;
