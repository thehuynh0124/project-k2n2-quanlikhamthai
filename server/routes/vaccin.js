const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const vaccinController = require('../controllers/vaccin.controller')


router.post('/create', verifyToken, vaccinController.Create)
router.get('/getVaccin', verifyToken, vaccinController.getvaccin)
module.exports = router