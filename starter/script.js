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
var passwordLength = "";
var lowerCase = "";
var upperCase = "";
var numericNumber = "";
var specialChar = "";

function getPasswordOptions() {
  var passwordLength = prompt(
    "How many characters do you want in your password? (Please choose between 8 - 128 characters)"
  );
  var lowerCasedCharacters = confirm(
    "Would you like to include lowercase characters within your password?"
  );
  var upperCasedCharacters = confirm(
    "Would you like to include UPPERCASE characters within your password?"
  );
  var specialCharacters = confirm(
    "Would you like to include special characters within your password?"
  );
}

var sumArray = numericCharacters
  .concat(lowerCasedCharacters)
  .concat(upperCasedCharacters)
  .concat(specialCharacters);

// Function for getting a random element from an array

function getRandom(min, max) {
  for (var i = 0; i < passwordLength.length; i++) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}

// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions();
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
