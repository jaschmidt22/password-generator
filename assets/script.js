// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var specialList = "!@#$%^&*()_";
var numberList = "0123456789";
var characterPool = "";

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

 // Write password to the #password input
function writePassword() {
 
  //logic for prompting length, special, numeric, lower, and upper
  //if lenth > 128 or length < 8 
  //let user know they need to be within our constraints
  //store resonse
  var length = getPasswordLength() 
}
  function getPasswordLength() {
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
  //write algo for creating password with the selected characters, constrained by length user selected   
  
  var password = generatePassword(length, uppercase, lowercase, special, numbers);
  
  //display password in the #password field
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(length, uppercase, lowercase, special, numbers) {
 var characterPool = "";
  
 if (uppercase) {
    characterPool += uppercaseList;
  }
  
  if (lowercase) {
    characterPool += lowercaseList;
  }

 if (special) {
  characterPool += specialList;
 }

 if (numbers) {
  characterPool += numberList
 }
}
 for (index = 0; index < length; index++) { 
}
function getRandomItem(characterPool) {
  return characterPool[Math.floor(Math.random() * characterPool.length)];

}
//return password;
