import express from 'express'
import deletePostController from '../controllers/deletePostController.js'


const router = express.Router()

router.delete("/:id", deletePostController )

export default router