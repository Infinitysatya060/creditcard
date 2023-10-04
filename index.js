var button = document.getElementById("btn");
var button2 = document.getElementById("btn2");
var cardNumber = document.getElementById("cnum");
var holderName = document.getElementById("hname");
var month = document.getElementById("mm");
var year = document.getElementById("yy");
var cvv = document.getElementById("cv");

// showing the output
var number = document.querySelector(".number");
var cName = document.getElementById("cname");
var MM = document.getElementById("mm1");
var YY = document.getElementById("yy2");
var cvv2 = document.querySelector(".cvv");
//error
var err1 = document.getElementById("error1");
var err2 = document.getElementById("error2");
var err3 = document.getElementById("error3");
var err4 = document.getElementById("error4");
var err5 = document.getElementById("error5");

var thankYou = document.querySelector(".thank-you");
var form = document.querySelector(".form2");

function cardNumber1() {
  number.innerHTML = cardNumber.value;
}
function holderName1() {
  cName.innerHTML = holderName.value;
}
function cardMonth() {
  MM.innerHTML = month.value;
}
function cardYear() {
  YY.innerHTML = year.value;
}
function cvv1() {
  cvv2.innerHTML = cvv.value;
}
addEventListener("keyup", cardNumber1);
addEventListener("keyup", holderName1);
addEventListener("keyup", cardMonth);
addEventListener("keyup", cardYear);
addEventListener("keyup", cvv1);

function validateForm() {
  if (cardNumber.value == "") {
    err2.innerHTML = "Enter a number";

    return false;
  } else if (holderName.value == "") {
    err1.innerHTML = "Enter card name";
    return false;
  } else if (cardNumber.value <= 18 && cardNumber.value > 18) {
    err2.innerHTML = "Enter a valid number";
    return false;
  } else if (month.value > 13) {
    err3.innerHTML = "Enter a valid month";

    return false;
  } else if (year.value > new Date().getFullYear()) {
    err4.innerHTML = "Enter a valid year";
    return false;
  } else if (cvv.value.length > 3) {
    err5.innerHTML = "Enter a valid  cvv";
    return false;
  } else {
    err1.innerHTML = "";
    err2.innerHTML = "";
    err3.innerHTML = "";
    err4.innerHTML = "";
    err5.innerHTML = "";
    return true;
  }
}
// button.addEventListener("click", validateForm);
button.onclick = function () {
  validateForm();
  form.classList.add("disable");
  thankYou.classList.remove("disable");
};
button2.onclick = function () {
  thankYou.classList.add("disable");
  form.classList.remove("disable");
};
