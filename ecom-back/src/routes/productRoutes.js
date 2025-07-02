import express from 'express';
import {
    getAllProducts,
    getProductById,
    createMockProduct,
    createProduct,
} from '../controllers/productController.js'

const router = express.Router();
// get all products
router.get('/', getAllProducts);
// get product by Id
router.get('/:id', getProductById);

// create mock with id in the list
router.post('/mock/:id', createMockProduct); 
// create mock and continue
router.post('/mock', createProduct);

// modify mock with id 
router.patch('/mock/:id', createMockProduct); 


export default router