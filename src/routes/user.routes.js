import { Router } from "express";

const router = Router();

router.route("/index.html").get((req,res) => {
    res.send({gill:"djskfhdsjkfh jfdhfsdgjd jkdhsfjsdj"})
})

export default router;