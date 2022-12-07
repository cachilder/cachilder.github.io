
function validateForm() {
  let x = document.forms["myForm"]["fname1"].value;
  if (x == "") {
    alert("*Information must be filled out");
    return false;}
  else {
    alert("Thank you for your submission");
    return true;
  }
}

function validateForm() {
  let x = document.forms["myForm"]["fname2"].value;
  if (x == "") {
    alert("*Information must be filled out");
    return false;}
  else {
    alert("Thank you for your submission");
    return true;
  }
}
function validateForm() {
  let x = document.forms["myForm"]["fname3"].value;
  if (x == "") {
    alert("*Information must be filled out");
    return false;}
  else {
    alert("Thank you for your submission");
    return true;
  }
}
function validateForm() {
  let x = document.forms["myForm"]["fname4"].value;
  if (x == "") {
    alert("*Information must be filled out");
    return false;}
  else {
    alert("Thank you for your submission");
    return true;
  }
}
function validateForm() {
  let x = document.forms["myForm"]["fname5"].value;
  if (x == "") {
    alert("*Information must be filled out");
    return false;}
  else {
    alert("Thank you for your submission");
    return true;
  }
}

function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
const d = new Date();
document.getElementById("date").innerHTML = d;