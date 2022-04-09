 const express  = require('express')
 const router =  express.Router()

 const AuthController = require('../js/AuthController')
 router.post('/registe',AuthController.register)
 module.exports = router