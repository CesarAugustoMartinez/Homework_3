// Assignment Code
var generateBtn = document.querySelector("#generate");
// Arrays of special, numeric, lowercase, and upercase characters,  to be included in password
var specialCharacters = ['@','%','+','\\','/',"'",'!','#','$','^','?',':',',',')','(','}','{',']','[','~','-','_','.'];
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var lowerCasedCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var upperCasedCharacters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']; 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
var passLength = lengthvalidation();



}

function lengthvalidation () {
  var lengthPassword = prompt("Please enter the length for your password", "Choose a lenth of at least 8 characters and no more than 128 characters"); 
  if ( lengthPassword === null ) {
    return;
  }
  if (lengthPassword > 7 && lengthPassword < 129) {
    return lengthPassword;
  }
  else {
    alert("Enter a number between 8 to 128");
    lengthvalidation();
  }


}

