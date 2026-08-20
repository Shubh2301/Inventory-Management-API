const express=require('express');
const {getStockTransactionsController}=require('../controllers/stockTransaction.controller')

const router=express.Router();

//get transcation
router.get('/',getStockTransactionsController)



module.exports=router;