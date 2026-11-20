import express from 'express'


const router=express.Router();
import {Register,Login,Logout} from '../controllers/auth.controller.js'

router.post('/signup',Register)
router.post('/login',Login)
router.post('/logout',Logout)

export default router