import express from 'express';
import { DeleteProfile, Login, Logout, Profile, Register, updatePassword, UpdateProfile } from '../controller/User.controller.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const router = express.Router();



router.post('/register',Register)
router.post('/login',Login)

router.post('/logout', authMiddleware, Logout);
router.get('/profile', authMiddleware, Profile);
router.post('/update',authMiddleware,UpdateProfile)
router.post('/update-password',authMiddleware,updatePassword)

router.delete('/delete',authMiddleware,DeleteProfile)


export default router