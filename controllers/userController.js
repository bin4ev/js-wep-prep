const router = require('express').Router()
const userServices = require('../services/userServices')
const { COOCKIE_NAME } = require('../config/config')
const isAuth = require('../middlewares/isAuth')


router.get('/register', (req, res) => {
    res.render('register')
})


router.post('/register', (req, res, next) => {
    const { username, password, repeatPassword, amount } = req.body

    if (password !== repeatPassword) {

        res.render('register', { error: { messages: 'Both passwords should be the same...' } })
    }

    userServices.createUser(username, password, amount)
        .then(user => {
            res.redirect(302, '/')
        })
        .catch(next)
})

router.get('/login', (req, res) => {
    res.render('login')
})

router.post('/login', (req, res, next) => {
    const { username, password } = req.body

    userServices.login(username, password)
        .then(token => {
            res.cookie(COOCKIE_NAME, token, { httpOnly: true })
            res.redirect(302, '/')
        })
        .catch(next)
})

router.get('/logout', (req, res) => {
    res.clearCookie(COOCKIE_NAME);
    res.redirect(302, 'login')


})
router.post('/:id/edit', (req, res, next) => {
    const { amount } = req.body
    
    userServices.edit(+amount, req.params.id)
        .then(() => {
            res.redirect('/')
        })
        .catch(next)


})



module.exports = router