/*
#Mahesh J
#TheSparksFoundationInternship
#GripJune21
#WebDevIntern
#Task3
#PaymentGatewayIntegration
*/

var mybutton = document.getElementById("home");
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.body.scrollTop > 40|| document.documentElement.scrollTop > 10) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunc() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}