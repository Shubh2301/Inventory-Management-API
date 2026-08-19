const express=require('express')
const authMiddleware=require('../middleware/auth.middleware')
const {createProductController,getProductController,getSingleProductController,deleteProductController,updateProductController}=require('../controllers/products.controller')


const router=express.Router();


// create product
router.post("/",authMiddleware,createProductController)

//get products
router.get('/',authMiddleware,getProductController)


//get single product
router.get('/:id',authMiddleware,getSingleProductController)

//delete product
router.delete('/:id',authMiddleware,deleteProductController)

//update product
router.patch('/:id',authMiddleware,updateProductController)




module.exports=router;