var express=require('express');
var mongoose=require('mongoose');
var bodyParser=require('body-parser');
var router=express.Router();

router.use(bodyParser.urlencoded({extended:true}));

var db= mongoose.createConnection('mongodb://localhost:27017/moviebooking');

db.on('error',console.error.bind(console,'connection error'));
db.once('open',function()
{
  console.log("Connected to DB");
});

var theatreschema = mongoose.Schema({
  name:String,
  city:String,
 location:String
});

var theatre=mongoose.model('theatre',theatreschema,'theatre');

router.get('/gettheatre',function(req,res)
{
  theatre.find({},function(err,docs)
{
  res.json(docs);
});
});

router.post('/addtheatre',function(req,res){
var theatre=new theatre({
    name:req.body.theatrename,
    city:req.body.theatrecity,
   location:req.body.theatreloc
  });
  theatre.save(function(err, docs){
    if ( err ) throw err;
    console.log("Theatre Saved Successfully");
  });
});

router.delete('/deletetheatre/:id',function(req, res){
  theatre.remove({_id:req.params.id},function(err, docs){
    console.log('Theatre Removed Successfully');
  });
});




module.exports=router
