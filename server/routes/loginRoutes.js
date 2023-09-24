import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"
import loginController from "../controllers/loginController.js";

const router = express.Router();

router.post("/", loginController );

export default router;
