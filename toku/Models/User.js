
import mongoose from "mongoose"
import { models } from "mongoose";


const userSchema = new mongoose.Schema(
    {
    
    username: {
        type: String,
        required: true

    },
    password: {
        type: String,
        required: true
    }
 


}); 
module.exports = mongoose.models?.User || mongoose.model('User', userSchema)