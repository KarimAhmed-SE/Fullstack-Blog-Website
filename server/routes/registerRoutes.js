import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import registerController from "../controllers/registerController.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, "public/images/")
    },
    filename: function (req, file, cb){
        return cb(null, `${req.body.email}_${file.originalname}`)
    }
})

const uploadMiddleware = multer({storage});

router.post("/", uploadMiddleware.single('file'), registerController);

export default router;
