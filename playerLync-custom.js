console.log("MIKES TEST HOSTED JS SCRIPT V2");

$( document ).ready(function() {	

	$("input, textarea").each(function() {
	  $(this).keypress(function(event) {
		if (event.which == 34) {
		  event.preventDefault();
		  $(this).val($(this).val() + "”");
		  //console.log("you pressed double quote");
		}	
	  });
	});
	
});
