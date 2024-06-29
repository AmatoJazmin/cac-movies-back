const db = require("../db/db");

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
/* const addMovie = (req, res) => {
  
  const { titulo, estreno, descripcion, director, id_categoria } = req.body;

  const sql =
    "INSERT INTO peliculas (titulo, estreno, descripcion, director, id_categoria) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [titulo, estreno, descripcion, director, id_categoria], (error, result) => {
    
    if (error) {
      
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    const pelicula = { ...req.body, id: result.insertId };

    req.body.id = result.insertId;

    res.json(pelicula);
  });
}; */

const addMovie = (req,res) => {
  const { titulo, estreno, descripcion, director, id_categoria } = req.body
  const sql = 'INSERT INTO peliculas (titulo, estreno, descripcion, director, id_categoria) VALUES ( ? , ? , ? , ? , ? )'
  db.query(sql,[titulo, estreno, descripcion, director, id_categoria], (err,result)=>{
      if (err) throw err
      res.json({message: 'Movie created', movieID: result.insertId})
  })
};

//PUT(reemplazo completamente un recurso existente)
const updateMovie = (req, res) => {
  
  let sql =
    "UPDATE peliculas SET titulo = ?, estreno = ?, descripcion = ?, director = ?, id_categoria = ? WHERE id = ?";

  const { id } = req.params;
  const { titulo, estreno, descripcion, director, id_categorias } = req.body;

  const values = [titulo, estreno, descripcion, director, id_categorias];

  values.push(id);

  db.query(sql, values, (error, result) => {
    // console.log(result);
    if (error) {
      console.log(error);
     
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows === 0) {
    
      return res.status(404).json({ message: "No existe el producto" });
    }

    if (result.affectedRows === 1) {
     
    }

    const producto = { ...req.body, ...req.params };

    res.json(producto);
  });
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