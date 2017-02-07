 var express=require('express');
 var mongoose=require('mongoose');
 var bodyParser=require('body-Parser');
 var router=express.Router();
 router.use(bodyParser.urlencoded({extended:true}));
 
 var db= mongoose.createConnection('mongodb://localhost:27017/moviebooking');
 db.on('error',console.error.bind(console,'connection error'));
 db.once('open',function(){
   console.log("connected to db");
 });

 var movieSchema = mongoose.Schema({
   Title: String,
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

 router.post('/addMovie', function (req, res) {
    var movie=new movie({
        Title:req.body.Title,
        Genre:req.body.Genre,
        Actors:req.body.Actors,
        director:req.body.director,
        Poster:req.body.Poster,
        status:'false'
     });
        movie.save(function(err, docs){
    if ( err ) throw err;
    console.log("Movie Added Successfully : "+docs);
  });
});



router.delete('/deletemovie/:id',function(req, res){
  movie.remove({_id:req.params.id},function(err, docs){
    console.log('Movie Removed Successfully');
  });
});

// router.put('/updateMovie/:moviename/:val',function(req,res){
// movie.findOneAndUpdate({ Title: req.params.moviename },
//   {
//     $set:{Status: req.params.val }
// },
// function (err, data){
//   res.json(data);





module.exports=router
