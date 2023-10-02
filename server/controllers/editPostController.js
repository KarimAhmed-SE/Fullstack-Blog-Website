import { Post } from "../models/postModel.js"

const editPostController = async (req, res) => {


    const {id} = req.params

    try{
        // if (!req.body.title || !req.body.summary || !req.body.body) {
        //     return res.status(400).send({
        //       message: "Send all required fields: title, summary, body",
        //     });
        //   }

        console.log(req.body.title)


          const result = await Post.findByIdAndUpdate(id, req.body)
          if (!result) {
            return res.status(404).json({ message: "Post not found" });
          } else {
            return res.status(200).send({ message: "Post updated successfully!" });
          }
    }catch(error){
        console.log(error);
        res.status(500).send({ message: error.message });
    }
}

export default editPostController