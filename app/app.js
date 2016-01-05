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
		url:'local.angularjscms.io'
	},	
	{
		name:'Believable Creations',
		logo:'http://d1vrkd1rl14bi3.cloudfront.net/assets/gopro-weekender/gopro_logo-115a033508a5b3d278f4e62a93dc186e.svg',
		discription:'',
		defult_template:'bootstrap',
		defult_admin_template:'insight',	
		url:'local2.angularjscms.io'
	},	
	{
		name:'Oclify',
		logo:'http://d1vrkd1rl14bi3.cloudfront.net/assets/gopro-weekender/gopro_logo-115a033508a5b3d278f4e62a93dc186e.svg',
		discription:'',
		defult_template:'bootstrap',
		defult_admin_template:'insight',	
		url:'local3.angularjscms.io'
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
		email:'leo@oclify.com',
		adresss:'',
		zip:'',
		city:'',
		state:'Ca',
		url:'leocreer.com',
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

// Ajax Request Starts  sends in url {var url = document.location.host;}
	// on success of ajax request {var currentApplication = new getTheCurrentApplication.fromThe(url); return date on line 5 to 122 }
var url = document.location.host;
var currentApplication = new getTheCurrentApplication.fromThe(url);



// document.cookie='33';
// console.log(document.cookie);
var cms = angular.module('cms', ['ngRoute','ngSanitize','angularUtils.directives.dirPagination','ui.bootstrap']);

cms.config(function(paginationTemplateProvider) {
    paginationTemplateProvider.setPath('/app/directrives/dirPagination/dirPagination.tpl.html');
});