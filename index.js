import express from 'express';
import myroutes from "./src/routes/user.routes.js"
import { connectDb } from './src/dbconnection.js/db.js';

const app = express();

const PORT = 5001;

app.use(express.static('public'));

app.use('/', myroutes);

app.get('/',(req,res) => {
    res.send({name : "kaif",
        prfession: "app builder"
    })
})

connectDb();

app.listen(PORT, () => {
    console.log(`server is running on Port:${PORT}`)
})