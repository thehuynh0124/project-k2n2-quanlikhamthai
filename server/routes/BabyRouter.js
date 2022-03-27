const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const babyCtrl = require('../controllers/BabyCtrl')

router.post('/baby/create', babyCtrl.createBaby)
        .get('/baby/get', babyCtrl.getBaby)



module.exports = router