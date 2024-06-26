const db = require("../db/db");

const fs = require("fs");
const path = require("path");

const index = (req, res) => {
  const sql = "SELECT * FROM peliculas";
  db.query(sql, (error, rows) => {
    // console.log(rows);
    if (error) {
      console.log(error);
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    res.json(rows);
  });
};
//GET
const show = (req, res) => {
  const { id } = req.params;

  const sql = "SELECT * FROM peliculas WHERE id = ?";
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
const store = (req, res) => {
  // console.log(req.file);

  const { filename } = req.file;
  const { titulo, estreno, descripcion, id_categorias } = req.body;

  const sql =
    "INSERT INTO peliculas (titulo, estreno, descripcion, id_categorias) VALUES (?, ?, ?, ?)";
  db.query(sql, [titulo, estreno, descripcion, id_categorias], (error, result) => {
    // console.log(result);
    if (error) {
      // console.log(error);
      fs.unlinkSync(path.join(__dirname, "../public/uploads", filename));
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    const pelicula = { ...req.body, id: result.insertId };

    // req.body.id = result.insertId;

    res.json(pelicula);
  });
};

//PUT(reemplazo completamente un recurso existente)
const update = (req, res) => {
  // console.log(req.file);

  let sql =
    "UPDATE peliculas SET titulo = ?, estreno = ?, descripcion = ?, director = ?, id_categoria = ? WHERE id = ?";

  const { id } = req.params;
  const { titulo, estreno, descripcion, director, id_categorias } = req.body;

  const values = [titulo, estreno, descripcion, director, id_categorias];

  if (req.file) {
    const { filename } = req.file;
    sql =
      "UPDATE peliculas SET titulo = ?, estreno = ?, descripcion = ?, director = ?, id_categoria = ? WHERE id = ?";
    values.push(filename);
  }

  values.push(id);

  db.query(sql, values, (error, result) => {
    // console.log(result);
    if (error) {
      console.log(error);
      // Borra imagen subida
      return res.status(500).json({ error: "Intente mas tarde" });
    }

    if (result.affectedRows === 0) {
      // Borra imagen subida
      return res.status(404).json({ message: "No existe el producto" });
    }

    if (result.affectedRows === 1) {
      // fs.unlink a la imagen anterior
    }

    const producto = { ...req.body, ...req.params };

    res.json(producto);
  });
};

//DELETE
const destroy = (req, res) => {
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
  index,
  show,
  store,
  update,
  destroy,
};