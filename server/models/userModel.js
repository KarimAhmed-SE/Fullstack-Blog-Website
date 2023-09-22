import mongoose from "mongoose";
import encrypt from "mongoose-encryption";
import 'dotenv/config'

const secret = process.env.SECRET;



const userSchema = mongoose.Schema({
    firstName:{
        type:String,
        required: true,
    },
    lastName:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,

    },
    sex:{
        type:String,
        required:true,
    },
    country:{
        type:String,
        required:true,
    }
})


userSchema.plugin(encrypt, {secret:secret, encryptedFields: ['password']});

export const User = mongoose.model('User', userSchema);
