const {Router} = require('express')
const router = Router()
const homeController = require('./controllers/homeController')
const userController = require('./controllers/userController')
const expenseController = require('./controllers/expenseController')
const isAuth = require('./middlewares/isAuth')

router.use('/',homeController)
router.use('/user',userController)
router.use('/expense',expenseController)

module.exports=router