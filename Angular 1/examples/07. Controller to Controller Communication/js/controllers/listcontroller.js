(function() {
    'use strict';
    angular
		.module('MyApp')
		.controller('ListController',ListController);


		ListController.$inject = ['$scope', '$rootScope', '$http', 'userService'];

		function ListController($scope,$rootScope,$http,userService){
			activate();
			$scope.selectUser = selectUser;

			function selectUser(user){
				userService.setCurrentUser(user);
				$rootScope.$broadcast('userChanged');
			}

			function activate(){
				$http
					.get('./users.json')
					.success(function(data){
						$scope.users=data;
					})
					.error(function(err){
						console.log(err);
					});
			}

		}

})();