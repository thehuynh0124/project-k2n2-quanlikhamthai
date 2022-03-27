const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const userCtrl = require('../controllers/userCtrl')
const checkAdmin = require('../middleware/checkRole')
const setadmin = require ('../controllers/setadmin.controller')




router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login)

router.get('/logout', userCtrl.logout)

router.get('/refresh_token', userCtrl.refreshToken)

router.get('/user',verifyToken,  userCtrl.getUser)

router.get('/users/getall',  userCtrl.getAlluser)

router.delete('/delete/:id', verifyToken, checkAdmin, userCtrl.deleteUser)

router.put('/users/setadmin/:id', verifyToken, setadmin)


//router.get('/getprofile', verifyToken, userCtrl.getProfile)

module.exports = router