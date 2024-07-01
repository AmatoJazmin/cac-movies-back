const db = require("../db/db")
const getMovies = (req, res) => {
    const sql = "SELECT p.titulo, p.estreno, p.descripcion, p.director, c.nombre AS categoria FROM peliculas AS p INNER JOIN categorias AS c ON c.id = p.id_categoria";
    db.query(sql, (error, rows) => {
      console.log(rows);
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Intente mas tarde" });
      }
  
      res.json(rows);
    });
  };
  
  //GET
  const getMovieByID = (req, res) => {
    const { id } = req.params;
  
    const sql = "SELECT p.titulo, p.estreno, p.descripcion, p.director, c.nombre AS categoria FROM peliculas AS p INNER JOIN categorias AS c ON c.id = p.id_categoria WHERE p.id = ?";
    db.query(sql, [id], (error, rows) => {
      // console.log(rows);
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Intente mas tarde" });
      }
      
      if (rows.length === 0) {
        return res.status(404).json({ message: "Esta película no esta disponible" });
      }
  
      res.json(rows[0]);
    });
  };
  
  //POST
  //Logica para la funcion addMovie

  //PUT
  //Logica para la funcion updateMovie

  //DELETE
  const deleteMovie = (req, res) => {
    const { id } = req.params;
  
    const sql = "DELETE FROM peliculas WHERE id = ?";
    db.query(sql, [id], (error, result) => {
      // console.log(result);
      if (error) {
        console.log(error);
        return res.status(500).json({ error: "Intente mas tarde" });
      }
  
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: "Esa película no existe" });
      }
  
      res.json({ mensaje: "Película borrada" });
    });
  };
  
  module.exports = {
    getMovies,
    getMovieByID,
    //addMovie,
    //updateMovie,
    deleteMovie,
  };