// Assignment code here

// array for lower case letters
var lowerCaseArray = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// array for upper case letters
var upperCaseArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// array for number 
var numberArray = ["0","1","2","3","4","5","6","7","8","9"];

// array for special characters
var specialArray = ["~","!","@","#","$","%","^","&","*","(",")","_","+"];

// variables for each case 
var lowerCase;
var upperCase;
var number;
var special;
var length = "";

// generate function starts
var generatePassword = function() {
  var length = window.prompt("How many characters do you want your password to be? (Must be within 8-128 characters)");
  //console.log(length);

  // "while" loop when password length doesn't meet criteria
  while (length < 8 || length > 128) {
    window.alert("Password must be between 8-128 characters. Please enter valid response.");
    window.prompt("How many characters do you want your password to be? (Must be within 8-128 characters)");
    break;
  }

  var lowerCase = window.confirm("Do you want to include a lowercase character?");
  //console.log(lowerCase);

  var upperCase = window.confirm("Do you want to include a uppercase character?");
  //console.log(upperCase);

  var number = window.confirm("Do you want to include a number?");
  //console.log(number);

  var special = window.confirm("Do you want to include a special character?");
  //console.log(special);

  // "while" loop for false answers
  // ! is an operator which means opposite (note to self: true = true, while !true = false)
  while(!lowerCase && !upperCase && !number && !special) {
    var lowerCase = window.confirm("Do you want to include a lowercase character?");
    var upperCase = window.confirm("Do you want to include a uppercase character?");
    var number = window.confirm("Do you want to include a number?");
    var special = window.confirm("Do you want to include a special character?");
    break;
  }

  // made a variable with an open array to merge multiple arrays together using the array concat method
  var characters = [];

  if (lowerCase) {
    characters = characters.concat(lowerCaseArray)
  }

  if (upperCase) {
    characters = characters.concat(upperCaseArray)
  }

  if (number) {
    characters = characters.concat(numberArray)
  }

  if (special) {
    characters = characters.concat(specialArray)
  }

  // set up a variable to an open string to get random password
  var randomPassword = "";

  // "for" loop to generate length of password 
  for (var i = 0; i < length; i++) {
    randomPassword += characters[Math.floor(Math.random() * characters.length)];
  }

  return randomPassword;
};
// generate function ends

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
