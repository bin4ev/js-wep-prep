const router = require('express').Router()
const expenseService = require('../services/expenseService')
const User = require('../models/user')

router.get('/create', (req, res) => {
    res.render('create')
})

router.post('/create', (req, res, next) => {

    let { merchant, total, category, report, description } = req.body
    if (report == 'on') {
        report = true
    } else {
        report = false
    }

    const expenseData = {
        merchant,
        total,
        category,
        report: Boolean(report),
        description,
         user: req.user._id,
    }

    expenseService.create(expenseData)
        .then(expense => {
            User.findById(req.user._id,)
            .then(user=>{
                user.expenses.push(expense)
                user.save()
            })
            res.redirect('/')
        })
        .catch(next)
})

router.get('/:id/details', (req, res, next) => {

       expenseService.getOne(req.params.id,)
          .then(expense=> {
  
              res.render('details', expense)
          })
          .catch(next)
})


router.get('/:id/delete', (req, res, next) => {
    expenseService.deleteExpense(req.params.id)
        .then(() => {
            res.redirect('/')
        })
        .catch(next)
})




module.exports = router