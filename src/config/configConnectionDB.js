import mongoose from "mongoose";
import { configEnv } from "./configEnv.js";

// export class connectDB {

//     static #instance

//     static #getConnection() {
//         console.log(">>> Database connected");
//         return mongoose.connect(configEnv.mongo.url);
        
//     }

//     static getInstance() {
//         if (this.#instance) {
//             console.log(">>> Database connected");
//             return this.#instance;
//         }else{
//             this.#instance = this.#getConnection();
//             return this.#instance;
//         }
//     }
// }

export const connectDB = async () => {
    try {
        await mongoose.connect(configEnv.mongo.url);
        console.log(">>> Database connected");
    } catch (error) {
        console.log('Error on database <<<',error.message);
    }
};