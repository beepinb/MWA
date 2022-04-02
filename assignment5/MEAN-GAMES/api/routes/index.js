const express = require("express");
const router = express.Router();
const gamesController = require("../controllers/games.controller");
const reviewController = require("../controllers/review.controller");
const publisherController = require("../controllers/publisher.controller");
router.route("/games")
.get(gamesController.getAll)

router.route("/games/:gameId")
.get(gamesController.getOne)

router.route("/games/:gameId/publishers")
    .get(publisherController.getAll)

router.route("/games/:gameId/reviews")
    .get(reviewController.getAll)
router.route("/games/:gameId/reviews/:reviewId")
.get(reviewController.getOne)
module.exports = router;