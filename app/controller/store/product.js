cms.controller('ProductController', 
	['$scope','$routeParams','getTheProduct', function($scope,$routeParams,getTheProduct) {
	

	//  get all product for catigory name (camera)
	
	$scope.$emit('pageInfo:title', $routeParams.product);
	 



	// $scope.categoryTitle = $routeParams.category;


	// Get Products of Category Sent in productList.of(category);

	var category = $routeParams.category;

	var title = $routeParams.product;

	category = decodeURIComponent(category);
	title = decodeURIComponent(title);

	// console.log(product);

	// getProduct(product);


	// $routeParms return URL from browser

	var title = $routeParams.product;

	title = decodeURIComponent(title);


	$scope.product = getTheProduct.withThe(title);


	// console.log($scope.product.title);




}]);

