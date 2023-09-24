import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import registerController from "../controllers/registerController.js";

const router = express.Router();

router.post("/", registerController);

export default router;
