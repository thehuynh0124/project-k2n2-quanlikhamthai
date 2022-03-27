const router = require('express').Router()
const categoryCtrl = require('../controllers/categoryCtrl')
const auth = require('../middleware/auth')
const checkAdmin = require('../middleware/checkRole')


router.route('/category')
    .get(categoryCtrl.getCategories)
    .post(auth, checkAdmin, categoryCtrl.createCategory)

router.route('/category/:id')
    .delete(auth, checkAdmin, categoryCtrl.deleteCategory)
    .put(auth, checkAdmin, categoryCtrl.updateCategory)


module.exports = router