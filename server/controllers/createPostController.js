import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "dotenv/config";
import multer from "multer";
import fs from "fs";
import { Post } from "../models/postModel.js";

const handleError = (err) => {
  // console.log(err.message, err.code);
  let errors = {
    title: "",
    summary: "",
    body: "",
  };

  //validation errors

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;

      // console.log(properties.path)
      // console.log(properties.message);
    });
  }

  return errors;
};

const createPostController = async (req, res) => {
  const { path } = req.file;

  const  token  = req.cookies.token;

  console.log("hello world")

    console.log("hello world")
    jwt.verify(token, process.env.SECRET, async (err, info) => {
      if (err) throw err;
      console.log(err);
      try {
        const newPost = {
          title: req.body.title,
          summary: req.body.summary,
          body: req.body.body,
          tag: req.body.tag,
          image: path,
          author: info.id
        };

        console.log("hello world")

        const post = await Post.create(newPost);
        return res.status(201).send({ post: post._id });
      } catch (error) {
        const errors = handleError(error);
        res.status(400).json({ errors });
      }
    });
};

export default createPostController;
