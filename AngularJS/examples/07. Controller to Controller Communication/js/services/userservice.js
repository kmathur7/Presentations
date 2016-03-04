(function() {
    'use strict';
    angular
		.module('MyApp')
		.factory('userService',userService);

		function userService(){
			var user;
			var serviceMethods = {
				setCurrentUser: setCurrentUser,
				getCurrentUser: getCurrentUser
			};

			return serviceMethods;

			function setCurrentUser(newUser){
				user = newUser;
			}

			function getCurrentUser(){
				return user;
			}
		}

})();