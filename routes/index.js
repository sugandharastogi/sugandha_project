var express=require('express');
var route=express.Router();

router.get('/',function(req,res,next){
  res.render('index',{title:'book my show'});
});
module.exports=router;
