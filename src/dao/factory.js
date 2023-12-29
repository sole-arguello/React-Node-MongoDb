import {configEnv } from "../config/configEnv.js";
import { __dirname } from "../utils.js";
import path from "path";

import { UsersManager } from './usersManager.js'

export const usersDaoService = new UsersManager();

// const environment = configEnv.enviroment.persistence;

// switch(environment){

//     case 'production':

        
//         const { connectDB } = await import('../config/configConnectionDB.js')
//         connectDB.getInstance();

//         console.log('Estoy en el entorno de produccion');

//         const { usersManager } = await import('../dao/usersManager.js');

//         sessionDao = usersManager;
        
//         break;
        

// }

