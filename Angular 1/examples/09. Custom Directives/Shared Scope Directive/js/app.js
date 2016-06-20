angular.module('MyApp',[])

	.controller('OuterController',function($scope){

		$scope.title = "Hello There!";
		
	})

	.directive('myComponent',function(){
		return{
			restrict:'E',
			replace:true,
			template:'<div>{{title}}</div>',
			link:function(scope,element,attributes){
				element.on('click',function(){
					scope.$apply(function(){
						scope.title = "value changed in directive";
						console.log('done');
					});
					

				})
			}
		};
	});





