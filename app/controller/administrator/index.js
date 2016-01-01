cms.controller('AdminController', ['$scope', 'pageInfo', function($scope, pageInfo) {
	
	// pageInfo.setTitle('Administrator');
	// console.log(pageInfo);
	$scope.$emit("pageInfo:title","Administrator");

}]);

