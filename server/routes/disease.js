const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/auth')
const DiseasesCtrl = require('../controllers/diseasesCtrl')
const CheckAdmin = require('../middleware/checkRole')


router.route('/diseases')
    .get( DiseasesCtrl.getDiseases)
    .post(verifyToken, CheckAdmin, DiseasesCtrl.createDisease )
router.route('/diseases/:id')
    .put( verifyToken, CheckAdmin, DiseasesCtrl.updateDiseases)
    .delete( verifyToken, CheckAdmin, DiseasesCtrl.deleteDiseases)
module.exports = router