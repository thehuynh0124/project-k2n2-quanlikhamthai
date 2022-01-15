const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const userController = require('../controllers/user.controller')
const checkAdmin = require('../middleware/role')
const setadmin = require('../controllers/setadmin.controller')

router.get('/users/getall', verifyToken, checkAdmin, userController.getAlluser)
router.get('/users', verifyToken, userController.getuser)
router.post('/register', userController.register)
router.post('/login', userController.login)
router.delete('/users/delete/:id', verifyToken, userController.deleteUser)
router.put('/users/setadmin/:id', verifyToken, checkAdmin, setadmin)

module.exports = router