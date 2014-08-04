function navselector(navval){
  
}


function validateContactForm(){
  var flag=1;
  var x=document.forms["contact"]["name2"].value;
  if (x==null || x==""){
    document.getElementById("name2").className = document.getElementById("name2").className + " has-error";
    flag=0;
    document.getElementById("pname2").style.display="block";
    document.getElementById("pname2").innerHTML="Please provide your name";
  }
  else if (x.length<2){
    document.getElementById("name2").className = document.getElementById("name2").className + " has-error";
    flag=0;
    document.getElementById("pname2").style.display="block";
    document.getElementById("pname2").innerHTML="Seems like your name is not appropirate";
  }
  else{
    document.getElementById("name2").className = document.getElementById("name2").className.replace(" has-error", "");
    document.getElementById("pname2").style.display="none";
  }

  var x=document.forms["contact"]["email1"].value;
  if (x==null || x==""){
    document.getElementById("email1").className = document.getElementById("email1").className + " has-error";
    flag=0;
    document.getElementById("pemail1").style.display="block";
    document.getElementById("pemail1").innerHTML="Please enter your email id";
  }
  else if(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(x) == false){
    document.getElementById("email1").className = document.getElementById("email1").className + " has-error";
    flag=0;
    document.getElementById("pemail1").style.display="block";
    document.getElementById("pemail1").innerHTML="Please enter valid email id";
  }
  else{
    document.getElementById("email1").className = document.getElementById("email1").className.replace(" has-error", "");
    document.getElementById("pemail1").style.display="none";
  }

  var x=document.forms["contact"]["phone_no1"].value;
  if (x==null || x==""){
    document.getElementById("phone_no1").className = document.getElementById("phone_no1").className + " has-error";
    flag=0;
    document.getElementById("pphone_no1").style.display="block";
    document.getElementById("pphone_no1").innerHTML="Please enter your phone number";
  }
  else if(/^\d+$/.test(x) == false){
    document.getElementById("phone_no1").className = document.getElementById("phone_no1").className + " has-error";
    flag=0;
    document.getElementById("pphone_no1").style.display="block";
    document.getElementById("pphone_no1").innerHTML="Please enter valid phone number";
  }
  else{
    document.getElementById("phone_no1").className = document.getElementById("phone_no1").className.replace(" has-error", "");
    document.getElementById("pphone_no1").style.display="none";
  }
  
  var x=document.forms["contact"]["country1"].value;
  if (x==null || x==""){
    document.getElementById("country1").className = document.getElementById("country1").className + " has-error";
    flag=0;
    document.getElementById("pcountry1").style.display="block";
    document.getElementById("pcountry1").innerHTML="Please provide your country name";
  }
  else{
    document.getElementById("country1").className = document.getElementById("country1").className.replace(" has-error", "");
    document.getElementById("pcountry1").style.display="none";
  }

  var x=document.forms["contact"]["city1"].value;
  if (x==null || x==""){
    document.getElementById("city1").className = document.getElementById("city1").className + " has-error";
    document.getElementById("pcity1").style.display="block";
    document.getElementById("pcity1").innerHTML="Please provide your city name";
    flag=0;
  }
  else{
    document.getElementById("city1").className = document.getElementById("city1").className.replace(" has-error", "");
    document.getElementById("pcity1").style.display="none";
  }

  var x=document.forms["contact"]["message1"].value;
  if (x==null || x==""){
    document.getElementById("message1").className = document.getElementById("message1").className + " has-error";
    document.getElementById("pmessage1").style.display="block";
    document.getElementById("pmessage1").innerHTML="Please provide your message";
    flag=0;
  }
  else{
    document.getElementById("message1").className = document.getElementById("message1").className.replace(" has-error", "");
    document.getElementById("pmessage1").style.display="none";
  }  
  
  if(flag==0){
    return false;
  }
  else{
    return true;    
  }
}