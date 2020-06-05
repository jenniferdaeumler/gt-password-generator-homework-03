// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "Please enter password length between 8 and 128 characters."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
  } else {
    var upperCase = confirm("Do you want uppercase letter?"),
      lowerCase = confirm("Do you want lowercase letter?"),
      numeric = confirm("Do you want numeric characters?"),
      special = confirm("Do you want special characters?");
  }
  var lowerCaseOptions = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  var numericOptions = [1,2,3,4,5,6,7,8,9,0];

  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

  var upperCaseOptions = []

  if (lowerCase) {
    passwordLength += lowerCaseOptions;
  }
  if (upperCase) {
    passwordLength += upperCaseOptions;
  }
  if (numeric) {
    passwordLength += numericOptions;
  }
  if (special) {
    passwordLength += specialOptions;
  }


//   plength = Number(lengthInput.value);
var userPassword = ("");

  for (let i = 0; i < passwordLength.length; i++) {
    userPassword += passwordLength.charAt()
      Math.floor(Math.random() * passwordLength.length)
    ;
  }
  console.log(userPassword)
}

// console.log("You clicked my button!");
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
