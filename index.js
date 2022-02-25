const express = require("express")
const roleController = require("./controller/role-controller")
const categoryController = require("./controller/category-controller")
const userController = require("./controller/user-controller")

const mongoose = require("mongoose")

const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


 //urls 

//roles 
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
 

//category 
app.post("/categories",categoryController.addCategory)
app.get("/categories",categoryController.getAllCategories)
app.delete("/categories",categoryController.deleteCategory)



//users 
app.post("/users",userController.addUser)


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
