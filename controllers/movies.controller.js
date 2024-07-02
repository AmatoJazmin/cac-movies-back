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
  //Logica para la funcion addMovie.

  const addMovie = (req, res) => { //declaracion 
   

    const sql = "INSERT INTO peliculas (titulo, estreno, descripcion, director, id_categoria) VALUES (?, ?, ?, ?, ?)"; //sentencia SQL
    
    const {titulo, estreno, descripcion, director, id_categoria} = req.body; //donde los encuentra en Body. ((req.body.title  req.body.director req.body.year))
    const values = [titulo, estreno, descripcion, director, id_categoria]; //valores nombres
    
    db.query (sql, [titulo, estreno, descripcion, director, id_categoria], (error, result) => { //database query
      
      if (error) {
        
        return res.status(500).json({ error: "Intente mas tarde" }); //tira error
      
      }
  
      const pelicula = { ...req.body, id: result.insertId };
  
      res.json(pelicula); //resultado
    });
  };
  


  //PUT
  //Logica para la funcion updateMovie
const updateMovie = (req, res) =>{ 

  const { id } = req.params;  // llama al ID  
  const sql = "UPDATE peliculas SET titulo = ?, estreno = ?, descripcion = ?, director = ?, id_categoria = ? WHERE id = ?"; //accion
    const {titulo, estreno, descripcion, director, id_categoria} = req.body; // de donde obtiene el la edicion
 
    res.json({id:id, pelicula: req.body }); //resultado
};



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
    addMovie,
    updateMovie,
    deleteMovie,
  };