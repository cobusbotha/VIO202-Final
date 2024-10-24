let Name = document.getElementById("nameField");
let Surname = document.getElementById("surnameField");
let Email = document.getElementById("emailField");
let cardNumber = document.getElementById("cardNumberField");
let cvc = document.getElementById("cvcField");
let cardName = document.getElementById("cardNameField");
let Month = document.getElementById("exparationField");
let Button = document.getElementById("formSubmit");

let validName = false;
let validSurname = false;
let validEmail = false;
let validCardNumber = false;
let validDate = false;
let validCvc = false;
let validCardname = false;
let validMonth = false;

Name.onblur = function () {
  let name = Name.value;
  if (name.length <= 1) {
    document.getElementById("nameMessage").innerHTML = "Name is too short.";
    Name.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validName = false;
  } else if (name.charAt(0) != name.charAt(0).toUpperCase()) {
    document.getElementById("nameMessage").innerHTML =
      "Must start with capital letter.";
    Name.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validName = false;
  } else {
    document.getElementById("nameMessage").innerHTML = "";
    Name.style.backgroundColor = "White";
    validName = true;
  }
};
Surname.onblur = function () {
  let surname = Surname.value;
  if (surname.length <= 1) {
    document.getElementById("surnameMessage").innerHTML =
      "Surname is too short.";
    Surname.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validSurname = false;
  } else if (surname.charAt(0) != surname.charAt(0).toUpperCase()) {
    document.getElementById("surnameMessage").innerHTML =
      "Must start with capital letter.";
    Surname.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validSurname = false;
  } else {
    document.getElementById("surnameMessage").innerHTML = "";
    Surname.style.backgroundColor = "White";
    validSurname = true;
  }
};
function testEmail(emailTest) {
  if (
    emailTest.length != 0 &&
    emailTest.indexOf("@") != -1 &&
    emailTest.indexOf(".") != -1
  ) {
    return true;
  } else {
    return false;
  }
}
Email.onblur = function () {
  let emailCheck = false;
  let email = Email.value;
  emailCheck = testEmail(email);
  if (emailCheck) {
    document.getElementById("emailMessage").innerHTML = "";
    Email.style.backgroundColor = "white";
    validEmail = true;
  } else {
    document.getElementById("emailMessage").innerHTML = "Email is not valid.";
    Email.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validEmail = false;
  }
};
cardNumber.onblur = function () {
  let cardnumber = cardNumber.value;
  if (cardnumber.length < 13 || cardnumber.length > 19) {
    document.getElementById("cardNumberMessage").innerHTML =
      "Card number is invalid.";
    cardNumber.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validCardNumber = false;
  } else {
    document.getElementById("cardNumberMessage").innerHTML = "";
    cardNumber.style.backgroundColor = "white";
    validCardNumber = true;
  }
};
cvc.onblur = function () {
  let Cvc = cvc.value;
  if (Cvc.length < 3 || Cvc.length > 4) {
    document.getElementById("cvcMessage").innerHTML = "CVC is invalid";
    cvc.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validCvc = false;
  } else {
    document.getElementById("cvcMessage").innerHTML = "";
    cvc.style.backgroundColor = "white";
    validCvc = true;
  }
};
Month.onblur = function () {
  let month = Month.value;
  const d = new Date();
  let currentYear = d.getFullYear();
  let currentMonth = d.getMonth() + 1;
  if (
    (parseInt(month.substring(0, 4)) > currentYear &&
      parseInt(month.substring(5, 7)) < currentMonth) ||
    parseInt(month.substring(0, 4)) > currentYear
  ) {
    document.getElementById("exparationMessage").innerHTML = "";
    Month.style.backgroundColor = "white";
    validMonth = true;
  } else if (
    parseInt(month.substring(0, 4)) < currentYear ||
    parseInt(month.substring(5, 7)) < currentMonth
  ) {
    document.getElementById("exparationMessage").innerHTML =
      "Card already expired.";
    Month.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validMonth = false;
  } else {
    document.getElementById("exparationMessage").innerHTML = "";
    Month.style.backgroundColor = "white";
    validMonth = true;
  }
};
cardName.onblur = function () {
  let cardname = cardName.value;
  if (cardname.length <= 1) {
    document.getElementById("cardNameMessage").innerHTML =
      "Card Name is too short.";
    cardName.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validCardname = false;
  } else if (cardname.charAt(0) != cardname.charAt(0).toUpperCase()) {
    document.getElementById("cardNameMessage").innerHTML =
      "Must start with capital letter.";
    cardName.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    validCardname = false;
  } else {
    document.getElementById("cardNameMessage").innerHTML = "";
    cardName.style.backgroundColor = "white";
    validCardname = true;
  }
};
Button.onclick = function () {
  if (
    validName &&
    validSurname &&
    validEmail &&
    validCardNumber &&
    validCvc &&
    validCardname &&
    validMonth
  ) {
    return true;
  } else {
    document.getElementById("submitMessage").innerHTML =
      "Make sure all form fields are filled in correctly";
    Button.style.backgroundColor = "rgba(255, 0, 0, 0.5)";
    return false;
  }
};
