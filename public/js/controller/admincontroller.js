module.exports = function($scope, $http,$rootScope, $location)
{
  $scope.addMovie =function(){
  $location.path('/movie');
  };

  $scope.addTheatre =function(){

  $location.path('/theatre');
  };

  $scope.addcity =function(){

  $location.path('/city');
  };

}
