//Console.log check
console.log("This is script.js");

//Assignment Code
var generateBtn = document.querySelector("#generate");

//Function for generatePassword to be used in writePassword function
function generatePassword() {
  console.log("generatePassword initiated");

//Prompt to choose password length
  var passwordLength = prompt("Choose your password length by entering a number between 8 and 128.");
  if(passwordLength >7 || passwordLength <129) {console.log(passwordLength);}
  else{alert("You must select a number between 8 and 128. Try again."); console.log("Wrong character type entered");return;}

//Character type empty array, to be filled with user choices
  var characterTypes = [];

  //Confirmation for various character types, pushed into array, logged
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

  var yourPassword = "";

  // //Randomizer what character type to pick.
  for (var i = 0; i < passwordLength; ++i) {
    var randomCharacterType = characterTypes[Math.floor(Math.random() * characterTypes.length)];
    console.log(randomCharacterType);

    if (randomCharacterType === 0) {
      console.log("Random lowercase");
      var randomCharacterCode = Math.floor(Math.random() * 25) + 97;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    }
    else if (randomCharacterType === 1) {
      console.log("Random uppercase");
      var randomCharacterCode = Math.floor(Math.random() * 25) + 65;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    }
    else if (randomCharacterType === 2) {
      console.log("Random number");
      var randomCharacterCode = Math.floor(Math.random() * 9) + 48;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    }
    else if (randomCharacterType === 3) {
      console.log("Random special character");
      var randomCharacterCode = Math.floor(Math.random() * 14) + 33;
      console.log(randomCharacterCode);
      var asciiCode = String.fromCharCode(randomCharacterCode);
      console.log(asciiCode);
      yourPassword = yourPassword.concat(asciiCode);
    }
    else {
      alert("You must select a character type.");
      console.log("No character type selected");
    }
    console.log("Your password is " + yourPassword);
   
    
  }
  

  return yourPassword;

}


// Write password to the #password input
function writePassword() {
  console.log("Button clicked");
  var password = generatePassword();
  console.log("PRESENT PASSWORD "+ password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// //If password length is >128, <8, or a letter, cannot get to work.
// //   if(passwordLength = String){return;}
// else if (passwordLength > 128){return;}
// else if (passwordLength < 8){return;} 
// else {(passwordLength >=8 || passwordLength <128); console.log(passwordLength);}