angular.module('myApp',[])
.controller('myCtrl', function($scope){
  $scope.name = "";
  $scope.age = "";
  $scope.mobno = "";
  $scope.emailid = "";
  $scope.address = "";
  $scope.modep = "";
  
  $scope.prod1 = "";
  $scope.prod2 = "";
  $scope.prod3 = "";
  $scope.prod4 = "";
  $scope.prod5 = "";
  
  $scope.q1 = "";
  $scope.q2 = "";
  $scope.q3 = "";
  $scope.q4 = "";
  $scope.q5 = "";
 
  $scope.p1 = (1800 * ($scope.q1));
});