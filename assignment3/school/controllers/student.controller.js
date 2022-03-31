const studentData=require("../data/school.json")
module.exports.getAll=function(req,res){
    res.status(200).json(studentData);
}

module.exports.getOneStudent=function(req,res){
    console.log("Inside get One");
    const index=req.params.id;
    res.status(200).json(studentData[index]);
}