<?php 
	$redirect_file = "index.html";
	$to = "info@smartpie.in";
	$body = "Name: ".$_POST['name_cu']."\n";
	$body = $body."City: ".$_POST['city_cu']."\n";
	$body = $body."Country: ".$_POST['country_cu']."\n";
	$body = $body."Email: ".$_POST['email_cu']."\n";
	$body = $body."Phone No. ".$_POST['phone_no_cu']."\n\n";
	$message = $_POST['message_cu'];
	$body = $body.$message;
    $subject = "Smartpie Contact Us | ".$_POST['phone_no_cu'];
    $headers = "From: ".$_POST['email_cu'];
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you!! We will contact you soon.')</script>";
	echo "<script>location.href='Contactus.html'</script>";
    } else {
    	echo "<script>alert('Failed due to some technical issue. Please try again!')";
    }
?>