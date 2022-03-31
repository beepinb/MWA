const studentData=require("../data/school.json")
module.exports.getAll=function(req,res){
    req.status(200).json(studentData);
}
