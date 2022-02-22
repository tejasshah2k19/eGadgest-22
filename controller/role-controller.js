

// function addRole(req,res){

// }


// module.exports.addRole = addRole 

//  /roles   POST 
module.exports.addRole = function(req,res){
 
        let paramRoleName = req.body.roleName 
        console.log(paramRoleName);

       //validate 
       
       //db save 


       res.json({status:200,msg:"role save",data:paramRoleName})

    //    res.json({status:-1,msg:"duplicate role name",data:paramRoleName})
}


//list all roles 
module.exports.getAllRoles = function(req,res){

    //db all read 
    res.json({msg:"all roles ret...",status:200,data:{"roles":"roles"}})
    
}