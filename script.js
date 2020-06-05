// Assignment Code
var generateBtn = document.querySelector("#generate");


 //Add event listener to generate button
 generateBtn.addEventListener("click", writePassword); 

// Write password to the #password input
function writePassword() {
  console.log("You clicked the button");
  var passwordLength = prompt(
    "Please enter password length between 8 and 128 characters."
  );
  console.log(passwordLength);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your password must be between 8 and 128 characters.");
  
  } else {
    var upperCase = confirm("Do you want uppercase letter?"),
      lowerCase = confirm("Do you want lowercase letter?"),
      numeric = confirm("Do you want numeric characters?"),
      special = confirm("Do you want special characters?");
  }



  var upperCaseOptions = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "U",
    "X",
    "Y",
    "Z",
  ];
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

  var specialOptions = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

  var userChoice= [];

  if (upperCase) {
   userChoice.push(upperCaseOptions);
  }
  if (lowerCase) {
    userChoice.push(lowerCaseOptions);
  }
  if (numeric) {
    userChoice.push(numericOptions);
  }
  if (special) {
    userChoice.push(specialOptions);
  } else {
   
  }
  console.log(userChoice);

var userPassword = ("");

  for (i = 0; i < passwordLength; i++) {
    userPassword = passwordLength.charAt()
     Math.floor(Math.random() * userChoice.length)
    ;} }

 //why does getting rid of 104 make button go away, and pop up automatically, but with it, its undefined? 
 //also, if I move it anywhere else, the buttons/box disappears. Why would console.log do that?
    console.log(userPassword);


var password = writePassword();
var passwordText = document.querySelector("#password");

passwordText.value = password;


