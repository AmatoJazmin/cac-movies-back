const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const config = require('../config/config')
const db = require('../db/db')

exports.register = (req,res) => {
    const {email, nombre, apellido, contrasena, fecha_nacimiento, id_pais} = req.body
    const hashedPassword  = bcrypt.hashSync(contrasena,8)
    const sql = 'INSERT INTO usuarios (email, nombre, apellido, contrasena, fecha_nacimiento, id_pais) VALUES ( ? , ? , ? , ? , ? , ? )'
    const values = [email, nombre, apellido, hashedPassword, fecha_nacimiento, id_pais]
    db.query(sql, values, (err,result)=>{
        if (err) {
            console.log(err)
            return res.status(500).json({error: "Intente mas tarde"})
        }
        const token = jwt.sign({user: email},config.secretKey,{expiresIn:config.tokenExpiresIn})
        res.status(201).send({auth:true,token})
    })
}
    
exports.login = (req,res) => {
    const {email, contrasena} = req.body
    const sql = 'SELECT contrasena FROM usuarios where email = ? '
    db.query(sql, [email], (err,result)=>{
        if (err) {
            console.log(err)
            return res.status(500).json({error: "Intente mas tarde"})
        }
        if(result=='') return res.status(404).send(`El email ${email} no se encuentra registrado`)
        const passwordIsValid = bcrypt.compareSync(contrasena,result[0].contrasena)
        if (!passwordIsValid) return res.status(401).send({auth:false, token:null})
        const token = jwt.sign({user: email},config.secretKey,{expiresIn: config.tokenExpiresIn})
        res.status(200).send({auth:true,token})
    })
}

exports.perfil = (req,res) => {
    const user =  req.user
    const sql = 'SELECT u.email, u.nombre, u.apellido, u.fecha_nacimiento, p.nombre AS pais FROM usuarios AS u INNER JOIN paises AS p ON u.id_pais = p.id where u.email = ? '
    db.query(sql,[user],(err,result)=>{
        if (err) {
            console.log(err)
            return res.status(500).json({error: "Intente mas tarde"})
        }
        res.json(result)
    })
}
