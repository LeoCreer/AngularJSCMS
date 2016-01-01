cms.controller('LoginController', ['$scope','$location', function($scope,$location) {

	$scope.$emit('pageInfo:title', 'Login / Register');

	
	$scope.clientName = currentApplication.name;



	$('.header').hide();

}]);

