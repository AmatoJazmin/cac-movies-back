const express = require("express")

const server = express()

const PORT = 3000

server.get("/", (req,res) => res.send("Hola movies en Alwaysdata!"))

server.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))