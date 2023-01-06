const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String,
        required:[true,'Name is required']
    },
    email:{
        type:String,
        required:[true,'Emmail is Required']
    },
    password:{
        type:String,
        required:[true,'Password is Required']
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},{timeStamps:true}

)
module.exports = mongoose.model('User',userSchema)