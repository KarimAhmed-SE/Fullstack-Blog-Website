import mongoose, { Schema } from "mongoose";
import encrypt from "mongoose-encryption";
import 'dotenv/config'
import validator from "validator";
import { User } from "../models/userModel.js";

const postSchema = mongoose.Schema({
    title: {
        type:String,
        required: [true, "Please enter a title!"]
    },
    summary:{
        type:String,
        required: [true, "Please enter a summary!"]
    },
    body:{
        type:String,
        required: [true, "Please enter a body!"]
    },
    image: {
        type:String
    },
    tag:{
        type:String,
        required: [true, "Please select a tag!"]
    },
    author: {
        type:Schema.Types.ObjectId, 
        ref:'User'
    }
}, {
    timestamps: true,
});

export const Post = mongoose.model('Post', postSchema)