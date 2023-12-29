import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';

const router = Router();

router.post('/register', UsersController.registerUser);

router.post('/login', UsersController.loginUser);

export { router as sessionRouter };
