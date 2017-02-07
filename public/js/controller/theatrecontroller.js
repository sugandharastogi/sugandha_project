module.exports=function($scope,$http,$rootScope,$location)
{
  $scope.message="hello world!";
  var init=function()
{
  $http.get('/api/theatre').then(function(response)
  {
  $scope.theatreData=response;
});
// init();
};
init();

// $scope.gettheatre=function()
// {
//   $http.get('http://www.omdbapi.com/?t='+$scope.theatrename+'&y='+$scope.year+'&plot=short&r=json').then(function(response)
// {
//   $scope.theatreDetails=response;
// });
// };

 $scope.addtheatre=function()
 {
  $http.post('/theatreapi/addtheatre',$scope.theatreDetails).then(function(response){
 });
init();
 };

//  $scope.edittheatre=function()
// {
//    $http.post('/theatreapi/edittheatre',$scope.theatreDetails).then(function(response){
//  });
// init();
//  };

$scope.deletetheatre = function(theatre){
  var x=confirm("Are you sure you want to delete this theatre ?");
  if(x){
    $http.delete('/api/deletetheatre/'+theatre._id).then(function (response) {
  });
}
  init();
};
}
// $scope.readreview=function(title,poster)
// {
//   $rootScope.mtitle=title;
//   $rootScope.mpos=poster;
//   $location.path('/review');
// }
//
// $scope.booktheatre=function(m,p,g)
// {
//   $rootScope.var=m;
//   $rootScope.pos=p;
//   $rootScope.genre=g;
//   $location.path('/bookingproceed');
// }
//
// $scope.adminpage=function()
// {
//   $location.path('/admin');
// }
