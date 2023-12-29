import mongoose from "mongoose";
import { configEnv } from "./configEnv.js";

export const connectDB = async () => {
    try {
        await mongoose.connect(configEnv.mongo.url);
        console.log(">>> Database connected");
    } catch (error) {
        console.log('Error on database <<<',error.message);
    }
};