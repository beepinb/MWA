const mongoose=require("mongoose");

const Game=mongoose.model(process.env.GAME_MODEL);

module.exports.getAll=function(req,res){
    console.log("Inside publisher controller(getAll)");
    const gameId=req.params.gameId;

    Game.findById(gameId).exec(function(err,game){
        res.status(200).json(game.publisher);
    })
}