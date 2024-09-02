import ClothingItem from '../models/ClothingItem.js';

export const getAllClothingItems = async (req, res, next) => {
  try {
    const clothingItems = await ClothingItem.find().populate('category');
    res.json(clothingItems);
  } catch (error) {
    next(error);
  }
};

export const getClothingItemById = async (req, res, next) => {
  try {
    const clothingItem = await ClothingItem.findById(req.params.id).populate('category');
    if (!clothingItem) {
      return res.status(404).json({ message: 'Clothing item not found' });
    }
    res.json(clothingItem);
  } catch (error) {
    next(error);
  }
};

export const createClothingItem = async (req, res, next) => {
  try {
    const clothingItem = new ClothingItem(req.body);
    await clothingItem.save();
    res.status(201).json(clothingItem);
  } catch (error) {
    next(error);
  }
};

export const updateClothingItem = async (req, res, next) => {
  try {
    const clothingItem = await ClothingItem.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!clothingItem) {
      return res.status(404).json({ message: 'Clothing item not found' });
    }
    res.json(clothingItem);
  } catch (error) {
    next(error);
  }
};

export const deleteClothingItem = async (req, res, next) => {
  try {
    const clothingItem = await ClothingItem.findByIdAndDelete(req.params.id);
    if (!clothingItem) {
      return res.status(404).json({ message: 'Clothing item not found' });
    }
    res.json({ message: 'Clothing item deleted successfully' });
  } catch (error) {
    next(error);
  }
};