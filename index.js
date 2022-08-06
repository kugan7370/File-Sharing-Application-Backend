import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import UserRouter from './Routes/User.js'



const app = express();
dotenv.config();



//middlewares
app.use(express.json())
app.use(cookieParser())


//routes
app.use('/api/auth', UserRouter)



//db connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Connect);
        console.log('db Connected ')
    } catch (error) {
        throw error
    }
}


//errr handler 
app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack,
    })
})



app.listen(8080, () => {
    connect();
    console.log("Connected to backend.")
})