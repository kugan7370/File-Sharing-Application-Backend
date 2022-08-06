import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    Password: {
        type: String,
        required: true,

    },
    profile_image: {
        type: String,
        default: 'https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png'
    }




},
    { timestamps: true }
)


export default mongoose.model("User", userSchema);