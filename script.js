// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var passLength = prompt("How many characters do you want in your password?")

var charOptions = "";
var newPassword = "";

if (passLength < 8 || passLength > 128) {
  alert("Sorry, we can only make passwords between 8 and 128 characters.")
} else {
  if (confirm("Do you want to include uppercase letter?")) {
    charOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } 
  
  if (confirm("Do you want to include lowercase letters?")) {
    charOptions += "abcdefghijklmnopqrstuvwxyz"
  }
  
  if (confirm("Do you want to include numbers?")) {
    charOptions += "1234567890";
  }

  if (confirm("Do you want to indclude special characters?")) {
    charOptions += "!@#$%^&*()"
  } 

  if (charOptions.length === 0) {
    alert("Error, you must pick at least one option")
  }

  for (let i = 0; i < passLength - 1; i++) {
    newPassword += charOptions[(Math.floor(Math.random()*charOptions.length))];
  }

  console.log(newPassword);

}
   