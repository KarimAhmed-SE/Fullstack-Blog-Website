import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import createPostController from "../controllers/createPostController.js";
import multer from "multer";

const router = express.Router();

const storage = multer.diskStorage({
    destination: function (req, file, cb){
        return cb(null, "public/images/")
    },
    filename: function (req, file, cb){
        return cb(null, `${req.body.title}_${file.originalname}`)
    }
})

const uploadMiddleware = multer({storage});

router.post("/", uploadMiddleware.single("file"), createPostController);



export default router;
