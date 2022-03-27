const router = require('express').Router()
const roleCtrl = require('../controllers/roleCtrl')
const auth = require('../middleware/auth')
const checkAdmin = require('../middleware/checkRole')


router.route('/role')
    .get(auth, roleCtrl.getRole)
    .post(auth, checkAdmin, roleCtrl.createRole)

/*router.route('/role/:id')
    .delete(auth, checkAdmin, categoryCtrl.deleteCategory)
    .put(auth, checkAdmin, categoryCtrl.updateCategory)*/


module.exports = router