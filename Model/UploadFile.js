import mongoose from "mongoose";

const FileSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    url: {
        type: String,
        required: true,
    },
    user_id: {
        type: String,
        required: true,
    }




},
    { timestamps: true }
)


export default mongoose.model("File", FileSchema);