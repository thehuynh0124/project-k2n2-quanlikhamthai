const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const dangkykhamCtrl = require('../controllers/dangkykham.controller')
const checkAdmin = require('../middleware/checkRole')


router.post('/dangkykham', verifyToken, dangkykhamCtrl.Create)
router.get('/getdangkykham', verifyToken, dangkykhamCtrl.getdangkykham)
router.put('/confirmSchedule/:id', verifyToken, checkAdmin, dangkykhamCtrl.confirmSchedule)
module.exports = router
