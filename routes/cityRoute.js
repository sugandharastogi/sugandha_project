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

var cityschema = mongoose.Schema({
  name:String
  // city:String,
  // location:String
});

var city=mongoose.model('city',cityschema,'city');

router.get('/city',function(req,res)
{
  city.find({},function(err,docs)
{
  res.json(docs);
});
});

router.post('/addcity',function(req,res){
var city=new city({
    name:req.body.cityname
    // city:req.body.citycity,
    // location:req.body.cityloc
  });
  city.save(function(err, docs){
    if ( err ) throw err;
    console.log("city Saved Successfully");
  });
});

router.delete('/deletecity/:id',function(req, res){
  city.remove({_id:req.params.id},function(err, docs){
    console.log('city Removed Successfully');
  });
});




module.exports=router
