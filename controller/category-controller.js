const CategoryModel  = require("../model/category-model")


module.exports.addCategory = function(req,res){

    let cName = req.body.categoryName  

    let  c = new CategoryModel({
        categoryName:cName
    })

    c.save(function(err,success){
        if(err){
            res.json({status:-1,msg:"SMW",data:err})
        }else{
            res.json({status:200,msg:"category added",data:success})
        }
    })
}

module.exports.getAllCategories = function(req,res){

    CategoryModel.find(function(err,success){
        if(err){
            res.json({status:-1,msg:"SMW",data:err})
        }else{
            res.json({status:200,msg:"category ret..",data:success})
        }
    })
}

module.exports.deleteCategory = function(req,res){
    let cId = req.query.cateogryId
    console.log(cId);
    CategoryModel.deleteOne({_id:cId},function(err,success){
        if(err){
            res.json({status:-1,msg:"SMW",data:err})
        }else{
            res.json({status:200,msg:"category removed..",data:success})
        }
    })
}