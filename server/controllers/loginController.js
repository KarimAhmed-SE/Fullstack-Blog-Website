import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config"

const maxAge = 3 * 24 * 60 * 60

const loginController = async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email: email });
      if (user) {
        const result = bcrypt.compareSync(req.body.password, user.password);
        if (result) {
          jwt.sign({email, id:user._id}, process.env.SECRET, {expiresIn: maxAge}, (error, token)=>{
            if(error) throw error;
            return res.status(201).cookie('token', token, {httpOnly: true, maxAge: maxAge * 1000}).json({
              id: user._id,
              email: user.email
            });
          });
          
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
}



export default loginController