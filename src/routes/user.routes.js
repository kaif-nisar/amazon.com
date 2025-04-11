import { Router } from "express";
import { submitData } from "../controllers/userdata.controller.js";

const router = Router();

router.route("/randomData").get((req,res) => {
    res.send({kaif:"this is the data received from kaif"})
})

router.route("/submitData").post(submitData);

export default router;