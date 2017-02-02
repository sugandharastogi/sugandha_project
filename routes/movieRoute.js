 var express=require('express');
 var mongoose=require('mongoose');
 var bodyParser=require('body-Parser');
 var router=express.Router();
 router.use(bodyParser.urlencoded({extended:true}));
 mongoose.connect('mongodb://localhost:27017/movies');
 var db=mongoose.connection;
 db.on('error',console.error.bind(console,'connection error'));
 db.open('open',function(){
   console.log("connected to db");
 });

 var movieSchema = mongoose.Schema({
   Title: String,
   Language: String,
   Genre: String,
   Poster: String,
   Director: String,
   Actors: String
  });



 var Movie = mongoose.model('Movie', movieSchema, 'movie');

 router.get('/showMovie', function (req, res) {
     console.log("REACHED GET FUNCTION ON SERVER");
     Movie.find({}, function (err, docs) {
          res.json(docs);

     });
 });

 router.post('/insertMovie', function (req, res) {
    var movie=new movie({
        Title:req.body.Title,
        Genre:req.body.Genre,
        Actors:req.body.Actors,
        language:req.body.Language,
        director:req.body.director,
        Poster:req.body.Poster,
        status:'false'
     });
        moviv.save(function(err, docs){
    if ( err ) throw err;
    console.log("Movie Added Successfully : "+docs);
  });
});



router.delete('/deletemovie/:id',function(req, res){
  movie.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

router.put('/updateMovie/:moviename/:val',function(req,res){
movie.findOneAndUpdate({ Title: req.params.moviename },
  {
    $set:{Status: req.params.val }
},
function (err, data){
  res.json(data);
});
});




module.exports=router
