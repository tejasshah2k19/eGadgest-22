const express = require("express")


const app = express() //server 

app.use(express.json())//json read -android iphone  
app.use(express.urlencoded({extended:true}))//url-encoded read --web postman 


//
//

//api 




app.get("/",function(req,res){
    res.write("Welcome")
    res.end()
})

app.get("/login",function(req,res){
    res.write("login")
    res.end()
})

app.post("/addition",function(req,res){
   let  c = parseInt(req.body.a) + parseInt(req.body.b) //10+20 
   res.write("addition = "+c)
   res.end()
})

app.post("/subtraction",function(req,res){
    let  d = parseInt(req.body.a) - parseInt(req.body.b) - parseInt(req.body.c) //10+20 
    res.write("addition = "+d)
    res.end()
 })
 


app.listen(3000,function(){
    console.log("server started....on....3000");
});//9000+   
 //node 3000  
 //java 
 //oracle 1521 / 8080 
 //mysql 3306
 //pg 5432 
 //