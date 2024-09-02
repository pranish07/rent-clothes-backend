import express from 'express';
import * as clothingItemController from '../controllers/clothingItemController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.get('/', clothingItemController.getAllClothingItems);
router.get('/:id', clothingItemController.getClothingItemById);
router.post('/', auth, clothingItemController.createClothingItem);
router.put('/:id', auth, clothingItemController.updateClothingItem);
router.delete('/:id', auth, clothingItemController.deleteClothingItem);

export default router;