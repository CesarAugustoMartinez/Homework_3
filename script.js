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
  var passLength = lengthValidation();

console.log(passLength);

if (passLength === true){
  //var charactersUser = charactersValidation();
  //console.log(charactersUser); 
  return (newPassword); 
  }
else {
  alert("Enter a number between 8 to 128");
  return ("Your Secure Password");
}


}

function lengthValidation () { // To validate the length of the password
  var lengthPassword = prompt("Please enter the length for your password", "Choose a lenth of at least 8 characters and no more than 128 characters"); 
  if ( lengthPassword === null ) {
    return;
  }
  if (lengthPassword > 7 && lengthPassword < 129) {
    lengthPassword = 0;
    return true;
  }
  else {
    return false;
  }
}
// function charactersValidation () {
//   var typeoptions = ["l","u","n","s"];
//   var types = prompt("For character types to include in the password choose: \n lowercase - l, uppercase - u, numeric - n, and/or special characters - s", "example: l,u,n,s")
//   if ( types === null ) {
//     return;
//   }
//   if (types.length !== 0) {
//     if (types.length === 1 && (types === "l" || types === "u" || types === "n" || types === "s")){
//       return types.split("");
//     }
//     else
//     {
//       if ( types.indexOf(",") > 0 ) {
//         types = types.split(",");
//         if (types.length > 0 && types.length < 5) {
//           return types
//         }
//         else {
//           alert("Choose at least one character and no more than 4: \n lowercase - l, uppercase - u, numeric - n, and/or special characters - s. Example: l,u,n,s");
//           charactersValidation();
//         }
//       }
//     }
//   }
//   else {
//           alert("Choose at least one character and no more than 4: \n lowercase - l, uppercase - u, numeric - n, and/or special characters - s. Example: l,u,n,s");
//           charactersValidation();
//   }

// }

 

