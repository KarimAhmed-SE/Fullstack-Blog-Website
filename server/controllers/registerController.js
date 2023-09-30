import express from "express";
import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import "dotenv/config";
import cookieParser from 'cookie-parser';
import jwt from "jsonwebtoken";

const salt = bcrypt.genSaltSync(10);


const handleError = (err) => {
    // console.log(err.message, err.code);
  let errors = {
    email: "",
    password:""
  };

  //duplicates error code

  if (err.code === 11000) {
    errors.email = "That email is already registered";
    return errors;
  }

  //validation errors

  if (err.message.includes("User validation failed")) {
    Object.values(err.errors).forEach(({properties}) => {
      errors[properties.path] = properties.message;

      // console.log(properties.path)
      // console.log(properties.message);
    });
  }

  return errors;
};

const Register = async (req, res) => {

  const {path} = req.file;
  try {
    const newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, salt),
      sex: req.body.sex,
      country: req.body.country,
      pic: path,
    };

    const user = await User.create(newUser);
    // const token = createToken(user._id);
    // return res.status(201).cookie('jwt', token, {httpOnly: true, maxAge: maxAge * 1000}).json('ok');
    return res.status(201).send({user: user._id});
  } catch (error) {
    const errors = handleError(error);
    res.status(400).json({ errors });
  }
};

export default Register;
