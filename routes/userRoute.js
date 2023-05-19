const express=require('express')
const { loginController, registerController } = require('../controllers/userCtrl')
const router=express.Router()

//route
//Login 
router.post('/login',loginController)
//Register
router.post('/register',registerController)

module.exports=router