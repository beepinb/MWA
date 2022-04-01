const dbConnection=require("../data/dbConnection");
const ObjectId=require("mongodb").ObjectId;

module.exports.getAllGames=function(req,res){
    console.log("Inside games controller");
    let offset=0;
    let count=3;
    if(req.query && req.query.offset){
        offset=parseInt(req.query.offset);
    }
    if(req.query && req.query.count){
        count=parseInt(req.query.count);
    }
    if(count>10){
        count=10;
    }
    const db=dbConnection.get();
    const gamesCollection=db.collection("games");
    gamesCollection.find().skip(offset).limit(count).toArray(function(err,games){
        res.status(200).json(games);
    });
   
}

module.exports.addGame=function(req,res){
    const db=dbConnection.get();
    const gamesCollection=db.collection("games");
    console.log("Inside addGame controller");
    let newGame={};
    console.log(req.body);
    if(req.body && req.body.title && req.body.price && req.body.minimum_player && req.body.minimum_age){
        newGame.title=req.body.title;
        newGame.price=parseFloat(req.body.price);
        newGame.minimum_player=parseInt(req.body.minimum_player);
        newGame.minimum_age=parseInt(req.body.minimum_age);
        if(newGame.minimum_player<1||newGame.minimum_player>11){
            console.log("minimum player must be in the range of 1-11");
            return;
        }
        if(newGame.minimum_age<6||newGame.minimum_age>99){
            console.log("minimum player's age must be in the range of 6-99");
            return;
        }
        gamesCollection.insertOne(newGame,function(err,savedGame){
            if(err){
                res.status(500).json({error:err});
            }else{
                console.log("Game Saved");
                console.log(savedGame);
                res.status(201).json(savedGame);
            }
        });
    }else{
        res.status(400).json({ message: "Game with title, price, age,minimum player must be provided" })
    }
}

module.exports.deleteOne=function(req,res){
    const db=dbConnection.get();
    const gamesCollection=db.collection("games");
    const Id=req.params.gameId;
    gamesCollection.deleteOne({_id: ObjectId(Id)},function(err,game){
        if(err){
            console.log(err);
            res.status(400);
            return;
        }else{

            res.status(200).json(game);
        }
    })
}