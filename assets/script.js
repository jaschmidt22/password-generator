// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var specialList = "!@#$%^&*()_"
var numberList = "0123456789"

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
var password = "Temp password";
}
  //logic for prompting length, special numeric lower and upper
  //if lenth > 128 or length < 8 
  //let user know they need to be within our constraints
var length;
 while(true) {
  length = prompt("How many characters would you like?");
  console.log(length);

  //end the loop if criteria is satisfied
  if (length >= 8 && length <= 128 && !isNaN(length)) {
     break; 
  } else {
    alert("Your password must be between 8 and 128 characters in length.");
  }
 }
  //prompt user for special
  //store the response 
  //write algo for creating password with the selected Characters, constrained by length
  //the user provided
var uppercase = confirm("Do you want upper case letters?");
if (uppercase) {

var val = getRandomItem(uppercaseList);
console.log(val);
}
var lowercase = confirm("Do you want lower case letters?");
if (lowercase) {

var val = getRandomItem(lowercaseList);
console.log(val)
}
var special = confirm("Do you want special characters?");
if (special) {

var val = getRandomItem(specialList);
console.log(val)
}
var numbers  = confirm("Do you want numbers?");
if (numbers) {

var val = getRandomItem(numberList)
console.log(val)
}

for (index = 0; index < length; index++) { 
}
//return "This will be your password";

function getRandomItem(str) {
  return str[Math.floor(Math.random() * str.length)];
}



// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);