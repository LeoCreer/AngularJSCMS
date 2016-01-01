cmsAppSwitch.controller('AdministratorMenuController', ['$scope', '$timeout', function($scope, $timeout) {
  	var Access = window.parent.getTheApplicationUser.Permissions();
  	var templates =  window.parent.getApplication.info();
	
	if (Access.SuperUser == 'true'){


		$scope.templateRedirect = function(template_name){
			getTheCurrentCookie = window.parent.document.cookie = "template="+template_name+"";
			window.parent.location.reload();
		};

		$scope.templates = templates;

		$timeout(function(){
			$('html,body',window.parent.document).css({'height':'calc(100% - 26px)'});
			$('iframe',window.parent.document).css({'height':'54',});
			$('.container-fluid').mouseenter(function(){
				$('iframe',window.parent.document).css({'height':'100%'});
			});

			$('.container-fluid').mouseleave(function(){
				$('iframe',window.parent.document).css({'height':'54'});
			});
		});

	}else{
		$timeout(function(){
			$('html,body',window.parent.document).css({'height':'calc(100% - 0px)'});
		});
	};
}]);

