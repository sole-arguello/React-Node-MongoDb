//todas las configuraciones de express
import express from 'express';
import morgan from 'morgan';
import { routerApp } from './routes/index.js';

export const app = express();
app.use(express.json());
app.use(routerApp);

app.use(morgan('dev'));


