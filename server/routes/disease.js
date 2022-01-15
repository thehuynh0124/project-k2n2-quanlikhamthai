const express = require('express')
const router = express.Router()
const argon2 = require('argon2')
const jwt = require('jsonwebtoken')
const verifyToken = require('../middleware/auth')
const diseasecontroller = require('../controllers/disease.controller')


router.get('/getdiseases', verifyToken, diseasecontroller.getdiseases)
router.post('/create', verifyToken, diseasecontroller.Create)
router.put('/edit/:id', verifyToken, diseasecontroller.editdiseases)
router.delete('/delete/:id', verifyToken, diseasecontroller.deletediseases)
module.exports = router