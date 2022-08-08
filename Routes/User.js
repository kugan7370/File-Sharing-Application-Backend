import express from 'express'
import multer from 'multer';
import { DeleteFile, FileShares, GetAllUser, GetFile, login, SignUp, UpdateProfile, UploadFile } from '../Controller/User.js'
import { multerfile } from '../middleware/Multer.js';
import { isRequestValidated, validateSignupRequest } from '../middleware/Validator.js';
import { verifyUser } from '../middleware/VarifyUser.js';
const router = express.Router()


//Auth-Routes
router.post('/signup', validateSignupRequest, isRequestValidated, SignUp)
router.post('/login', login)


//user-update
router.put('/updateProfile', verifyUser, multerfile.single("profile_image"), UpdateProfile)

// file-upload
router.post('/uploadFile', verifyUser, multerfile.single("url"), UploadFile)

// file-get
router.get('/getfile', verifyUser, GetFile)

//file-delete
router.delete('/deletefile/:id', verifyUser, DeleteFile)

// file-share
router.post('/fileshare', verifyUser, FileShares)

// get-All-user
router.get('/getalluser', verifyUser, GetAllUser)



export default router;