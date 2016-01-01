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


var getTheClient = {

	fromThe: function(url){
		if(url == this.testClient.url){
			// AJAX Success
			getTheClient = this.testClient;
			return getTheClient ;

		}else{
			// AJAX Fail
		}
	},
	testClient : {
		name:'GoPro',
		logo:'http://d1vrkd1rl14bi3.cloudfront.net/assets/gopro-weekender/gopro_logo-115a033508a5b3d278f4e62a93dc186e.svg',
		discription:'',
		defult_template:'nike',
		defult_admin_template:'insight',	
		url:'AngularApplicationAndTemplateManagment.com'
	},	
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
		adresss:'11848 Trailwood St.',
		city:'Victorville',
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

getTheClient.fromThe(url);


var cmsAdminApp = angular.module('cmsAdminApp', ['ngRoute','ngSanitize']);

