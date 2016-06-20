(function() {
    'use strict';
	angular
		.module('MyApp')
		.controller('DetailController',DetailController);

		DetailController.$inject = ['$scope','userService'];
		
		function DetailController($scope,userService){
			userService.setCurrentUser('kunal');
		}

})();