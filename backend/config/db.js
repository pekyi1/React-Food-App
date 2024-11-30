import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose.connect(
      'mongodb+srv://fredpekyi:0108029048fred@cluster0.tgnhp.mongodb.net/food-del').then(() => console.log("DB Connected"));
}