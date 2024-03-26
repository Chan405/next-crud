import mongoose from "mongoose";

export const connectMongoDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Mongo db connected");
  } catch (e) {
    console.log(e);
  }
};
