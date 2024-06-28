//require("dotenv").config();
const express = require("express");
const app = express();
const moviesRoutes = require("./routes/movies.router");

const PORT = process.env.PORT || 3000

app.get("/", (req,res) => res.send("Hola movies en Alwaysdata!"));

app.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`));

app.use(express.json());
app.use("/peliculas", require("./routes/movies.router"));