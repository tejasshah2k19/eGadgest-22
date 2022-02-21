const userController = require("./controller/users-controller")

const express = require("express")



const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))


//urls - apis 
app.get("/",function(req,res){
    res.write("welcome")
    res.end()
})

app.post("/signup",userController.signup)



//server 
app.listen(3000,function(){
    console.log("server started on 3000");
})
