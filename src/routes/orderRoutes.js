import express from 'express';
import * as orderController from '../controllers/orderController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', auth, orderController.getAllOrders);
router.get('/:id', auth, orderController.getOrderById);
router.post('/', auth, orderController.createOrder);
router.put('/:id', auth, orderController.updateOrder);
router.delete('/:id', auth, orderController.deleteOrder);

export default router;