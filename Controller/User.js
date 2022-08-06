import bcrypt from 'bcrypt'
import User from '../Model/User.js'
import { createError } from '../utils/error.js'


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
