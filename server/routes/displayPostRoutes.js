import express from "express";
import displayPostsController from "../controllers/displayPostsController.js";

const router = express.Router();

router.get("/", displayPostsController);

export default router;
