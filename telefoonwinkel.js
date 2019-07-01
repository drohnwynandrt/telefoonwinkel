window.onload=navBar();
function navBar(){
    navBarInner="<a href='index.html'>Home</a> <a href='products.html'>Products</a> <a href='contact.html'>Contact</a>";

document.getElementById("navigationbar").innerHTML= navBarInner;
}
function completeOrder(){
    var customerName = document.getElementById("customerNameField").value;
    var customerEmail = document.getElementById("customerEmailField").value;

    if (customerName == ""  ){
        alert ("Please fill in your name")
    }
    else if (customerEmail == ""){
        alert ("Please fill in your e-mail")
    }
    else  {
        alert("Thank you "+ customerName+" for contacting us. We will reply to your message by e-mail within 5 business days!");
        document.location.reload() ;
    } 
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}