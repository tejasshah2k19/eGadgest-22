const express = require("express")
const roleController = require("./controller/role-controller")
const mongoose = require("mongoose")

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


 //urls 

//roles 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
 
 


//database 
mongoose.connect('mongodb://localhost:27017/egadgets',function(err){
    if(err){
        console.log(err);
        console.log("db not connected");
    }else{
        console.log("db connected....");
    }
});


//server 
app.listen(3000,function(){
    console.log("server started on 3000");
})
