<?php 
	$redirect_file = "index.html";
	$to = "info@smartpie.in";
	$body = "Name: ".$_POST['name_gs']."\n";
	$body = $body."Email: ".$_POST['email_gs']."\n";
	$body = $body."Designation: ".$_POST['desg_gs']."\n";
	$body = $body."Organization: ".$_POST['org_gs']."\n";
	$body = $body."Website ".$_POST['web_gs']."\n\n";
	$body = $body."How I got to know about smartpie  ".$_POST['how_gs']."\n\n";
	$message = $_POST['message_cu'];
	$body = $body.$message;
    $subject = "Smartpie Get Started | ".$_POST['org_gs'] "|".$_POST['name_gs'];
    $headers = "From: ".$_POST['email_gs'];
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Thank you!! We will get back to you soon.')</script>";
	echo "<script>location.href='Contactus.html'</script>";
    } else {
    	echo "<script>alert('Failed due to some technical issue. Please try again!')";
    }
?>