import mongoose from 'mongoose';

const clothingItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    required: true,
    trim: true
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },
  size: {
    type: String,
    required: true
  },
  color: {
    type: String,
    required: true
  },
  rentalPrice: {
    type: Number,
    required: true
  },
  availableQuantity: {
    type: Number,
    required: true,
    min: 0
  },
  image: {
    type: String,
    required: true
  }
}, { timestamps: true });

export default mongoose.model('ClothingItem', clothingItemSchema);