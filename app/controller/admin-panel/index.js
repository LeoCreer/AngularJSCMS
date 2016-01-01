cms.controller('AdminPanelController',
['$scope', '$timeout', '$location' ,'$routeParams','$sce' , 
function($scope ,$timeout ,$location ,$routeParams,$sce) {
		
	
	Access = getTheApplicationUser.Permissions();
	
	if (Access.SuperUser == 'true'){

		$scope.html = $sce.trustAsHtml('<div class="top-hidden-panel" style="height:52px;"><iframe src="app/views/panel.html" style="width: 100%; height: 55px; !important; position: absolute; z-index: 5; background-color: transparent; " marginheight="0" frameborder="0" scrolling="no" seamless="seamless" ></iframe></div>');
	}
	
	

}]);