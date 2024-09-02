import mongoose from 'mongoose';

const rentalOrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  orderDetails: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'OrderDetails'
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'shipped', 'delivered', 'returned', 'cancelled'],
    default: 'pending'
  },
  rentalStartDate: {
    type: Date,
    required: true
  },
  rentalEndDate: {
    type: Date,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('RentalOrder', rentalOrderSchema);