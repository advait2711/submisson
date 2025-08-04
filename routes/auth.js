// routes/auth.js
import express from 'express';
import {
  getRegister,
  postRegister,
  getLogin,
  postLogin,
  getLogout
} from '../controllers/authController.js';

const router = express.Router();

router.get('/register', getRegister);
router.post('/register', postRegister);
router.get('/login', getLogin);
router.post('/login', postLogin);
router.get('/logout', getLogout);

export default router;
