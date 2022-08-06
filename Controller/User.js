import bcrypt from 'bcrypt'
import User from '../Model/User.js'
import { createError } from '../utils/error.js'
import jwt from 'jsonwebtoken'

export const SignUp = async (req, res, next) => {
    try {
        const existingUser = await User.findOne({ username: req.body.username })

        if (existingUser)
            return next(createError(404, "username already exits"))


        if (req.body.Password !== req.body.ConfirmPassword)
            return next(createError(404, "passwords should be same"))

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.Password, salt)
        const { ConfirmPassword, ...userdata } = req.body
        const newUser = new User({ ...userdata, Password: hash });
        await newUser.save();
        res.status(200).send("User has been created.");

    }

    catch (error) {
        next(error)
    }
}

export const login = async (req, res, next) => {

    const getUser = await User.findOne({ email: req.body.email })

    if (!getUser)
        return res.status(400).json({ message: 'invalid email' });

    const isPasswordCorrect = await bcrypt.compare(req.body.Password, getUser.Password)

    if (!isPasswordCorrect)
        return next(createError(404, "Invalid Password "))

    const token = jwt.sign({ _id: getUser._id }, process.env.JWT_SECRET, { expiresIn: '3d' });

    const { Password, ...otherDetails } = getUser._doc;
    res.cookie("access_token", token, {
        httpOnly: true,
    }).status(200).json({ token, user: otherDetails })

}