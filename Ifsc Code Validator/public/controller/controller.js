var app = angular.module('angularTable', []);

app.controller('AppCtrl',function($scope, $http){
	
	console.log("Hello World From controller.js");
	
	//var code = '';

	var refresh = function(){
	$http.get('/getDetails').success(function(response){
		console.log("I got the data i requested");
		$scope.users = response;
		console.log($scope.users);
		//$scope.contact ="";
	});
	}
	
	refresh();
	

});