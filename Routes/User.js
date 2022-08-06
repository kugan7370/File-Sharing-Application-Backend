import express from 'express'
import multer from 'multer';
import { login, SignUp, UpdateProfile, UploadFile } from '../Controller/User.js'
import { multerfile } from '../middleware/Multer.js';
import { isRequestValidated, validateSignupRequest } from '../middleware/Validator.js';
import { verifyUser } from '../middleware/VarifyUser.js';
const router = express.Router()


//Auth-Routes
router.post('/signup', validateSignupRequest, isRequestValidated, SignUp)
router.post('/login', login)


//user-update
router.put('/updateProfile', verifyUser, UpdateProfile)

// file-upload
router.post('/uploadFile', verifyUser, multerfile.single("url"), UploadFile)

export default router;