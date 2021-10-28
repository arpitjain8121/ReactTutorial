<?php
if(isset($_POST['t_email'])) {
    // EDIT THE 2 LINES BELOW AS REQUIRED
    //$email_to = "nebil.ben.aissa@qpay.com.qa;sanjay.singh@qpay.com.qa";
    $email_subject = "Contact Request";
    $email_from = "support@qpay.com.qa";    
    function died($error) {
        // your error code can go here
        echo "We are very sorry, but there were error(s) found with the form you submitted. ";
        echo "These errors appear below.<br /><br />";
        echo $error."<br /><br />";
        echo "Please go back and fix these errors.<br /><br />";
        //die();
    }
     
    // validation expected data exists
    if(!isset($_POST['t_name']) ||
        !isset($_POST['t_cname']) ||
        !isset($_POST['t_url']) ||
        !isset($_POST['t_email']) ||
        !isset($_POST['t_phone']) ||
		!isset($_POST['t_desc'])) {
        died('We are sorry, but there appears to be a problem with the form you submitted.');      
    }
     
    $t_name = $_POST['t_name']; // required
    $t_cname = $_POST['t_cname']; // required
    $t_url = $_POST['t_url']; // not required
    $t_email = $_POST['t_email']; // required
    $t_phone = $_POST['t_phone']; // not required
	$t_desc = $_POST['t_desc']; // not required
     
    $error_message = "";
    $email_exp = '/^[A-Za-z0-9._%-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/';
  if(!preg_match($email_exp,$t_email)) {
    $error_message .= 'The Email Address you entered does not appear to be valid.<br />';
  }
    $string_exp = "/^[A-Za-z .'-]+$/";
  if(!preg_match($string_exp,$t_name)) {
    $error_message .= 'The Name you entered does not appear to be valid.<br />';
  }
  if(!preg_match($string_exp,$t_cname)) {
    $error_message .= 'The Company Name you entered does not appear to be valid.<br />';
  }
  if(strlen($t_desc) < 2) {
    $error_message .= 'The Description you entered do not appear to be valid.<br />';
  }
  if(strlen($error_message) > 0) {
    died($error_message);
  }
    $email_message = "Form details below.\n\n";
     
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
     
    $email_message .= "Name: ".clean_string($t_name)."\n";
    $email_message .= "Company Name: ".clean_string($t_cname)."\n";
	$email_message .= "Company URL: ".clean_string($t_url)."\n";
    $email_message .= "Email: ".clean_string($t_email)."\n";
    $email_message .= "Phone: ".clean_string($t_phone)."\n";
    $email_message .= "Description: ".clean_string($t_desc)."\n";
    
	// create email headers
	$headers = 'From: '.$email_from."\r\n".
	'Reply-To: '.$email_from."\r\n" .
	'X-Mailer: PHP/' . phpversion();
	$email_to = "sanjay.singh@qpay.com.qa";
	if(strpos($link,"support.htm") !== false) {
		$email_to = "support@qpay.com.qa";
		@mail($email_to, $email_subject, $email_message, $headers); 
	} else {
		$email_to = "sanjay.singh@qpay.com.qa";
		@mail($email_to, $email_subject, $email_message, $headers); 
		$email_to = "nebil.ben.aisaa@qpay.com.qa";
		@mail($email_to, $email_subject, $email_message, $headers); 
	}
	echo "SUCCESS";
?>
 
<!-- include your own success html here -->
 
<?php
}
?>
