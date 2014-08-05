function navselector(navval){
  
}



function validateContactForm(){
  var flag=1;
  var x=document.forms["contact"]["name_cu"].value;
  if (x==null || x==""){
    document.getElementById("name_cu").className = document.getElementById("name_cu").className + " has-error";
    flag=0;
    document.getElementById("p_name_cu").style.display="block";
    document.getElementById("p_name_cu").innerHTML="Please provide your name";
  }
  else if (x.length<2){
    document.getElementById("name_cu").className = document.getElementById("name_cu").className + " has-error";
    flag=0;
    document.getElementById("p_name_cu").style.display="block";
    document.getElementById("p_name_cu").innerHTML="Seems like your name is not appropirate";
  }
  else{
    document.getElementById("name_cu").className = document.getElementById("name_cu").className.replace(" has-error", "");
    document.getElementById("p_name_cu").style.display="none";
  }

  var x=document.forms["contact"]["email_cu"].value;
  if (x==null || x==""){
    document.getElementById("email_cu").className = document.getElementById("email_cu").className + " has-error";
    flag=0;
    document.getElementById("p_email_cu").style.display="block";
    document.getElementById("p_email_cu").innerHTML="Please enter your email id";
  }
  else if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(x) == false){
    document.getElementById("email_cu").className = document.getElementById("email_cu").className + " has-error";
    flag=0;
    document.getElementById("p_email_cu").style.display="block";
    document.getElementById("p_email_cu").innerHTML="Please enter valid email id";
  }
  else{
    document.getElementById("email_cu").className = document.getElementById("email_cu").className.replace(" has-error", "");
    document.getElementById("p_email_cu").style.display="none";
  }

  var x=document.forms["contact"]["phone_no_cu"].value;
  if (x==null || x==""){
    document.getElementById("phone_no_cu").className = document.getElementById("phone_no_cu").className + " has-error";
    flag=0;
    document.getElementById("p_phone_no_cu").style.display="block";
    document.getElementById("p_phone_no_cu").innerHTML="Please enter your phone number";
  }
  else if(/^\d+$/.test(x) == false){
    document.getElementById("phone_no_cu").className = document.getElementById("phone_no_cu").className + " has-error";
    flag=0;
    document.getElementById("p_phone_no_cu").style.display="block";
    document.getElementById("p_phone_no_cu").innerHTML="Please enter valid phone number";
  }
  else{
    document.getElementById("phone_no_cu").className = document.getElementById("phone_no_cu").className.replace(" has-error", "");
    document.getElementById("p_phone_no_cu").style.display="none";
  }
  
  var x=document.forms["contact"]["country_cu"].value;
  if (x==null || x==""){
    document.getElementById("country_cu").className = document.getElementById("country_cu").className + " has-error";
    flag=0;
    document.getElementById("p_country_cu").style.display="block";
    document.getElementById("p_country_cu").innerHTML="Please provide your country name";
  }
  else{
    document.getElementById("country_cu").className = document.getElementById("country_cu").className.replace(" has-error", "");
    document.getElementById("p_country_cu").style.display="none";
  }

  var x=document.forms["contact"]["city_cu"].value;
  if (x==null || x==""){
    document.getElementById("city_cu").className = document.getElementById("city_cu").className + " has-error";
    document.getElementById("p_city_cu").style.display="block";
    document.getElementById("p_city_cu").innerHTML="Please provide your city name";
    flag=0;
  }
  else{
    document.getElementById("city_cu").className = document.getElementById("city_cu").className.replace(" has-error", "");
    document.getElementById("p_city_cu").style.display="none";
  }

  var x=document.forms["contact"]["message_cu"].value;
  if (x==null || x==""){
    document.getElementById("message_cu").className = document.getElementById("message_cu").className + " has-error";
    document.getElementById("p_message_cu").style.display="block";
    document.getElementById("p_message_cu").innerHTML="Please provide your message";
    flag=0;
  }
  else{
    document.getElementById("message_cu").className = document.getElementById("message_cu").className.replace(" has-error", "");
    document.getElementById("p_message_cu").style.display="none";
  }  
  
  if(flag==0){
    return false;
  }
  else{
    return true;    
  }
}

function validateGetstartedForm(){
  var flag=1;
  var x=document.forms["getstarted"]["name_gs"].value;
  if (x==null || x==""){
    document.getElementById("name_gs").className = document.getElementById("name_gs").className + " has-error";
    flag=0;
    document.getElementById("p_name_gs").style.display="block";
    document.getElementById("p_name_gs").innerHTML="Please provide your name";
  }
  else if (x.length<2){
    document.getElementById("name_gs").className = document.getElementById("name_gs").className + " has-error";
    flag=0;
    document.getElementById("p_name_gs").style.display="block";
    document.getElementById("p_name_gs").innerHTML="Seems like your name is not appropirate";
  }
  else{
    document.getElementById("name_gs").className = document.getElementById("name_gs").className.replace(" has-error", "");
    document.getElementById("p_name_gs").style.display="none";
  }

  var x=document.forms["getstarted"]["emailid_gs"].value;
  if (x==null || x==""){
    document.getElementById("emailid_gs").className = document.getElementById("emailid_gs").className + " has-error";
    flag=0;
    document.getElementById("p_email_gs").style.display="block";
    document.getElementById("p_email_gs").innerHTML="Please enter your email id";
  }
  else if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(x) == false){
    document.getElementById("emailid_gs").className = document.getElementById("emailid_gs").className + " has-error";
    flag=0;
    document.getElementById("p_email_gs").style.display="block";
    document.getElementById("p_email_gs").innerHTML="Please enter valid email id";
  }
  else{
    document.getElementById("email_gs").className = document.getElementById("email_gs").className.replace(" has-error", "");
    document.getElementById("p_email_gs").style.display="none";
  }

  var x=document.forms["getstarted"]["desg_gs"].value;
  if (x=="0"){
    document.getElementById("desg_gs").className = document.getElementById("desg_gs").className + " has-error";
    flag=0;
    document.getElementById("p_desg_gs").style.display="block";
    document.getElementById("p_desg_gs").innerHTML="Please select your role";
  }
  else{
    document.getElementById("desg_gs").className = document.getElementById("desg_gs").className.replace(" has-error", "");
    document.getElementById("p_desg_gs").style.display="none";
  }
  
  var x=document.forms["getstarted"]["org_gs"].value;
  if (x==null || x==""){
    document.getElementById("org_gs").className = document.getElementById("org_gs").className + " has-error";
    flag=0;
    document.getElementById("p_org_gs").style.display="block";
    document.getElementById("p_org_gs").innerHTML="Please provide your organization name";
  }
  else{
    document.getElementById("org_gs").className = document.getElementById("org_gs").className.replace(" has-error", "");
    document.getElementById("p_org_gs").style.display="none";
  }

  var x=document.forms["getstarted"]["web_gs"].value;
  if (x==null || x==""){
    document.getElementById("web_gs").className = document.getElementById("web_gs").className + " has-error";
    document.getElementById("p_web_gs").style.display="block";
    document.getElementById("p_web_gs").innerHTML="Please provide your website";
    flag=0;
  }
  else{
    document.getElementById("web_gs").className = document.getElementById("web_gs").className.replace(" has-error", "");
    document.getElementById("p_web_gs").style.display="none";
  }

  var x=document.forms["getstarted"]["how_gs"].value;
  if (x==null || x==""){
    document.getElementById("how_gs").className = document.getElementById("how_gs").className + " has-error";
    document.getElementById("p_how_gs").style.display="block";
    document.getElementById("p_how_gs").innerHTML="Please provide your message";
    flag=0;
  }
  else{
    document.getElementById("how_gs").className = document.getElementById("how_gs").className.replace(" has-error", "");
    document.getElementById("p_how_gs").style.display="none";
  }  
  
  if(flag==0){
    return false;
  }
  else{
    return true;    
  }
}