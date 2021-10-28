jQuery(document).ready(function(){

	jQuery("#submitform").on('submit', function(){

		if(jQuery(".errorcheck").hasClass('et_contact_error')){
			return false;
			jQuery('#submitform').show();
			jQuery('.thankyou').hide();
		  }else{
		  		jQuery.ajax({
				type: "POST",
				url: "sendmail.php",
				data: jQuery("#submitform").serialize(),
				success: function() {
					jQuery('#submitform').slideUp(1500);
					jQuery('.thankyou').show();
					},
				error:function(){
					return false;
					}	
				});
		  	}
		})
	})

/*function validateform(){
		if(jQuery(".errorcheck").hasClass('et_contact_error')){
			return false;
			jQuery('#submitform').show();
			jQuery('.thankyou').hide();
		  }
		  else{
		  		jQuery.ajax({
				type: "POST",
				url: "sendmail.php",
				data: jQuery("#submitform").serialize(),
				success: function() {
					jQuery('#submitform').slideUp(1500);
					jQuery('.thankyou').show();
					},
				error:function{
					return false;
					}	
				})
		  	}
		}*/
	




