angular.module('uiRouterApp',['ui.router'])

	.config(function($stateProvider,$urlRouterProvider){
		$urlRouterProvider.otherwise('/home');

		$stateProvider.state('home',{
			url:'/home',
			templateUrl: 'home.html'
		});

		$stateProvider.state('info',{
			url:'/info',
			templateUrl: 'info.html'
		});
		$stateProvider.state('signup',{
			url:'/signup',
			templateUrl: 'signup.html'
		});
		$stateProvider.state('signup.page1',{
			
			templateUrl: 'signupp1.html'
		});
		$stateProvider.state('signup.page2',{
			
			templateUrl: 'signupp2.html'
		});

	})