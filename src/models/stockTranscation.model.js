const mongoose=require('mongoose');

const stockTranscationSchema=new mongoose.Schema({
    product:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    type:{
        type:String,
        enum:["IN","OUT"],
        required:true
    },
    quanity:{
        type:Number,
        required:true,
        min:1
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }
})

const stockTranscationModel=mongoose.model("StockTransaction",stockTranscationSchema);


module.exports=stockTranscationModel;