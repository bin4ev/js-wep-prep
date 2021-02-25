const router = require('express').Router()
const expenseService = require('../services/expenseService')
const isAuth = require('../middlewares/isAuth')


router.get('/', (req, res, next) => {

if(!isAuth){
    expenseService.getAll(req.user._id)
        .then(expense => {

            res.render('home', { expense })

        })
        .catch(next)

}else{
    res.render('home')
}





})



module.exports = router