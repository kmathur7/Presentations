angular.module('MyApp',[])

	.controller('OuterController',function($scope){

		$scope.title = "Hello There!";
		$scope.titleobject = {message:"hey!"};
		
	})

	.directive('myComponent',function(){
		return{
			restrict:'E',
			replace:true,
			scope:{
				title: '@',
				titleobject: '='
			},
			template:'<div>{{title}} {{title_object_value}}</div>',
			link:function(scope,element,attributes){
				element.on('click',function(){
					scope.$apply(function(){
						
						scope.changeValue();	
					});
					

				});
			},
			controller:function($scope){
				$scope.title_object_value = $scope.titleobject.message;
				$scope.changeValue = function(){
					$scope.title = "value changed in directive";
				};
			}
		};
	});





