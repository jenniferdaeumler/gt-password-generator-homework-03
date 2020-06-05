console.log("This is script.js");

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function for generatePassword to be used in writePassword function
function generatePassword() {
  console.log("generatePassword initiated");
}

// Write password to the #password input
function writePassword() {
  console.log("Button clicked");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
