import express from 'express'

const router=express.Router()

import { CreateOrder, GetAllOrders, GetOrderById, UpdateOrder, DeleteOrder } from '../controllers/orders.controller.js'

router.get('/',GetAllOrders)
router.get('/:id',GetOrderById)
router.post('/',CreateOrder)
router.put('/:id',UpdateOrder)
router.delete('/:id',DeleteOrder)
router.get('/myorders',GetMyOrders)

export default router