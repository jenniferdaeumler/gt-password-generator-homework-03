console.log("This is script.js");

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function for generatePassword to be used in writePassword function
function generatePassword() {
  console.log("generatePassword initiated");
  var passwordLength = prompt ("Choose your password length by entering a number between 8 and 128.");
  console.log(passwordLength);

  var characterTypes = [];

  var lowerCase = confirm("Would you like to include lowercase characters?");
  console.log(lowerCase);
  var upperCase = confirm("Would you like to include uppercase characters?");
  console.log(upperCase);
  var numbers = confirm("Would you like to include numbers?");
  console.log(numbers);
  var special = confirm("Would you like to include special characters?");
  console.log(special);
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
