// Assignment Code
var generateBtn = document.querySelector("#generate");

//Generate password function
function generatePassword(){

  //password length entry and validation
  var pwLength = prompt("Please enter the length of the password.", "Enter a number between 8 and 128.");
  if(isNaN(pwLength) || pwLength===null){
    return alert("Password length must be a number.")
  }else if(pwLength<8){
    return alert("Password length cannot be less than 8.");
  }else if(pwLength>128){
    return alert("Password length cannot be greater than 128.");
  }

  var pwLowCase = prompt("Do you want to include lowercase characters?", "Yes or No");
  var pwUpCase = prompt("Do you want to include uppercase characters?", "Yes or No");
  var pwNum = prompt("Do you want to include numeric characters?", "Yes or No");
  var pwSpChar = prompt("Do you want to include special characters?", "Yes or No");
  
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
