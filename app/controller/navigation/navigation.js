cms.controller('navigationtController', 
	['$scope', function($scope) {
	


	// console.log(currentApplication);

	// $scope.currentApplication = {
	// 	name:'GoPro',
	// 	logo:'http://d1vrkd1rl14bi3.cloudfront.net/assets/gopro-weekender/gopro_logo-115a033508a5b3d278f4e62a93dc186e.svg',
	// 	discription:'',
	// }

	// alert('navigationtController');
	// $scope.$emit('scripts:src', '<script src="assets/js/jquery/2.1.4/jquery-2.1.4.min.js"></script>');


	// $(document).on('mouseenter','.dropdown', function(){
	// 	// console.log($(this));
	// 	$(this).addClass('open');
	// });
	// $(document).on('mouseleave','.dropdown', function(){
	// 	// console.log($(this));
	// 	$(this).removeClass('open');
	// });


	// $scope.$emit("pageInfo:title","Home");

	  // $scope.$on('currentApplication', function (event, data) {
	  //   console.log(data); // 'Some data'
	  // });



	  $scope.clientLogo = currentApplication.logo;

	  	 
}]);

