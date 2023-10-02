import express from 'express'
import showDetailsController from '../controllers/showDetailsController.js';

const router = express.Router();

router.get("/:id", showDetailsController);

export default router