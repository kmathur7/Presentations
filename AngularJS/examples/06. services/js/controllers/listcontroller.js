(function() {
    'use strict';
    angular
		.module('MyApp')
		.controller('InfoController',InfoController);

		InfoController.$inject = ['$scope','userService'];
		function InfoController($scope,userService){
			$scope.user=userService.getCurrentUser();
		}

})();