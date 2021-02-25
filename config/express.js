const express = require('express')
const handlebars = require('express-handlebars')
const cookiesParser = require('cookie-parser')
const auth = require('../middlewares/auth')

function setUpExpress(app) {
    app.engine('hbs', handlebars({
        extname: 'hbs'
    }))
    app.set('view engine', 'hbs')

    app.use(express.static('static'))
    app.use(express.urlencoded({
        extended: true
    }))
    app.use(cookiesParser())
app.use(auth())
}
module.exports= setUpExpress
