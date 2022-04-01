const dbConnection=require("../data/dbconnection");


module.exports.getAllGames=function(req,res){
    console.log("Inside getAll function of games Controller");
    let offset=0;
    let count=3;
    if(req.query&&req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query&&req.query.count){
        count=parseInt(req.query.count);
    }
    if(count>10){
        count=10;
    }

    const db=dbConnection.get();
    const gamesCollection=db.collection("games");
    gamesCollection.find().skip(offset).limit(count).toArray(function(err,games){
        res.status(200).json(games);
    })
}