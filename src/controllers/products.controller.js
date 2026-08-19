const productModel = require('../models/product.model')


async function createProductController(req, res) {
    try {
        const { name, category, price, quantity } = req.body

        const product = await productModel.create({
            name,
            category,
            price,
            quantity
        })
        return res.status(201).json({
            message: "Product created successfully"
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


async function getProductController(req, res) {
    try {
        const products = await productModel.find();
        return res.status(200).json({
            message: "Products fetched successfully",
            products
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


async function getSingleProductController(req, res) {
    try {
        const id = req.params.id;
        const product = await productModel.findById(id);

        if (!product) {
            return res.status(401).json({
                message: "Product not found"
            })
        }

        return res.status(200).json({
            message: "Product fetched successfully",
            product
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


async function deleteProductController(req, res) {
    try {
        const id = req.params.id;

        const product = await productModel.findByIdAndDelete(id);

        if (!product) {
            return res.status(404).json({
                message: "Product not found"
            })
        }
        return res.status(200).json({
            message: "Product deleted successfully",
            product
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


async function updateProductController(req, res) {
    try {
        const { name, category, price, quantity } = req.body
        const id = req.params.id;

        const updateProduct = await productModel.findByIdAndUpdate(
            id, {
            name,
            category,
            price,
            quantity
        },{
            new:true,
            runValidators:true
        }
        );

        if (!updateProduct) {
            return res.status(404).json({
                message: "Product not found"
            })
        }

        return res.status(200).json({
            message: "Product updated successfully",
            updateProduct
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}


module.exports = { createProductController, getProductController, getSingleProductController, deleteProductController, updateProductController }