const mysql = require("mysql2")

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'movies'
})

connection.connect((err) => {
    if(err){
        console.error('Error conectando a la base de datos...',err)
        return
    }
    console.log('Conexion exitosa!')
})

module.exports = connection