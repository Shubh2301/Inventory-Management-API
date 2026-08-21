const express=require('express')
const authMiddleware=require('../middleware/auth.middleware')
const {createProductController,getProductController,getSingleProductController,deleteProductController,updateProductController,updateStockController}=require('../controllers/products.controller')
const rateLimmiter=require('../middleware/rateLimmiting.middleware')

const router=express.Router();


// create product
router.post("/",authMiddleware,createProductController)

//get products
router.get('/',rateLimmiter,authMiddleware,getProductController)


//get single product
router.get('/:id',rateLimmiter,authMiddleware,getSingleProductController)

//delete product
router.delete('/:id',authMiddleware,deleteProductController)

//update product
router.patch('/:id',authMiddleware,updateProductController)

//update stock
router.patch('/:id/stock',authMiddleware,updateStockController)


module.exports=router;