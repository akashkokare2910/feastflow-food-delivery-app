import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      "mongodb+srv://akashkokare2017:DTcfO90lJkTv9QNA@cluster0.xggmhky.mongodb.net/food-del"
    )
    .then(() => console.log("Database Connected"));
};
