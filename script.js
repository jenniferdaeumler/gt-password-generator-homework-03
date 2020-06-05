console.log("This is script.js");

// Assignment Code
var generateBtn = document.querySelector("#generate");

//Function for generatePassword to be used in writePassword function
function generatePassword() {
  console.log("generatePassword initiated");
  var passwordLength = prompt("Choose your password length by entering a number between 8 and 128.");
  console.log(passwordLength);

  var characterTypes = [];

  var lowerCase = confirm("Would you like to include lowercase characters?");
  if (lowerCase === true) {
    characterTypes.push(0);
  }
  console.log(lowerCase);

  var upperCase = confirm("Would you like to include uppercase characters?");
  if (upperCase === true) {
    characterTypes.push(1);
  }
  console.log(upperCase);

  var numbers = confirm("Would you like to include numbers?");
  if (numbers === true) {
    characterTypes.push(2);
  }
  console.log(numbers);

  var special = confirm("Would you like to include special characters?");
  if (special === true) {
    characterTypes.push(3);
  }
  console.log(special);

  console.log(characterTypes);
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
