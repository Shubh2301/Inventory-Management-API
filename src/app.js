require('dotenv').config();
const express=require('express');
const cookieParser = require('cookie-parser');
const authRoutes=require('./routes/auth.routes');
const productRoutes=require('./routes/product.routes')
const stockTransactionRoutes=require('./routes/stockTransaction.routes')





const app=express();


app.use(express.json());
app.use(cookieParser());

//routes
app.use('/api/auth',authRoutes);
app.use('/api/products',productRoutes);
app.use('/api/stock',stockTransactionRoutes)


module.exports=app;