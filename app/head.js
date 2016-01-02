// console.log(currentApplication.defult_template);

Access = getTheApplicationUser.Permissions();
 // console.log(Access);

if (Access.SuperUser == 'true'){
	
	// document.cookie ='template=nike';
	// delete_cookie('template');

	function getCookie(name)
	  {
	    var re = new RegExp(name + "=([^;]+)");
	    var value = re.exec(document.cookie);
	    return (value != null) ? unescape(value[1]) : null;
	}
	getTheCurrentTemplatefromCookie = getCookie("template");
	
	// console.log(getTheCurrentTemplatefromCookie);

	if (getTheCurrentTemplatefromCookie != null){

		console.log('Administrator');
		currentApplication.defult_template = getTheCurrentTemplatefromCookie; 
		var templateHeadURL = "/templates/"+getTheCurrentTemplatefromCookie+"/head.json"
	}else{
		console.log(currentApplication.defult_template);
		var templateHeadURL = "/templates/"+currentApplication.defult_template+"/head.json";
	}
	

}else{
	console.log(currentApplication.defult_template);
	var templateHeadURL = "/templates/"+currentApplication.defult_template+"/head.json";	
}



console.log(templateHeadURL);

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

