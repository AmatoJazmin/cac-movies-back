const express = require("express");
const router = express.Router();
const moviesController = require("../controllers/movies.controller");

router.get("/", moviesController.getMovies);
// /peliculas/:id
router.get("/:id", moviesController.getMovieByID);

//router.post("/", moviesController.addMovie);
// /peliculas/:id
//router.put("/:id", moviesController.updateMovie);

router.delete("/:id", moviesController.deleteMovie);


module.exports = router;