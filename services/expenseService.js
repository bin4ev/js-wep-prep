
 const Expense = require('../models/expense') 

 const create = (expenseData) => {

    let expense = new Expense(expenseData)

    return expense.save()

}
const getAll = (userId) => {

    return Expense.find({user:userId})
    .lean()

    


}
const getOne = (expenseId ) =>

    Expense.findById(expenseId)

        .then(expense => {

            return expense
        })

const deleteExpense = (expenseId) => {
    return Expense.findByIdAndDelete(expenseId)
}

module.exports = {
    create,
    
    getAll,
    getOne,
    deleteExpense,


}