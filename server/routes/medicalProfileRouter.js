const router = require('express').Router()
const medicalProfile = require('../controllers/medicalProfileCtrl')
const auth = require('../middleware/auth')
const checkAdmin = require('../middleware/checkRole')


router.route('/Profile')
    .get(auth,medicalProfile.getProfile)
    .post(auth, medicalProfile.createProfile)
router.route('/Profile/:id')
    .put(auth, medicalProfile.createProfile)

module.exports = router