(function() {
    'use strict';
    angular
		.module('MyApp')
		.controller('DetailController',DetailController);


		DetailController.$inject = ['$scope', 'userService'];
		function DetailController($scope,userService){
			$scope.$on('userChanged',userChanged);

				function userChanged(){
					$scope.currentUser= userService.getCurrentUser();
				}
		}
		
})();