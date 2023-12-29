import dotenv from 'dotenv';

dotenv.config();

export const configEnv = {
    
    mongo: {
        url: process.env.MONGO_URL
    }
};