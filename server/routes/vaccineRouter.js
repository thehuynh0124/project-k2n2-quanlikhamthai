const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const vaccinController = require('../controllers/vaccin.controller')


router.post('/vaccine/create', vaccinController.Create)
router.get('/vaccine/get', vaccinController.getvaccin)
router.delete('/vaccine/delete/:id', verifyToken, vaccinController.deleteVaccine)
module.exports = router