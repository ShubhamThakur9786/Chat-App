// import mongoose from "mongoose";

// export const connectDB = async () => {
//   try {
//     const conn = await mongoose.connect(process.env.MONGODB_URI);
//     console.log(`MongoDB connected: ${conn.connection.host}`);
//   } catch (error) {
//     console.log("MongoDB connection error:", error);
//   }
// };

import mongoose from "mongoose";

export const connectDB = async () => {
  try {
<<<<<<< HEAD
    const conn = await mongoose.connect(process.env.MONGODB_URI);
=======
    const conn = await mongoose.connect(process.env.MONGODB_URL);
>>>>>>> 6d4bf3bfa311bceb5879979edd9f98842b1913e7
    console.log("MongoDB connected successfully:", conn.connection.host);
  } catch (error) {
    console.log("MongoDB connection error:", error);
  }
};
