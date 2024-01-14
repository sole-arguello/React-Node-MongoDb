import { Router } from 'express';
import { UsersController } from '../controllers/users.controller.js';

const router = Router();

//localhost:8080/api/sessions/register
router.post('/register', UsersController.registerUser);

//localhost:8080/api/sessions/login
router.post('/login', UsersController.loginUser);

export { router as sessionRouter };
