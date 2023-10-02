import express from 'express'
import editPostController from '../controllers/editPostController.js'
import multer from "multer";


const router = express.Router()


const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, "public/images/")
    },
    filename: function (req, file, cb){
        return cb(null, `${req.body.title}_${file.originalname}`)
    }
})

const uploadMiddleware = multer({storage});

router.put("/:id", uploadMiddleware.single('file'),editPostController )

export default router