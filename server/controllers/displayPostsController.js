import { Post } from "../models/postModel.js"
import mongoose from "mongoose";

const displayPostsController = async (req, res) => {

    try{
        res.json(await Post.find().populate('author', ['firstName', 'lastName', 'email']));
    }catch(error){
        res.json(error);
    }

}

export default displayPostsController