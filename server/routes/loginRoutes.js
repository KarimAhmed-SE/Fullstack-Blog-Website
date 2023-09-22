import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { email, password } = req.body;
  console.log(email);
  console.log(password);
  try {
    const user = await User.findOne({ email: email });
    if (user) {
      const result = req.body.password === user.password;
      if (result) {
        return res.status(201).send(user);
      } else {
        res.status(400).json({ error: "Password doesn't match" });
      }
    } else {
      res.status(400).json({ error: "Email doesn't exist!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
