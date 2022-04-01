const router = require("express").Router();
const gamesController = require("../controllers/games.controller")

router.route("/games")
    .get(gamesController.getAllGames)
    .post(gamesController.addGame)

router.route("/games/:gameId")
    .delete(gamesController.deleteOne)

module.exports = router;