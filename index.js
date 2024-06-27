//require("dotenv").config();
const express = require("express");
const app = express();
const moviesRoutes = require("./routes/movies.router");

const server = express();

const PORT = process.env.PORT || 3000

server.get("/", (req,res) => res.send("Hola movies en Alwaysdata!"));

server.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`));

app.use(express.json());
app.use("/peliculas", require("./routes/movies.router"));