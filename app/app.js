window.name = "NG_DEFER_BOOTSTRAP!";

var getApplication = {

	info: function(){
		return this.templates;
	},
	templates : [
		{
			name:'Nike',
			url:'nike'
		},
		{
			name:'Bootstrap',
			url:'bootstrap'
		}
	]

}


var getAccess = [
	{
		name:'GoPro',
		logo:'http://d1vrkd1rl14bi3.cloudfront.net/assets/gopro-weekender/gopro_logo-115a033508a5b3d278f4e62a93dc186e.svg',
		discription:'',
		defult_template:'nike',
		defult_admin_template:'insight',	
		url:'angularapplicationandtemplatemanagment.com'
	},	
	{
		name:'Believable Creations',
		logo:'http://d1vrkd1rl14bi3.cloudfront.net/assets/gopro-weekender/gopro_logo-115a033508a5b3d278f4e62a93dc186e.svg',
		discription:'',
		defult_template:'bootstrap',
		defult_admin_template:'insight',	
		url:'believablecreations.com'
	}	
]



var getTheCurrentApplication = {

	fromThe: function(url){
		
		for (var i = 0; i < getAccess.length; i++) {
			
			if (getAccess[i].url == url){
				var appAccess = getAccess[i];
				// console.log(appAccess);
				return appAccess;	
			}
		};	

	}
}


var getTheApplicationUser = {
	user:null,
	and: function(option,UserObj){
		if(option == 'login'){
			this.LogIn(UserObj);
		}else if(option == 'logout'){
			this.LogOut(UserObj);
		}else{
			this.user = this.testUser;
			return this.user;
		}
	},
	LogIn: function(){

	},
	LogOut: function(){

	},
	Permissions:function(){
		// this.user = this.testUser;
		// console.log(this.user);
		if (typeof this.user, 'object'){
			 this.user = this.testUser;
			return this.user.AccessControl;
		}else{
			return null;
		}
		
	},
	testUser:{
		fname:'Leo',
		lname:'Creer',
		email:'leo@1.com',
		adresss:'1600 Amphitheatre Parkway',
		zip:'94043',
		city:'Mountain View',
		state:'Ca',
		AccessControl:{
			SuperUser:'true',
			Administrator:{
				
			},
			Manager:{

			},
			Client:{

			}
		}

	}
}


var url = document.location.host;

var currentApplication = new getTheCurrentApplication.fromThe(url);



// document.cookie='33';
// console.log(document.cookie);
var cms = angular.module('cms', ['ngRoute','ngSanitize','angularUtils.directives.dirPagination','ui.bootstrap']);

cms.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('/app/directrives/dirPagination/dirPagination.tpl.html');
});