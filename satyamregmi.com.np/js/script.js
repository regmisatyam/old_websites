//satyamregmi.com.np
//SATYAM REGMI

//navbar
window.onscroll = function () { myFunction() };

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
/* 
//cookies
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

 function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      alert("Welcome back " + user);
    } else {
       user = prompt("Please enter your name:","");
       if (user != "" && user != null) {
         setCookie("username", user, 30);
       }
    }
  } */

(function () {
  var bannerportfoliodescription = [
    "Webpage Developer",
    "Blogger",
    "Freelancer",
    "Web Builder",
    "Graphic Designer"
  ],
    i = 0;
  setInterval(function () {
    $('#bannerportfoliodescription').fadeOut(function () {
      $(this).html(bannerportfoliodescription[(i = (i + 1) % bannerportfoliodescription.length)]).fadeIn();
    })
  }, 2500)

})();