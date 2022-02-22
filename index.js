const express = require("express")
const roleController = require("./controller/role-controller")


const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


 //urls 

//roles 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
 
 


//server 
app.listen(3000,function(){
    console.log("server started on 3000");
})
