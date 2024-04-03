
const express = require('express')
const router = express.Router()
const {Signup,Login,BasicInformation,Symptoms,GetUserdata,Home} =require('../Controller/Auth')
const verifyToken = require('../Modules/verifyToken')



router.get('/',Home)
router.post('/signup',Signup)
router.post('/login',Login)
router.post('/BasicInformation',verifyToken,BasicInformation)
router.post('/Symptoms',verifyToken,Symptoms)
router.get('/GetUserdata',verifyToken,GetUserdata)



module.exports=router
