module.exports = function($scope, $http,$rootScope, $location)
{
  $scope.addMovie =function(){
  $location.path('/movie');
  };

  $scope.addTheater =function(){

  $location.path('/theater');
  };

  $scope.addcity =function(){

  $location.path('/city');
  };

}
