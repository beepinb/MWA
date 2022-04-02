const mongoose=require("mongoose");
const Game=mongoose.model(process.env.GAME_MODEL);
module.exports.getAll=function(req,res){
    
    let offset=0;
    let count=5;
    
    if(req.query&& req.query.offset){
        offset=parseInt(req.query.offset,10)
    }
    if(req.query&& req.query.count){
        count=parseInt(req.query.count,10)
    }
    console.log(offset,count);
    Game.find().exec(function(err,games){
        console.log("Games Found");
        res.status(200).json(games);
    });

}
module.exports.getOne=function(req,res){
    console.log("Inside getOne functioon of Games controller");
    const gameId=req.params.gameId;
    Game.findById(gameId).exec(function(err,game){
        if(err){
            console.log("Game not found");
            return;
        }
        res.status(200).json(game);
    });
}