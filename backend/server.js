import express from "express"
import dotenv from "dotenv"
import connectToMongo from "./db/connectToMongo.js";
import authRoutes from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";



dotenv.config();


const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);




app.listen(5000,()=>{
    connectToMongo();
    console.log("Listening on port 5000");
})

