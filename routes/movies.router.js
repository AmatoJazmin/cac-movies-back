const moviesController = require("../controllers/movies.controller")
const express = require("express");
const router = express.Router();


router.get("/", moviesController.getMovies);

router.get("/:id", moviesController.getMovieByID);

router.post("/", moviesController.addMovie);

router.put("/:id", moviesController.updateMovie);

router.delete("/:id", moviesController.deleteMovie);


module.exports = router;
