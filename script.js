// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var passwordLength = prompt(
    "Please enter desired password length between 8 and 128 characters"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a password between 8 and 128 characters");
    writePassword();

  }}



// console.log("You clicked my button!");
// var password = generatePassword();
// var passwordText = document.querySelector("#password");

// passwordText.value = password;



// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword); 
