$(document).ready(function(){
	$("#name").focus();
	$("#benviar").attr("disabled","disabled");
	$("input").keyup(function(){
		if ( ($("#nombre").val()=="") ||
			 ($("#apellidos").val()=="") ||
			 ($("#email").val()=="") ){
			$("#benviar").attr("disabled","disabled");
			$(saluda).text($(nombre).val()+" "+$(apellidos).val());
		} else {
			$("#benviar").removeAttr("disabled");
			console.log("entro en else");
		}
		
	})
})