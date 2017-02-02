var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-Parser');
var router=express.Router();
router.use(bodyParser.urlencoded({extended:true}));

module.exports=router
