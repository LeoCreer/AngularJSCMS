// console.log(getTheClient.defult_template);

Access = getTheApplicationUser.Permissions();
 // console.log(Access);

if (Access.SuperUser == 'true'){
	
	getTheCurrentTemplatefromCookie = document.cookie ='admin_template=insight';
	
	function getCookie(name)
	  {
	    var re = new RegExp(name + "=([^;]+)");
	    var value = re.exec(document.cookie);
	    return (value != null) ? unescape(value[1]) : null;
	}
	getTheCurrentTemplatefromCookie = getCookie("admin_template");
	
	console.log(getTheCurrentTemplatefromCookie);
	

	if (getTheCurrentTemplatefromCookie != null){
		// console.log('1');
		getTheClient.defult_template = getTheCurrentTemplatefromCookie; 
		var templateHeadURL = "../administrator/templates/"+getTheCurrentTemplatefromCookie+"/head.json"
	}else{
		// console.log('1');
		// Should Redirect Back to Main Menu!!!
	}
	

}else{
	var templateHeadURL = "../administrator/templates/"+getTheClient.defult_admin_template+"/head.json";	
}



// console.log(templateHeadURL);

$.ajax({
	method: "GET",
 	dataType: "json",
 	url: templateHeadURL,
 	timeout: 5000,
	success: function(data){
		var templateHead = data.head;
		// console.log(templateHead);
		// head.ready(templateHead);
		head.load(templateHead);


  		// console.log(templateHead);
  	},
  	error: function(){
  		alert('Template Has No Head Dependency ');
  	}
});

function HeadFinishLoeading (){
	// alert('Finish With Head');
	// angular.element(document).ready(function () {
	// 	angular.resumeBootstrap();
	// });

}