(function() {
    'use strict';
	angular
		.module('uiRouterApp',['ui.router'])
		.config(router);

		router.$inject = ['$stateProvider', '$urlRouterProvider'];

		function router($stateProvider,$urlRouterProvider){
			$urlRouterProvider.otherwise('/home');

			$stateProvider.state('home',{
				url:'/home',
				templateUrl: './views/home.html'
			});

			$stateProvider.state('info',{
				url:'/info',
				templateUrl: './views/info.html'
			});
			$stateProvider.state('signup',{
				url:'/signup',
				templateUrl: './views/signup.html'
			});
			$stateProvider.state('signup.page1',{
				templateUrl: './views/signup1.html'
			});
			$stateProvider.state('signup.page2',{
				templateUrl: './views/signup2.html'
			});
		}
})();