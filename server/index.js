import express, { response } from "express";
import mongoose from "mongoose";
import cors from 'cors'
import 'dotenv/config'
import registerRoutes  from "./routes/registerRoutes.js";
import loginRoutes from "./routes/loginRoutes.js";
const app = express();
app.use(express.json());

app.use(cors());

const connection = process.env.CONNECTION;

mongoose.connect(connection).then(()=>{
    console.log("App is connected to database!");
    app.listen(process.env.PORT, () => {
        console.log(`Server is running on port ${process.env.PORT}`);
      });
}).catch((error)=>{
    console.log(error);
})


app.use("/Register", registerRoutes)
app.use("/Login", loginRoutes)



