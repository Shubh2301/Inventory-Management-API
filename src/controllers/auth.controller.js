const userModel = require('../models/user.model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function registerController(req, res) {
    try {
        const { name, email, password } = req.body

        const isUserAlreadyExists = await userModel.findOne({ email })

        if (isUserAlreadyExists) {
            return res.status(409).json({
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await userModel.create({
            name,
            email,
            password: hashedPassword
        })

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token)

        res.status(201).json({
            message: "User registered successfully"
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}

async function loginController(req, res) {
    try {
        const { email, password } = req.body;

        const user = await userModel.findOne({ email });

        if (!user) {
            return res.status(401).json({
                message: "Invalid username or password"
            })
        }

        const isValidPassword = await bcrypt.compare(password, user.password);

        if (!isValidPassword) {
            return res.status(401).json({
                message: "Invalid username or password"
            })
        }

        const token = jwt.sign({
            id: user._id
        }, process.env.JWT_SECRET)

        res.cookie("token", token)


        return res.status(200).json({
            message: "User loggedIn successfully"
        })

    }
    catch (err) {
        console.log(err);
        return res.status(500).json({
            message: "Internal server error"
        })
    }
}




module.exports = { registerController, loginController }