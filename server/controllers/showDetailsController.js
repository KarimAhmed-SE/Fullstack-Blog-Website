import { Post } from "../models/postModel.js";
import { User } from "../models/userModel.js";


const showDetailsController = async (req, res) =>{


    const {id} = req.params
  
    try{
    
        res.json(await Post.findById(id).populate('author', ['firstName', 'lastName', 'email']));
    }catch(error){
        // console.log(error)
        return res.status(400).json(error);
    }
}

export default showDetailsController;