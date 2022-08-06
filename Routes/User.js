import express from 'express'
import { SignUp } from '../Controller/User.js'
import { isRequestValidated, validateSignupRequest } from '../middleware/Validator.js';
const router = express.Router()


//Auth-Routes
router.post('/signup', validateSignupRequest, isRequestValidated, SignUp)





export default router;