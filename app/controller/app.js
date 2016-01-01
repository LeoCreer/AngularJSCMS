cms.controller('AppController', 
	['$scope', '$timeout', '$location' ,'$routeParams' ,'pageInfo' ,'logInTheUser' , 
	function($scope ,$timeout ,$location ,$routeParams ,pageInfo ,logInTheUser ) {
  	
  	// console.log('H');

	var appUser = getTheApplicationUser.and();

	// $scope.$emit("pageInfo:title","Home");
	$scope.pageTitle = 'Home';
	// alert('H');
	//console.log(appUser.AccessControl.Administrator.SuperUser);

	


	// The JavaScript Way!	
		// pageInfo.watchTitle(function(pageTitle){
		// 	$scope.pageTitle = pageTitle;
		// });

		// var update = function (pageTitle){
		// 	$scope.pageTitle = pageTitle;
		// }
		// // Pass in function
		// pageInfo.watchTitle(update);

		

  	// The Angular.js Way!

  		// $scope.on listens to everything selected scope element
		$scope.$on("pageInfo:title", function(e,pageTitle){ 
			$scope.pageTitle = pageTitle;
		});


		// $scope.$broadcast Sends to everything 


		// console.log(currentApplication);

		// console.log(currentApplication.logo);


		// console.log($routeParams);

  $scope.myInterval = 5000;
  $scope.noWrapSlides = false;


	

var clientSlideShow =[
	{
		active: true,
		image: "http://demandware.edgesuite.net/aasj_prd/on/demandware.static/-/Sites-gopro-products/default/dw29350b50/lifestyle/CHDHY-401_life3.jpg",
		text: "More Cats"
	},
	{
		active: false,
		image: "//placekitten.com/601/300",
		text: "More Cats"
	},
	{
		active: false,
		image: "//placekitten.com/601/300",
		text: "More Cats"
	}


];

$scope.slides = clientSlideShow;

 // console.log(clientSlideShow);

}]);

