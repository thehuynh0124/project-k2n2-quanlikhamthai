const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')
const employeecontroller = require('../controllers/employee.controller')
const checkAdmin = require('../middleware/role')




router.post('/create', verifyToken, checkAdmin,  employeecontroller.Create)
router.get('/getEmployees', verifyToken, checkAdmin, employeecontroller.getEmp )


module.exports = router