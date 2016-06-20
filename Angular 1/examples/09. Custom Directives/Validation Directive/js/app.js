angular.module('MyApp',['ngMessages'])

	.controller('OuterController',function($scope){

		$scope.title = "Hello There!";
		
	})

	.directive('compareTo', function() {
  return {
  	    require: 'ngModel',
        scope: {
            ngLength: '='
        },
        link: function(scope, element, attributes, ngModel) {
             
            ngModel.$validators.compareTo = function(modelValue) {
                return modelValue == scope.otherModelValue;
            };
 
            scope.$watch("otherModelValue", function() {
                ngModel.$validate();
            });
        }
  };
	});





