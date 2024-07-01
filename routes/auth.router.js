const express = require('express')
const authController = require('../controllers/auth.controller')
const authMiddleware = require('../middlewares/auth.middleware')
const router = express.Router()

router.post('/register',authController.register)
router.post('/login',authController.login)
// router.get('/protected',authMiddleware,(req,res)=>{
//     res.status(200).send(`Bienvenido ${req.user}`)
// })
router.get('/perfil',authMiddleware,authController.perfil)

module.exports = router