import express from 'express'
import { allOrders, placeOrder, placeOrderRazorpay, placeOrderStripe, updateStatus, userOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRoute = express.Router()

// Admin Features
orderRoute.post('/list', adminAuth, allOrders)
orderRoute.post('/status', adminAuth, updateStatus)

// Payment Features
orderRoute.post('/place', authUser, placeOrder)
orderRoute.post('/stripe', authUser, placeOrderStripe)
orderRoute.post('/razorpay', authUser, placeOrderRazorpay)

// User Feature
orderRoute.post('/userorders', authUser, userOrders)

export default orderRoute