import mongoose from "mongoose";
export const connectDB = () => {
  if (mongoose.connection.readyState >= 1) {
    return;
  } else {
    mongoose
      .connect(process.env.MONGODB_URL as string)
      .then((res) => {
        console.log("Database connected Successfully");
      })
      .catch((err) => {
        console.log("Database connection failed");
      });
  }
};
