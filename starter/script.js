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
var specialChar = "";
var numericNumber = "";

function getPasswordOptions() {
  var userInput = "";

  var passwordLength = prompt(
    "How many characters do you want in your password? (Please choose between 8 - 128 characters)"
  );
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Your character length has to be between 8-128. Please try again!");
    return false;
  }
  var lowerCase = confirm(
    "Would you like to include lowercase characters within your password?"
  );
  if (lowerCase) {
    userInput += lowerCasedCharacters.join("");
  }
  var upperCase = confirm(
    "Would you like to include UPPERCASE characters within your password?"
  );
  if (upperCase) {
    userInput += upperCasedCharacters.join("");
  }
  var specialChar = confirm(
    "Would you like to include special characters within your password?"
  );
  if (specialChar) {
    userInput += specialCharacters.join("");
  }
  var numericNumber = confirm(
    "Would you like to include numbers within your password?"
  );
  if (numericNumber) {
    userInput += numericCharacters.join("");
  }
  return userInput;
}

// Function for getting a random element from an array

function getRandom(arr) {
  for (var i = 0; i < arr.length; i++) {
    var getPassword = Math.floor(Math.random() * (max - min + 1)) + min;
    return arr[getPassword];
  }
}

// getRandom(specialCharacters);
// getRandom(numericCharacters);
// getRandom(lowerCasedCharacters);
// getRandom(upperCasedCharacters);

// Function to generate password with user input
function generatePassword() {
  var password = getPasswordOptions();
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
