// Assignment Code
var generateBtn = document.querySelector("#generate");
var pwLowCase, pwUpCase, pwNum, pwSpChar;

//validation for yes and no
function booleanCheck(x) {
  if (x.toLowerCase() == "yes" || x.toLowerCase() == "y") {
    return true;
  } else if (x.toLowerCase() == "no" || x.toLowerCase() == "n") {
    return false;
  } else {
    alert("Please type either 'Yes' or 'No'. This is not case sensitive.");
    throw 'not valid answer';
  }
}

//Generate password function
function generatePassword() {

  //password length entry and validation
  var pwLength = prompt("Please enter the length of the password.", "Enter a number between 8 and 128.");
  if (isNaN(pwLength) || pwLength === null) {
    return alert("Password length must be a number.");
  } else if (pwLength < 8) {
    return alert("Password length cannot be less than 8.");
  } else if (pwLength > 128) {
    return alert("Password length cannot be greater than 128.");
  }
  console.log(pwLength);

  pwLowCase = prompt("Do you want to include lowercase characters?", "Yes or No");
  pwLowCase = booleanCheck(pwLowCase);
  console.log(pwLowCase);
  pwUpCase = prompt("Do you want to include uppercase characters?", "Yes or No");
  pwUpCase = booleanCheck(pwUpCase);
  console.log(pwUpCase);
  pwNum = prompt("Do you want to include numeric characters?", "Yes or No");
  pwNum = booleanCheck(pwNum);
  console.log(pwNum);
  pwSpChar = prompt("Do you want to include special characters?", "Yes or No");
  pwSpChar = booleanCheck(pwSpChar);
  console.log(pwSpChar);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
