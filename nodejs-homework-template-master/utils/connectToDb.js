import mongoose from "mongoose";

async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://apopa:1dFMHJ0Ali6uz2uE@cluster0.kpq4vhm.mongodb.net/productsdb"
    );
    console.log("Database connection successful");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

export default connectToDb;
