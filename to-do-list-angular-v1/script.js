var myApp = angular.module("myApp", []);
 myApp.controller("myController", function($scope) {
 $scope.exampleArray = [];
 $scope.pushInArray = function() {
	 // get the input value
	 var inputVal = $scope.arrInput;
	 $scope.exampleArray.push(inputVal);
	 
 };
    
   $scope.delFromArray = function() {
	 // deletes the input value
	 var inputVal = $scope.arrInput;
	 $scope.exampleArray.pop(inputVal);
	 
 };
});