const express=require("express");
const router=express.Router();
const addController=require("../controllers/add.controllers")

router.route("/add/:number")
    .post(addController.addNumber);

module.exports=router;