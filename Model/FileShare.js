import mongoose from "mongoose";

const FileShare = new mongoose.Schema({
    file_id: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    sender_name: {
        type: String,
        required: true,
    },
    receiver_name: {
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