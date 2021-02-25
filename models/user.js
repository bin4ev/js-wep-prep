const mongoose = require('mongoose');
/* const bcrypt = require('bcrypt');
const {ROUND_SALT} =require('../config/config') */

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,
    username: {
        type: String,
        unique: true,
         required: true,
       
    },
    password: {
        type: String,
        required: true,
    },
     amount:{
        type: Number,
        required: true,
        default:0
    },
    expenses:[
        

    ]

  
})

module.exports= mongoose.model('User',userSchema)