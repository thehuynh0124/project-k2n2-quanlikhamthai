const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const hospitalcontroller = require('../controllers/hospital.controller')

router.post('/hospital/create', verifyToken, hospitalcontroller.Create)
router.get('/hospital/get', hospitalcontroller.gethospital)
router.put('/hospital/update/:id', verifyToken, hospitalcontroller.edithospital)
router.delete('/hospital/delete/:id', verifyToken, hospitalcontroller.deletehospital)
module.exports = router