import { Post } from "../models/postModel.js";

const deletePostController = async (req, res) =>{

try{
    const {id} = req.params
    const result = await Post.findByIdAndDelete(id);
    if(!result)
      {
          return res.status(404).json({ message: "Post not found" });
      }else{
          return res.status(200).send({ message: "Post deleted successfully!" });
      }
}catch(error){
    console.log(error);
    res.status(500).send({ message: error.message });
}

}


export default deletePostController;