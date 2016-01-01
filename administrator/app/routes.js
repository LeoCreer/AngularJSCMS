cmsAdminApp.config(['$routeProvider', '$locationProvider',
		 function($routeProvider, $locationProvider) {
			$routeProvider
			.when('/administrator', {
				templateUrl:'/administrator/templates/'+window.getTheClient.defult_template+'/views/index.html',
				controller: 'DashboardController'
			})
			.otherwise({redirectTo: '/'});

			$locationProvider.html5Mode({
				enabled: true,
  				requireBase: false
			});
	}])

