function validateform(){
	var checkvalidate = true;
		if(checkvalidate ==  false){
			jQuery.ajax({
			type: "POST",
			url: "sendmail.php",
			data: jQuery("#submitform").serialize(),
			success: function() {
			jQuery('#submitform').slideUp(1500);
			jQuery('.thankyou').show();
		  }
		});
		return false;
	}
	else{
		 jQuery('.thankyou').hide();
			jQuery('#submitform').show();
		return checkvalidate;
	}
}



