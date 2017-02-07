module.exports=function($scope,$http,$rootScope,$location)
{
  var init=function()
{
  $http.get('/cityapi/showcity').then(function(response)
  {
  $scope.cityData=response;
});
// init();
};
 init();

// $scope.getcity=function()
// {
//   $http.get('http://www.omdbapi.com/?t='+$scope.cityname+'&y='+$scope.year+'&plot=short&r=json').then(function(response)
// {
//   $scope.cityDetails=response;
// });
// };

$scope.addcity=function()
{
  $http.post('/cityapi/addcity',$scope.cityDetails).then(function(response){
});
init();
};

// $scope.editcity=function()
// {
//   $http.post('/cityapi/editcity',$scope.cityDetails).then(function(response){
// });
// init();
// };

$scope.deletecity = function(city){
  var x=confirm("Are you sure you want to delete this city ?");
  if(x){
    $http.delete('/cityapi/deletecity/'+city._id).success(function (response) {
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
// $scope.bookcity=function(m,p,g)
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
