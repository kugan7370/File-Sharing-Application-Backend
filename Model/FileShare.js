import mongoose from "mongoose";

const FileShare = new mongoose.Schema({
    file_id: {
        type: String,
        required: true,
    },
    sender_id: {
        type: String,
        required: true,
    },
    receiver_id: {
        type: String,
        required: true,
    },
    protect: {
        type: Boolean,
        default: false
    }




},
    { timestamps: true }
)


export default mongoose.model("FileShare", FileShare);