import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


const app = express();
dotenv.config();





//db connection
const connect = async () => {
    try {
        await mongoose.connect(process.env.Mongo_Connect);
        console.log('db Connected ')
    } catch (error) {
        throw error
    }
}



app.listen(8080, () => {
    connect();
    console.log("Connected to backend.")
})