// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "Please enter password length between 8 and 128 characters."
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters.");}
  else
  {var upperCase = confirm("Do you want uppercase letter?"),
  lowers= confirm("Do you want lowercase letter?"),
  numeric = confirm("Do you want numeric characters?"),
  special = confirm("Do you want special characters?");

  }}



// console.log("You clicked my button!");
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); 
