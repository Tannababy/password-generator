// Array of special characters to be included in password
var specialCharacters = [
  "@",
  "%",
  "+",
  "\\",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Array of numeric characters to be included in password
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Function to prompt user for password options
function getPasswordOptions() {
  //prompt password length
  let passwordLength = prompt(
    "Please input the length of password you require below. (At least 8 characters but no more than 128.)"
  );
  //prompt user for a number
  //in which case is the answer invalid - if input is not a number, if input is less than 8 || more than 128
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    //if invalid alert user
    alert("Password entered is invalid.");
    //prompt again
    passwordLength = prompt(
      "Please re-enter password length. (Number must be from 8-128)"
    );

    //Confirm Character types
    //Lowercase
    let lowerCase = confirm(`Include lowercase letter?`);
    // Uppercase
    let upperCase = confirm(`Include Uppercase letter?`);
    // Numeric
    let numeric = confirm(`Include number?`);
    //Special characters ($@%&*, etc)
    let specialChar = confirm(`Include special character ($@%&*, etc)?`);

    //need true for at least one of them
    //invalid confirm: if all 4 = false
    while (!lowerCase && !upperCase && !numeric && !specialChar) {
      alert(
        "Atleast one of the characters must be: lowercase, uppercase, special character ($@%&*, etc) or number"
      );
      lowerCase = confirm(`Include lowercase letter?`);
      // Uppercase
      upperCase = confirm(`Include Uppercase letter?`);
      // Numeric
      numeric = confirm(`Include number?`);
      //Special characters ($@%&*, etc)
      specialChar = confirm(`Include special character ($@%&*, etc)?`);
    }

    var returnValue = {
      length: Number(passwordLength),
      lowerCase: lowerCase,
      numeric: numeric,
      upperCase: upperCase,
      specialChar: specialChar,
    };

    //if lowercase, merge lowecaseArry to allCharARR
    //if uppercase, merge uppercaseArry to allCharARR
    //same for the other 2
  }
  return returnValue;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  //get randomValue
  return arr[randomIndex];
  //add that value to password
}

// Function to generate password with user input
//with options need to create the string
//discern what arr will be used
//if lowercase can generate char w/in condition
function generatePassword() {
  //run random
  var passWord = "";
  var options = getPasswordOptions();
  var allCharARR = [];

  if (options.lowerCase) {
    allCharARR = allCharARR.concat(lowerCasedCharacters);
  }
  if (options.numeric) {
    allCharARR = allCharARR.concat(numericCharacters);
  }
  if (options.upperCase) {
    allCharARR = allCharARR.concat(upperCasedCharacters);
  }
  if (options.specialChar) {
    allCharARR = allCharARR.concat(specialCharacters);
  }

  if (allCharARR.length === 0) {
    alert("Please select at least one character set");
    return "";
  }
  for (let i = 0; i < options.length; i++) {
    passWord += getRandom(allCharARR);
  }
  return passWord;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//create a random password from the input they give
//take random elements from the 4 arr given, if they fall under the elements they want
