// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var newPassword = "";

  function generatePassword () {
    // opening message
    var passLength = prompt("How many characters do you want in your password?")
    // space to hold character options
    var charOptions = "";
    
    // make sure the characters are inside the limits
    if (passLength < 8 || passLength > 128) {
      alert("Sorry, we can only make passwords between 8 and 128 characters.")
    } else {
      // put in uppercase letter
      if (confirm("Do you want to include uppercase letter?")) {
        charOptions += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      } 
      // put in lowercase letters
      if (confirm("Do you want to include lowercase letters?")) {
        charOptions += "abcdefghijklmnopqrstuvwxyz"
      }
      // put in numbers
      if (confirm("Do you want to include numbers?")) {
        charOptions += "1234567890";
      }
      // put in special characters
      if (confirm("Do you want to indclude special characters?")) {
        charOptions += "!@#$%^&*()"
      } 
      // alert if no options are selected
      if (charOptions.length === 0) {
        alert("Error, you must pick at least one option")
      }
    
      for (let i = 0; i < passLength - 1; i++) {
        newPassword += charOptions[(Math.floor(Math.random()*charOptions.length))];
      }
    }
    }



  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = newPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



   