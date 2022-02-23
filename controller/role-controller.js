const RoleModel = require("../model/role-model")

// function addRole(req,res){

// }


// module.exports.addRole = addRole 

//  /roles   POST 
module.exports.addRole = function (req, res) {

    let paramRoleName = req.body.roleName
    console.log(paramRoleName);

    //validate 

    //db save 
    let roleModel = new RoleModel({
        roleName: paramRoleName
    })

    roleModel.save(function (err, success) {
        if (err) {
            res.json({ status: -1, msg: "Something Went Wrong", data: err })
        } else {
            res.json({ status: 200, msg: "role save", data: success })
        }
    })


}


//list all roles 
module.exports.getAllRoles = function (req, res) {

   RoleModel.find(function(err,data){
    if (err) {
        res.json({ status: -1, msg: "Something Went Wrong", data: err })
    } else {
        res.json({ status: 200, msg: "role ret...", data: data })
    }
   })


}