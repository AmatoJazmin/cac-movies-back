const express = require("express")
const moviesRoutes = require("./routes/movies.router")
const authRoutes = require("./routes/auth.router")

const server = express()

server.use(express.json())
server.use('/auth',authRoutes)

const PORT = process.env.PORT || 3000

server.listen(PORT, () => console.log(`Servidor funcionando en http://localhost:${PORT}`))