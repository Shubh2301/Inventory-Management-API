const stockTranscationModel = require('../models/stockTranscation.model')

async function getStockTransactionsController(req, res) {
    try {
        const transcation = await stockTranscationModel.find()
        .populate("product")
        .populate("user")

        return res.status(200).json({
            message: "Stock transcation fetched successfully",
            transcation
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({   
            message: "Internal server error"
        })
    }

}


module.exports = { getStockTransactionsController }