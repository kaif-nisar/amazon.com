import express from 'express';
import myroutes from "./src/routes/user.routes.js"
import { connectDb } from './src/dbconnection/db.js';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = 5001;

app.use(express.static('public'));
app.use(express.json());
app.use(cors({
    origin: "*",
    methods: ["GET","PUT","POST","DELETE"],
    allowedHeaders:["Content-Type","Authorization"]
}));
app.use(express.urlencoded({extended:true}));

app.use('/', myroutes);

connectDb();

app.listen(PORT, () => {
    console.log(`server is running on Port:${PORT}`)
})