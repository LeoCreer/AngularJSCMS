cms.controller('CategoryController', 
	['$scope','$routeParams','$timeout','productList', function($scope,$routeParams,$timeout,productList) {
	$scope.pageSize = 1;

	//  get all product for catigory name (camera)
	
	$scope.$emit('pageInfo:title',  currentApplication.name + ' ' + $routeParams.category +"'s");
	 

	// console.log(currentApplication);

	$scope.categoryTitle = $routeParams.category;


	// Get Products of Category Sent in productList.of(category);


	$scope.productList = productList.of($routeParams.category);


  // 	$timeout(function () {
  // 		var $container = $('.product-list');
		// 	// init
		// 	$container.packery({
		// 	  itemSelector: '.product',
		// 	  gutter: 10
		// 	});

		//  $(window).trigger('resize');
		// // $container.find('.product').each( function( i, itemElem ) {
		// //   // make element draggable with Draggabilly
		// //   var draggie = new Draggabilly( itemElem );
		// //   // bind Draggabilly events to Packery
		// //   $container.packery( 'bindDraggabillyEvents', draggie );
		// // });	
		                                   
  //    });


}]);

