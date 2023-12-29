import {configEnv } from "../config/configEnv.js";
import { __dirname } from "../utils.js";
import path from "path";



let sessionDao;

const environment = configEnv.enviroment.persistence;

switch(environment){

    case 'production':

        
        const { connectDB } = await import('../config/configConnectionDB.js')
        connectDB.getInstance();

        console.log('Estoy en el entorno de produccion');

        const { UsersManager } = await import('../dao/usersManager.js');

        sessionDao = new UsersManager();
        
        break;
        

}

