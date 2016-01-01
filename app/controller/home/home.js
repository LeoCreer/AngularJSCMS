cms.controller('HomeController', ['$scope', 'pageInfo', function($scope, pageInfo) {
  	
  	// pageInfo.setTitle('Home');


  	// Pushes up scope tree
  		$scope.$emit("pageInfo:title","Home");

  	// Broadcast push down the scope tree.
  		// $scope.$broadcast(name, args);
  	
}]);

