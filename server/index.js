import express, { response } from "express";
import mongoose from "mongoose";
import cors from 'cors'
import 'dotenv/config'
import registerRoutes  from "./routes/registerRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
import cookieParser from "cookie-parser";
import jwt from "jsonwebtoken";
const app = express();


app.use(express.json());
app.use(cors({credentials:true, origin: "http://localhost:5173"}));
app.use(cookieParser());

const connection = process.env.CONNECTION;

mongoose.connect(connection).then(()=>{
    console.log("App is connected to database!");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
}).catch((error)=>{
    console.log(error);
})

app.get('/profile', (req, res)=>{
    const {token} = req.cookies.token;

    jwt.verify(token, process.env.SECRET, (err, info)=>{
        if(err) throw err;
        console.log(err);
        res.json(info);
    })
})

app.post('/logout', (req, res)=>{
    res.cookie('token', '')
})

app.use("/api/Register", registerRoutes)
app.use("/api/Login", loginRoutes)



