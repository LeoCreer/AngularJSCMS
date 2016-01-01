cms.config(['$routeProvider', '$locationProvider',
		 function($routeProvider, $locationProvider) {
			$routeProvider
			.when('/', {
				templateUrl:'/templates/'+window.currentApplication.defult_template+'/views/index.html',
				controller: 'HomeController'
			})
			.when('/login', {
				templateUrl:'/templates/'+window.currentApplication.defult_template+'/views/login/index.html',
				controller: 'LoginController'

				
			})
			.when('/store', {
				templateUrl:'/templates/'+window.currentApplication.defult_template+'/views/store/store.html',
				controller: 'StoreController',
				controllerAs: "store"
				
			})
			.when('/orders', {
				templateUrl:'/templates/'+window.currentApplication.defult_template+'/views/orders/order.list.html',
				controller: 'OrderListController',
				controllerAs: "orders"
				
			})	
			.when('/orders/:id', {
				templateUrl:'/templates/'+window.currentApplication.defult_template+'/views/orders/order.html',
				controller: 'OrderController',
				controllerAs: "order"
				
			})		
			.when('/:category', {
				templateUrl:'/templates/'+window.currentApplication.defult_template+'/views/store/category.html',
				controller: 'CategoryController',
				controllerAs: "category"
				
			})
			.when('/:category/:product', {
				templateUrl:'/templates/'+window.currentApplication.defult_template+'/views/store/product.html',
				controller: 'ProductController'
				
			})
			.otherwise({redirectTo: '/'});

			$locationProvider.html5Mode(true);
	}])

