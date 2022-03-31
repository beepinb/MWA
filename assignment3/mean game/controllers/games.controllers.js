const gamesData=require("../data/games.json")

module.exports.getAll= function(req,res){
    res.status(200).json(gamesData)
}