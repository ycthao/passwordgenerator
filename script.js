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

  let charReqLength = 0;
  let charReq = "";
  let passwordchar = "";
  let randomPassword = "";
  let setPassArr = "";

  // prompt to ask for lowercase
  let lowercase = confirm("Would you like your password to include lowercase?");
  if (lowercase) {
    setPassArr = setPassArr.concat(lowercaseArr);
    // lowercase is selected
    let lowerReq = lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
    charReq = charReq.concat(lowerReq);
    charReqLength++;
    alert("You choose lowercase.");
  } else {
    alert("You didn't choose lowercae.")
  }

  // prompt to ask for uppercase
  let uppercase = confirm("Would you like your password to include uppercase?");
  if (uppercase) {
    setPassArr = setPassArr.concat(uppercaseArr);
    // uppercase is selected
    let upperReq = uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
    charReq = charReq.concat(upperReq);
    charReqLength++;
    alert("You choose uppercase.");
  } else {
    alert("You didn't choose uppercase.")
  }

  // prompt to ask for numeric
  let numeric = confirm("Would you like your password to include numbers?")
  if (numeric) {
    setPassArr = setPassArr.concat(numbericArr);
    // number is selected
    let numbReq = numbericArr[Math.floor(Math.random() * numbericArr.length)];
    charReq = charReq.concat(numbReq);
    charReqLength++;
    alert("You choose number.");
  } else {
    alert("You didn't choose number.")
  }

  // prompt to ask for special characters
  let specialCharacters = confirm("Would you like your password to include special characters?")
  if (specialCharacters) {
    setPassArr = setPassArr.concat(specialCharactersArr);
    // special character is selected
    let specialCharReq = specialCharactersArr[Math.floor(Math.random() * specialCharactersArr.length)];
    charReq = charReq.concat(specialCharReq);
    charReqLength++;
    alert("You choose special characters.");
  } else {
    alert("You didn't choose special characters.")
  }

  // Validation if user doesn't pick a criteria
  while(!lowercase && !uppercase && !numeric && !specialCharacters) {
    alert("Try again, choose at least one criteria.");

  // prompt to ask for lowercase
  let lowercase = confirm("Would you like your password to include lowercase?");
  if (lowercase) {
    setPassArr = setPassArr.concat(lowercaseArr);
    // lowercase is selected
    let lowerReq = lowercaseArr[Math.floor(Math.random() * lowercaseArr.length)];
    charReq = charReq.concat(lowerReq);
    charReqLength++;
    alert("You choose lowercase.");
  } else {
    alert("You didn't choose lowercae.")
  }

  // prompt to ask for uppercase
  let uppercase = confirm("Would you like your password to include uppercase?");
  if (uppercase) {
    setPassArr = setPassArr.concat(uppercaseArr);
    // uppercase is selected
    let upperReq = uppercaseArr[Math.floor(Math.random() * uppercaseArr.length)];
    charReq = charReq.concat(upperReq);
    charReqLength++;
    alert("You choose uppercase.");
  } else {
    alert("You didn't choose uppercase.")
  }

  // prompt to ask for numeric
  let numeric = confirm("Would you like your password to include numbers?")
  if (numeric) {
    setPassArr = setPassArr.concat(numbericArr);
    // number is selected
    let numbReq = numbericArr[Math.floor(Math.random() * numbericArr.length)];
    charReq = charReq.concat(numbReq);
    charReqLength++;
    alert("You choose number.");
  } else {
    alert("You didn't choose number.")
  }

  // prompt to ask for special characters
  let specialCharacters = confirm("Would you like your password to include special characters?")
  if (specialCharacters) {
    setPassArr = setPassArr.concat(specialCharactersArr);
    // special character is selected
    let specialCharReq = specialCharactersArr[Math.floor(Math.random() * specialCharactersArr.length)];
    charReq = charReq.concat(specialCharReq);
    charReqLength++;
    alert("You choose special characters.");
  } else {
    alert("You didn't choose special characters.")
  }

    // To break out of the loop if at least one of the criteria is true
    if (lowercase || uppercase || numeric || specialCharacters) {
      break;
    }

  }

  // generate password minus 1 for any criteria selected
  for (let i = 0; i < passwordLength - charReqLength; i++) {
    passwordchar = passwordchar + setPassArr[Math.floor(Math.random() * setPassArr.length)];
  }

  // Adding the criteria characters to the main generate password
  let fullPass = passwordchar + charReq;

  // Shuffling the fullPass
  let shuffle = fullPass.split('').sort(function(){return 0.5-Math.random()}).join('');

  // making randomPassword to equal the shuffle password
  randomPassword = shuffle;  


// recall randomPassword so it could be display into the password field
return randomPassword;
}

