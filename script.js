// Assignment Code
var generateBtn = document.querySelector("#generate");

//global variables
var pwLowCase, pwUpCase, pwNum, pwSpChar, charSet;
var newLine = "\r\n";
var lowCaseStr = "abcdefghijklmnopqrstuvqxyz";
var UpCaseStr = lowCaseStr.toUpperCase();
var numStr = "0123456789";
var spCharStr = "!@#$%^&*()_+~`|}{[]\:;?><,./-=";
var charSelected = [];
var errCode;

//validation for yes and no
function booleanCheck(x) {
  if (x.toLowerCase() == "yes" || x.toLowerCase() == "y") {
    return true;
  } else if (x.toLowerCase() == "no" || x.toLowerCase() == "n") {
    return false;
  } else {
    alert("Please type either 'Yes' or 'No'. This is not case sensitive.");
    throw errCode = 1;
  }
}

//random number generator based on length of input
function randNum(x) {
  return Math.floor(Math.random() * x.length);
}


//element picker for 2 dimensional array
function elementPickerTwoDim(x) {
  var arr1, arr2;
  arr1 = randNum(x);
  arr2 = randNum(x[arr1])
  return x[arr1][arr2];
}

//Generate password function
function generatePassword() {
  charSelected = [];
  var pwActual = [];

  //password length entry and validation
  var pwLength = prompt("Please enter the length of the password.", "Enter a number between 8 and 128.");
  if (isNaN(pwLength) || pwLength === null) {
    alert("Password length must be a number.");
    throw errCode = 3;
  } else if (pwLength < 8) {
    alert("Password length cannot be less than 8.");
    throw errCode = 4;
  } else if (pwLength > 128) {
    alert("Password length cannot be greater than 128.");
    throw errCode = 5;
  }

  //character types prompts and validations
  //lowercase
  pwLowCase = prompt("Do you want to include lowercase characters? | Y-Yes | N-No", "Yes or No");
  pwLowCase = booleanCheck(pwLowCase);
  //uppercase
  pwUpCase = prompt("Do you want to include uppercase characters? | Y-Yes | N-No", "Yes or No");
  pwUpCase = booleanCheck(pwUpCase);
  //numeric character
  pwNum = prompt("Do you want to include numeric characters? | Y-Yes | N-No", "Yes or No");
  pwNum = booleanCheck(pwNum);
  //special characters
  pwSpChar = prompt("Do you want to include special characters? | Y-Yes | N-No", "Yes or No");
  pwSpChar = booleanCheck(pwSpChar);

  //check for minimum 1 chartype
  if (![pwLowCase, pwUpCase, pwNum, pwSpChar].includes(true)) {
    alert("Please type 'Yes' to at least 1 character type.");
    throw errCode = 2;
  }

  //confirmation alert
  alert("You have chosen these settings:" + newLine
    + "Length: " + pwLength + newLine
    + "Lowercase: " + pwLowCase + newLine
    + "Uppercase: " + pwUpCase + newLine
    + "Numeric: " + pwNum + newLine
    + "Special: " + pwSpChar);

  //create pool of pwgen
  if (pwLowCase) {
    charSelected.push(lowCaseStr);
  }
  if (pwUpCase) {
    charSelected.push(UpCaseStr);
  }
  if (pwNum) {
    charSelected.push(numStr);
  }
  if (pwSpChar) {
    charSelected.push(spCharStr);
  }

  //password creation loop
  for (var i = 0; i < pwLength; i++) {
    pwActual.push(elementPickerTwoDim(charSelected));
  }

  //password created an returned as a string
  return pwActual.join("");
}

// Write password to the #password input
function writePassword() {
  try {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  //error handling
  catch {
    switch (errCode) {

      case 1:
        console.log("Invalid answer to yes or no");
        break;

      case 2:
        console.log("No chartypes selected");
        break;

      case 3:
        console.log("PW Length was not a number.");
        break;

      case 4:
        console.log("Password length cannot be less than 8.");
        break;

      case 5:
        console.log("Password length cannot be greater than 128.");
        break;
    }
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);