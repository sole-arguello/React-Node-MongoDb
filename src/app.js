//todas las configuraciones de express
import express from 'express';
import morgan from 'morgan';
import { routerApp } from './routes/index.js';
import { errorController } from './controllers/errors/error.controller.js';

export const app = express();
app.use(express.json());
app.use(routerApp);

//todo error que venga pasa por aqui
app.use(errorController);

app.use(morgan('dev'));


