const mongoose=require("mongoose");

const Game=mongoose.model(process.env.GAME_MODEL);

module.exports.getAll=function(req,res){
    console.log("Inside getAll function of review controller");
    const gameId=req.params.gameId;
    Game.findById(gameId).exec(function(err,data){
        // console.log(data.reviews);
        res.status(200).json(data.reviews);
    })
}

module.exports.getOne=function(req,res){
    const gameId=req.params.gameId;

    const reviewId=req.params.reviewId;
    Game.findById(gameId).exec(function(err,game){
        console.log(game.reviews.id(reviewId));
        res.status(200).json(game.reviews.id(reviewId));
    })
}