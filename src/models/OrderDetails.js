import mongoose from 'mongoose';

const orderDetailsSchema = new mongoose.Schema({
  clothingItem: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ClothingItem',
    required: true
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  rentalDuration: {
    type: Number,
    required: true,
    min: 1
  },
  price: {
    type: Number,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('OrderDetails', orderDetailsSchema);