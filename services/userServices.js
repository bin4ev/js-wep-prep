const mongoose = require('mongoose');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const{SECRET}=require('../config/config')


const createUser = (username, password,amount) => {


    let user = new User({ username, password ,amount});

    return user.save();
}

const login = async (username, password) => {

    let user = await User.findOne({ username });

    if (!user) {
        throw { messages: 'There is no such a user !', status: 404 }
    };

    let ismuch = await bcrypt.compare(password, user.password);

    if (!ismuch) {
        throw { massages: 'Password is incorect!', status: 404 }
    };
    let token = jwt.sign({ _id: user._id, username: user.username },SECRET)

    return token;

}


const edit = (amount, userId) => {
   return User.findById({ _id: userId })
    .then(user=>{
       user.amount+=amount
       return user.save()
    })
   
}




module.exports = {
    createUser,
    login,
    edit,
}