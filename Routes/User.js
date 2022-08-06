import express from 'express'
import { login, SignUp, UpdateProfile } from '../Controller/User.js'
import { isRequestValidated, validateSignupRequest } from '../middleware/Validator.js';
import { verifyUser } from '../middleware/VarifyUser.js';
const router = express.Router()


//Auth-Routes
router.post('/signup', validateSignupRequest, isRequestValidated, SignUp)
router.post('/login', login)


//user-update
router.put('/updateProfile', verifyUser, UpdateProfile)

export default router;