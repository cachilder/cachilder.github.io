function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function validateForm() {
    let x = document.forms["myForm"]["name"].value;
    if (x == "") {
      alert("*Information must be filled out");
      return false;}
    else {
      alert("Thank you for your submission");
      return true;
    }
  }
  function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    if (x == "") {
      alert("*Information must be filled out");
      return false;}
    else {
      alert("Thank you for your submission");
      return true;
    }
  }
  let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}