const modal = document.getElementById("cookieModal");

document
.getElementById("acceptCookie")
.onclick=function(){

localStorage.setItem("cookiesAccepted","yes");

modal.style.display="none";

}

document
.getElementById("closeCookie")
.onclick=function(e){

e.preventDefault();

modal.style.display="none";

}

if(localStorage.getItem("cookiesAccepted")){

modal.style.display="none";

}
