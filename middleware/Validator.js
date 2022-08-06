import { check, validationResult } from 'express-validator'

export const validateSignupRequest = [
    check('username')
        .notEmpty()
        .withMessage('username is required'),
    check('email')
        .isEmail()
        .withMessage('Valid Email is required'),
    check('Password')
        .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,)
        .withMessage('Password must be Greater than 8 characters,Include at least one uppercase letter,Include at least one lower, Include at least one letter')
];

export const isRequestValidated = (req, res, next) => {
    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({ error: errors.array()[0].msg })
    }
    next();
}