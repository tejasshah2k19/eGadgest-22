const UserModel = require("../model/user-model")


module.exports.addUser = function(req,res){

    let fn = req.body.firstName           
    let ln = req.body.lastName 
    let em = req.body.email     
    let pwd = req.body.password 
    let role = req.body.role
    let gn = req.body.gender
    let mn = req.body.mobileNum 

    let u = new UserModel({
        firstName : fn ,
        lastname : ln,
        email : em ,
        password : pwd,
        gender : gn ,
        mobileNum : mn ,
        role : role 
    })

    u.save(function(err,success){

        if(err){
            res.json({status:-1,msg:"SMW",data:err})
        }else{
            res.json({status:200,msg:"user added",data:success})
        }
    })

}

//list 

//delete 

