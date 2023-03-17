// Assignment Code
var generateBtn = document.querySelector("#generate");

var passLength;
var confirmLow;
var confirmUp;
var confirmNum;
var confirmSpec;
var passChar = [];

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var toUpper = function (x) {  // Convert to upper case
  return x.toUpperCase();
};
var upper = lower.map(toUpper);




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Start generatePassword function
function generatePassword() {
  // Ask user for password characters
  passLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  while(passLength < 8 || passLength > 128 || !passLength) {
    alert("Password length must be between 8-128 characters. Try again");
    var passLength = (prompt("How many characters would you like your password to contain?"));
    } 

     // Alert user how many characters his password will have  
     alert("Your password will have " + passLength + " characters");

    // Ask user for parameters of his password 
    var confirmSpec = confirm("Click OK to confirm if you would like to include special characters");
    var confirmNum = confirm("Click OK to confirm if you would like to include numeric characters");    
    var confirmLow = confirm("Click OK to confirm if you would like to include lowercase characters");
    var confirmUp = confirm("Click OK to confirm if you would like to include uppercase characters");
      // Loop and retry if answer is outside parameters 
      while(confirmUp === false && confirmLow === false && confirmSpec === false && confirmNum === false) {
        alert("You must choose at least one parameter");
        var confirmSpec = confirm("Click OK to confirm if you would like to include special characters");
        var confirmNum = confirm("Click OK to confirm if you would like to include numeric characters");    
        var confirmLow = confirm("Click OK to confirm if you would like to include lowercase characters");
        var confirmUp = confirm("Click OK to confirm if you would like to include uppercase characters");   
      }

      // if statements to add each option whether or not the user clicked on OK
    if (confirmSpec) {
      passChar = passChar.concat(special)
    }

    if (confirmNum) {
      passChar = passChar.concat(numbers)
    }
      
    if (confirmLow) {
      passChar = passChar.concat(lower)
    }

    if (confirmUp) {
      passChar = passChar.concat(upper)
    }

      console.log("The password will be generated according to the following array: " + passChar)

      // Start with empty string
      var passGen = ""
      
      // For loop to insert each character into the string above
      for (var i = 0; i < passLength; i++) {
        passGen = passGen + passChar[Math.floor(Math.random() * passChar.length)];
        console.log("The password right now is: " + passGen)
      }
      return passGen;


}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}