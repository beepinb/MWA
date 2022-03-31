const express=require("express");
const router=express.Router();
const studentController=require("../controllers/student.controller")

router.route("students")
.get(studentController.getAll);

module.exports=router;