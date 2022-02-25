const mongoose = require("mongoose")


const UserSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    firstName:{
        type:String
    },
    gender:{
        type:String
    },
    mobileNum:{
        type:String
    },
    lastName:{
        type:String
    },
    role:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"role"
    },

})


const UserModel = mongoose.model("user",UserSchema)

module.exports = UserModel