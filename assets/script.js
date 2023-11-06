// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var uppercaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercaseList = "abcdefghijklmnopqrstuvwxyz";
var specialList = "!@#$%^&*()_";
var numberList = "0123456789";
var characterPool = "";

var length, uppercase, lowercase, special, number;

// Add event listener to generate button
 generateBtn.addEventListener("click", writePassword);

function getRandomItem(characterPool) {
  return characterPool[Math.floor(Math.random() * characterPool.length)];
}
 // Write password to the #password input
function writePassword() {
 
  //logic for prompting length, upper, lower, special and numeric
  
  length = getPasswordLength() 

  uppercase = confirm("Do you want upper case letters?");
  if (uppercase) {
  
  var val = getRandomItem(uppercaseList);
  console.log(val);
  }
  lowercase = confirm("Do you want lower case letters?");
  if (lowercase) {
  
  var val = getRandomItem(lowercaseList);
  console.log(val)
  }
  special = confirm("Do you want special characters?");
  if (special) {
  
  var val = getRandomItem(specialList);
  console.log(val)
  }
  number  = confirm("Do you want numbers?");
  if (number) {
  
  var val = getRandomItem(numberList)
  console.log(val)
  }

//generate the password
var password = generatePassword(length, uppercase, lowercase, special, number);
 
//display password in the #password field
 var passwordText = document.querySelector("#password");
 passwordText.value = password;
}

function getPasswordLength() {
  while(true) {
   length = prompt("How many characters would you like?");
   console.log(length);
 //if lenth > 128 or length < 8 
//let user know they need to be within our constraints
//store resonse
//loop continues if criteria is not met
   if (length >= 8 && length <= 128 && !isNaN(length)) {
      return parseInt(length); 
   } else {
     alert("Your password must be between 8 and 128 characters in length.");
   }
  }
}

  function generatePassword(length, uppercase, lowercase, special, number) {
    characterPool = "";
  
 if (uppercase) {
    characterPool += uppercaseList;
  }
  
  if (lowercase) {
    characterPool += lowercaseList;
  }

 if (special) {
  characterPool += specialList;
 }

 if (number) {
  characterPool += numberList
 }

 var password = "";
 for (index = 0; index < length; index++) { 
  password += getRandomItem(characterPool);
}

return password;

}
  