import { Router } from "express";

const router = Router();

router.route("/randomData").get((req,res) => {
    res.send({kaif:"this is the data received from kaif"})
})

export default router;