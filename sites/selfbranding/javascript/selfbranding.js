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

var form = document.forms["contact"];
form.addEventListener('submit',contact_submit,false);

function contact_submit(e) {
  // Stop Form From Submitting
  e.preventDefault();

  // Set Initial Variables
  var target = e.target || e.srcElement;
  var to = 'someone@example.com';
  var uri = 'mailto:' + to;
  var body = '';

  // Set Form Values to Variables
  var name = target.elements['name'].value;
  var subject = target.elements['subject'].value;
  var phone = target.elements['phone'].value;
  var message = target.elements['message'].value;

  // Build Body / Message with all Input Fields
  body += message + "\r\n\r\n";
  body += "Name: " + name + "\r\n";
  body += "Phone Number: " + phone + "\r\n";

  // Build final Mailto URI
  uri += '?subject=' + encodeURIComponent(subject);
  uri += '&body=' + encodeURIComponent(body);

  // Open Mailto in New Window / Tab
  window.open(uri,'_blank');
}
