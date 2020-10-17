// set array for lowercase
let lowercaseArr = "abcdefghijklmnopqrstuvwxyz";
// set array for uppercase
let uppercaseArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// set array for uppercase
let numbericArr = "0123456789";
// set array for special characters
let specialCharactersArr = "\u0020\u0021\u0022\u0023\u0024\u0025\u0026\u0027\u0028\u0029\u002A\u002B\u002C\u002D\u002E\u002F\u003A\u003B\u003C\u003D\u003E\u003F\u0040\u005B\u005C\u005D\u005E\u005F\u0060\u007B\u007C\u007D\u007E";


// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// Adding generatePassword
function generatePassword(){

  // prompt for password length 8 to 128 characters
let passwordLength = prompt("Please choose the length of password between 8 to 128 characthers: ");

// Validation if user doesn't pick in the right range
while(passwordLength < 8 || passwordLength > 128) {
  alert("Try again");
  passwordLength = prompt("Please choose the length of password between 8 to 128 characthers: ");
}

alert(passwordLength);

let randomPassword = passwordLength;
return randomPassword;
}


/*
if (passwordLength >= 8 && passwordLength <= 128) {
  alert("Your password length is " + passwordLength);

  // prompt to ask for lowercase
  let lowercase = confirm("Would you like your password to include lowercase?");

  // prompt to ask for uppercase
  let uppercase = confirm("Would you like your password to include uppercase?");

  // prompt to ask for numeric
  let numeric = confirm("Would you like your password to include numbers?")

  // prompt to ask for special characters
  let specialCharacters = confirm("Would you like your password to include special characters?")



  // Switch statements







  // All prompt choosen
  if (lowercase === true && uppercase === true && numeric === true && specialCharacters === true) {
    alert("You chose lowercase , uppercase, numbers, and special charcaters");

    // lowercase, number, special characters
  } else if (lowercase === true && uppercase !== true && numeric === true && specialCharacters === true) {
      alert("You chose lowercase, numbers and special characters");

    // lowercase, uppercase, special characters
  } else if (lowercase === true && uppercase === true && numeric !== true && specialCharacters === true) {
    alert("You chose lowercase, uppercase and special characters");    

    // lowercase, uppercase, numbers
  } else if (lowercase === true && uppercase === true && numeric === true && specialCharacters !== true) {
    alert("You chose lowercase, uppercase and numbers");   

  } else {
      alert("You chose none");
  }

  



} 

*/