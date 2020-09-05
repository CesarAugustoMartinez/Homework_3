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
  var newPassword = "Prueba";
  var passLength = false;
  var passCharacter = false;
  while (passLength === false) {
    passLength = lengthValidation();
  }
  while (passCharacter === false) {
    passCharacter = charactersValidation();
  }
  console.log(passLength);
  console.log(passCharacter);
}

function lengthValidation () { // To validate the length of the password
  var lengthPassword = prompt("Please enter the length for your password", "Choose a lenth of at least 8 characters and no more than 128 characters"); 
  var intLengthPassword = parseInt(lengthPassword);
  if ( lengthPassword === null) {
    return true;
  }
  if (isNaN(intLengthPassword) || intLengthPassword < 8 || intLengthPassword > 128 ){
    return false;
  }
  else {
    return intLengthPassword;
  }
}

function charactersValidation () { // To validate character types
  var characterTypes = prompt("For character types to include in the password choose: \n lowercase - l, uppercase - u, numeric - n, and/or special characters - s", "example: l,u,n,s");
  var pattern = /^[lLuUnNsS,]+$/;
  if ( characterTypes === null ) {
    return true;
  }  
  if (pattern.test(characterTypes) === false || characterTypes.length > 7){
    alert("Incorrect pattern! \n Choose at least one character and no more than 4: \n lowercase - l, uppercase - u, numeric - n, and/or special characters - s. Example: l,u,n,s");
    return false;
  }
  else {
    var lowerCaseCharacters = characterTypes.toLocaleLowerCase();
    var finalCharacters = getCharacterType(lowerCaseCharacters.split(""));
    return finalCharacters;
  }
  
}

function getCharacterType(array){ // Creating an array without duplicate values
  var finalArray = [];
  for(i=0; i < array.length; i++){
    if((finalArray.indexOf(array[i]) === -1) && array[i] !== ",") {
       finalArray.push(array[i]);
    }
  }
  return finalArray;
}
  



 

