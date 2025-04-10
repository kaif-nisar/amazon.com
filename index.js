import express from 'express';
import myroutes from "./src/routes/user.routes.js"

const app = express();

const PORT = 5001;

app.use(express.static('public'));

app.use('/', myroutes);

app.get('/',(req,res) => {
    res.send({name : "kaif",
        prfession: "app builder"
    })
})

app.listen(PORT, () => {
    console.log(`server is running on Port:${PORT}`)
})