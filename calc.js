// var a = 10 //global 
// var b = 20 
// var c = a+b 
// let x = 10 //local 

// const MINBAL  = 2000 
// console.log("addition = ",c);


function add(){
    let a = 10 
    let b = 20 
    let c = a+b 
    console.log("addition  =  ",c);    
}
 
function mul(a,b){
    let c = a*b 
    console.log("multiplication  =  ",c);    
}

module.exports.addition = add 
module.exports.mul = mul 