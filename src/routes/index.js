import { Router } from 'express';
import { sessionRouter } from './sessions.routes.js';

const router = Router();

router.use('/api/sessions', sessionRouter);


export { router as routerApp };