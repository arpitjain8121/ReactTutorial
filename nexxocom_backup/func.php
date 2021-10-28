<?php
require_once('ses.php');

function email(){
    
        $subject = 'New Contact';
        $message = "<html><head><title>New contact</title></head><body dir='ltr'><table style='text-align: left;'>
                <tr><th>Name: </th><td>".$_POST["name"]."</td></tr>
                <tr><th>Email: </th><td>".$_POST["email"]."</td></tr>
                <tr><th>Mobile Number: </th><td>".$_POST["mobile"]."</td></tr>
                <tr><th>Contacts: </th><td>".$_POST['txt']."</td></tr>
                </table></body></html>";
    
	$headers = 'From: refer@qpay.com.qa' . "\r\n" .
                'Reply-To: refer@qpay.com.qa' . "\r\n" ."Content-type:text/html;charset=UTF-8" . "\r\n";

	$ses = new SimpleEmailService(getenv('ACCESS_KEY'), getenv('SECRET_KEY'));
	$m = new SimpleEmailServiceMessage();
	$m->addTo('refer@qpay.com.qa');
	$m->setFrom('Referral <refer@qpay.com.qa>');
	$m->addBCC('abhinav.kumar@nexxuspg.com');
	$m->setSubject($subject);
	$m->setMessageFromString($message,$message);
	$m->setMessageCharset('UTF-8','UTF-8');
	print_r($ses->sendEmail($m));

	$url='https://supportwps.qpayi.com/referral/information'; 
	$data= array('name'=>$_POST["name"],'email'=>$_POST["email"],'code'=>$_POST["mobile"],'text'=>$_POST["txt"]); // Add parameters in key value
	$ch = curl_init(); // Initialize cURL
	curl_setopt($ch, CURLOPT_URL,$url);
	curl_setopt($ch, CURLOPT_POST, true);
	$payload = json_encode($data);
	curl_setopt( $ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));
	curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	$server_output = curl_exec ($ch);
	curl_close($ch);

} 


$func = $_POST['func'];

switch ($func) {
    case 'email':
        email();
        break;
    
    default:
        //function not found, error or something
        break;
}
?>
