module.exports.addNumber=function(req,res){
    console.log("Inside Add Controller");

    let number1=parseInt(req.params.number);
    let number2=parseInt(req.query.num2);

    const sum = number1 + number2;
    console.log("The Sum of two number is :",sum);
    res.status(200).json({'Sum':sum});

}