import express from 'express'
import { DeleteUser, GetAllUsers, GetUserByID, UpdateUser } from '../controllers/users.controller.js'

const router=express.Router()

router.get('/',GetAllUsers)
router.get('/:id',GetUserByID)
router.put('/:id',UpdateUser)
router.delete('/:id',DeleteUser)

export default router