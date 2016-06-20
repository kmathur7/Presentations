(function() {
    'use strict';
    angular
		.module('MyApp')
		.controller('ListCtrl',ListCtrl);

		ListCtrl.$inject = ['$scope','$http'];

		function ListCtrl($scope,$http){

			$http
				.get('./users.json')
				.success(function(data){
					$scope.users=data;
				})
				.error(function(err){
					console.log(err);
				});
		}
})();