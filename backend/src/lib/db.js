
import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;

    if (!mongoURI) {
      throw new Error("MONGODB_URI is missing from environment variables");
    }

    const conn = await mongoose.connect(mongoURI);

    console.log(
      "MongoDB connected successfully:",
      conn.connection.host
    );
  } catch (error) {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  }
};
