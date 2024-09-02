import RentalOrder from '../models/RentalOrder.js';
import OrderDetails from '../models/OrderDetails.js';

export const getAllOrders = async (req, res, next) => {
  try {
    const orders = await RentalOrder.find().populate('user').populate('orderDetails');
    res.json(orders);
  } catch (error) {
    next(error);
  }
};

export const getOrderById = async (req, res, next) => {
  try {
    const order = await RentalOrder.findById(req.params.id).populate('user').populate('orderDetails');
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const createOrder = async (req, res, next) => {
  try {
    const { orderDetails, ...orderData } = req.body;
    const order = new RentalOrder(orderData);
    order.user = req.user._id;

    const savedOrderDetails = await OrderDetails.create(orderDetails);
    order.orderDetails = savedOrderDetails.map(detail => detail._id);

    await order.save();
    res.status(201).json(order);
  } catch (error) {
    next(error);
  }
};

export const updateOrder = async (req, res, next) => {
  try {
    const order = await RentalOrder.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
};

export const deleteOrder = async (req, res, next) => {
  try {
    const order = await RentalOrder.findByIdAndDelete(req.params.id);
    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    await OrderDetails.deleteMany({ _id: { $in: order.orderDetails } });
    res.json({ message: 'Order deleted successfully' });
  } catch (error) {
    next(error);
  }
};