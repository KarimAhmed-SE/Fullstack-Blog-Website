import express from "express";
import { User } from "../models/userModel.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.email ||
      !req.body.password ||
      !req.body.sex ||
      !req.body.country
    ) {
      console.log("Send All the Required fields!");
      return res.status(400).send({
        message: "Send All the Required fields!",
      });
    }

    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      sex: req.body.sex,
      country: req.body.country,
    };

    const userCheck = await User.findOne({ email: req.body.email });
    if (userCheck) {
      res.status(409).send({ message: "Email already exists" });
      console.log("Email already exists!")
    } else {
      const user = await User.create(newUser);
      return res.status(201).send(user);
    }
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: error.message });
  }
});

export default router;
