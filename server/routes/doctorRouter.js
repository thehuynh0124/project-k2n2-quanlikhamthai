const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const doctorCtrl = require('../controllers/doctorCtrl')

router.post('/doctor/create', doctorCtrl.createDoctor)
        .get('/doctor/get', doctorCtrl.getDoctor)



module.exports = router