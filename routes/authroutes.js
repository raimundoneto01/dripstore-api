import express from 'express';
import { authService } from '../services/authService.js';

const authRoutes = express.Router();

authRoutes
    .post('/cadastrar', authService.cadastrar)
    // .post('/login', authService.login)
    // .post('/logar', authService.logar)
  
export default authRoutes;