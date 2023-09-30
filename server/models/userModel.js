import mongoose from "mongoose";
import encrypt from "mongoose-encryption";
import 'dotenv/config'
import validator from "validator";

const secret = process.env.SECRET;



const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required: [true, 'Please enter a first name'],
    },
    lastName:{
        type:String,
        required:[true, 'Please enter a last name'],
    },
    email:{
        type:String,
        required: [true, 'Please enter an email'],
        unique: [true, 'Email already exists! Please log in.'],
        lowercase: true,
        validate: [validator.isEmail, 'Please enter a valid email']
    },
    password:{
        type:String,
        required: [true, 'Please enter a password!'],
        minlength: [6, 'Minimum length of the password is 6 characters']

    },
    sex:{
        type:String,
        required:[true, 'Please choose a sex'],
    },
    country:{
        type:String,
        required:[true, 'Please choose a country'],
    },
    pic:{
        type:String
    }
})


userSchema.plugin(encrypt, {secret:secret, encryptedFields: ['password']});

export const User = mongoose.model('User', userSchema);
