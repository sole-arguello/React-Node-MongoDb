import dotenv from 'dotenv';
import { Command } from 'commander';


dotenv.config();
const program = new Command();

program
    .option('--port <port>', 'Puerto en ejecucion', '3000')
    .option('--mode <mode>', 'Entorno de desarrollo o produccion', 'development')
    .parse();

const persistenceMode = program.opts().mode;
const port = program.opts().port;

export const configEnv = {
    server: {
        port: port
    },
    
    mongo: {
        url: process.env.MONGO_URL
    },
    enviroment: {
        persistence: persistenceMode
    }
};