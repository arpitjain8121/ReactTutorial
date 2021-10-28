<?php
	require_once('class.phpmailer.php');

	$mail_return = "";
	session_start();
	
	/********************************************************
	* General Settings - you can change these settings */

	$sitename = "Nexxo";
	$from_email = "noreply@qpayi.com";
	$from_name = "Manager";
	$to_email = "mona.elkhatib@nexxo.com";
	
	$subject = $sitename . ": Contact form submission";    

	/********************************************************
	* DO NOT EDIT BELOW THIS LINE */
/*
	if ($_POST['fname'] != "undefined") 
		$fullname = $_POST['t_name'];
	else 
		$fullname = $_POST['t_name'];
	*/
	$mail = new PHPMailer();

	$t_name = $_POST['fullname'] ;
	$t_email = $_POST['email']; 
	$t_phone = $_POST['prefix'] . $_POST['number']; 
	$t_desc = $_POST['description']; 
	$t_subj = $_POST['subject']; 
	
    $enquiry_type=$_POST['enquirytype'];
        if($enquiry_type==1)$enquiry_type='CYPRUS';
	if($enquiry_type==2)$enquiry_type='EGYPT';
	if($enquiry_type==3)$enquiry_type='IRAQ';
	if($enquiry_type==4)$enquiry_type='VIETNAM';
	if($enquiry_type==5)$enquiry_type='UAE'; 
	if($enquiry_type==6)$enquiry_type='USA'; 
	if($enquiry_type==7)$enquiry_type='SINGAPORE'; 
	if($enquiry_type==8)$enquiry_type='INDIA'; 
	if($enquiry_type==9)$enquiry_type='QATAR'; 
	if($enquiry_type==10)$enquiry_type='PAKISTAN'; 

	function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
	$body = file_get_contents('contact_template.html');
	
	
	$body = str_replace("#name#", clean_string($t_name), $body);	
     
	$body = str_replace("#email#", clean_string($t_email), $body);
	$body = str_replace("#enquirytype#", clean_string($enquiry_type), $body);
	$body = str_replace("#subj#", clean_string($t_subject), $body);
	$body = str_replace("#enquiry#", clean_string($t_desc), $body);
	$altBody = $body;
	$body = nl2br($body);  

	 $mail->IsSMTP(true);
        $mail->SMTPAuth   = true;  
        $mail->Host= "email-smtp.eu-west-1.amazonaws.com";
        $mail->Port = 587;  
        $mail->Username = "AKIA4YODD45UABTO3RP5"; 
        $mail->Password = "BDwgzjmEVvgKpZK0MdoOEOjSZQFbmQynpQ9FbpaOMe1Q";
        $mail->SMTPSecure = 'tls';
        $mail->From = $from_email;
        $mail->FromName = $from_name;
        $address = $to_email;
        $mail->AddAddress($address, $to_name);

        $mail->AddCC($cc_email, $cc_name);
        $mail->AddCustomHeader('Reply-to:support@qpay.com.qa');
        $mail->Subject    = $subject;
        $mail->MsgHTML($body);

	
	if(!$mail->Send()) echo "Mailer Error: " . $mail->ErrorInfo;
	else echo "SUCCESS";
	
?>
