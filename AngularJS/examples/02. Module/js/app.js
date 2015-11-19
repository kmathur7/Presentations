angular.module('MyApp',[])

	.constant('VERSION','1')

	.run(['VERSION',function(VERSION){

		alert(VERSION);
	}]);