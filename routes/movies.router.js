const express = require("express");
const router = express.Router();

const moviesController = require("../controllers/movies.controller")

router.get("/", moviesController.index);
// /peliculas/:id
router.get("/:id", moviesController.show);

router.post("/", upload.single("imagen"), moviesController.store);
// /peliculas/:id
router.put("/:id", upload.single("imagen"), moviesController.update);

router.delete("/:id", controller.destroy);


module.exports = router;