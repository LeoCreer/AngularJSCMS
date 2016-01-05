# AngularJSCMS
AngularJSCMS is the front end Boilerplate for your costume CMS.

AngularJSCMS does not have server side scripting language like PHP, Node, or ASP.Net however this is a front-end boiler plate ready for a server side scripting language. 

# Demo Site
[AngularJSCMS.io](http://angularjscms.io)

# AngularJSCMS Dependencies 

	

# Installation 

1 Install folder into root directory.

2 go to app/app.js open file and change url on line: "29" to your domain name
AngularJSCMS will now load.



#Resources / Dependencies.
## Special thanks to all the contributers to these frameworks.

###Angular.js 1.4.7
	https://code.angularjs.org/1.4.7/


###Pagination Directive
	https://github.com/michaelbromley/angularUtils/tree/master/src/directives/pagination

###HeadJS
	http://headjs.com/

###jQuery 2.1.4

	http://api.jquery.com/


## How Routs Work in AngularJSCMS	
	
routs.js is controlled by Ajax request on page load

Ajax Request Starts  sends in url 

	var url = document.location.host;

On success of Ajax request 

	var currentApplication = new getTheCurrentApplication.fromThe(url); 
 
Object getAccess.url is what initialize the application.

"Be sure that getAccess.url has value of your domain"


