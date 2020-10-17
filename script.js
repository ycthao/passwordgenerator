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
  while(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    alert("Try again, choose length between 8 and 128 characters.");
    passwordLength = prompt("Please choose the length of password between 8 to 128 characthers: ");
  }

  let passwordchar = "";


  let randomPassword = "";
  let setPassArr = "";

  // prompt to ask for lowercase
  let lowercase = confirm("Would you like your password to include lowercase?");
  if (lowercase) {
    setPassArr = setPassArr + setPassArr.concat(lowercaseArr);
    alert("You choose lowercase.");
  } else {
    alert("You didn't choose lowercae.")
  }

  // prompt to ask for uppercase
  let uppercase = confirm("Would you like your password to include uppercase?");
  if (uppercase) {
    setPassArr = setPassArr + setPassArr.concat(uppercaseArr);
    alert("You choose uppercase.");
  } else {
    alert("You didn't choose uppercase.")
  }

  // prompt to ask for numeric
  let numeric = confirm("Would you like your password to include numbers?")
  if (numeric) {
    setPassArr = setPassArr + setPassArr.concat(numbericArr);
    alert("You choose number.");
  } else {
    alert("You didn't choose number.")
  }

  // prompt to ask for special characters
  let specialCharacters = confirm("Would you like your password to include special characters?")
  if (specialCharacters) {
    setPassArr = setPassArr + setPassArr.concat(specialCharactersArr);
    alert("You choose special characters.");
  } else {
    alert("You didn't choose special characters.")
  }

  // Validation if user doesn't pick a criteria
  while(!lowercase) {
    alert("Try again, choose at least one criteria.");

    // prompt to ask for lowercase
    let lowercase = confirm("Would you like your password to include lowercase?");
    if (lowercase) {
      setPassArr = setPassArr + setPassArr.concat(lowercaseArr);
      alert("You choose lowercase.");
    } else {
      alert("You didn't choose lowercae.")
    }

    // prompt to ask for uppercase
    let uppercase = confirm("Would you like your password to include uppercase?");
    if (uppercase) {
      setPassArr = setPassArr + setPassArr.concat(uppercaseArr);
      alert("You choose uppercase.");
    } else {
      alert("You didn't choose uppercase.")
    }

    // prompt to ask for numeric
    let numeric = confirm("Would you like your password to include numbers?")
    if (numeric) {
      setPassArr = setPassArr + setPassArr.concat(numbericArr);
      alert("You choose number.");
    } else {
      alert("You didn't choose number.")
    }

    // prompt to ask for special characters
    let specialCharacters = confirm("Would you like your password to include special characters?")
    if (specialCharacters) {
      setPassArr = setPassArr + setPassArr.concat(specialCharactersArr);
      alert("You choose special characters.");
    } else {
      alert("You didn't choose special characters.")
    }

    // To break out of the loop if at least one of the criteria is true
    if (lowercase || uppercase || numeric || specialCharacters) {
      break;
    }

  }





  




  for (let i = 0; i < passwordLength; i++) {
    passwordchar = passwordchar + setPassArr[Math.floor(Math.random() * setPassArr.length)];
  }


  randomPassword = passwordchar;  



return randomPassword;
}

