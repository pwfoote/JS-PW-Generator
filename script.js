// Assignment code here
window.alert("Please choose your password criteria.")


//Random LowerCase Letter
function getRandomLower () {return String.fromCharCode(Math.floor(Math.random() * 26) +97)}

//Random UpperCase Letter
function getRandomUpper () {return String.fromCharCode(Math.floor(Math.random() * 26) + 64)}

//Random Number
function getRandomNumber () {return String.fromCharCode(Math.floor(Math.random() * 10) + 48)}

//Random symbol.
function getRandomSymbol () {return String.fromCharCode(Math.floor(Math.random() * 10) + 33)}


var passwordAmount = prompt("Character Amount: choose between 8-128 characters.")
var randomLowerChar = confirm("do you want lowercase characters?")
var randomUpperChar = confirm("do you want uppercase characters?")
var randomNumberChar = confirm("do you want number characters?")
var randomSymbolChar = confirm("do you want symbol characters?")



while (passwordAmount < 8 || passwordAmount > 128){
  alert("Password Word Must Be Betwen 8-128 Characters");
  passwordAmount = prompt("Character Amount: choose between 18-124 characters.");
}
// debugger;
let str = ""

while(str.length < passwordAmount){
  
  if(randomLowerChar){
    str += getRandomLower()
  }
  if(passwordAmount <= str.length) {break;}

  if(randomUpperChar){
    str += getRandomUpper()
  }
  if(passwordAmount <= str.length) {break;}
  
  if(randomNumberChar){
    str += getRandomNumber()
  }
  if(passwordAmount <= str.length) {break;}
  
  if(randomSymbolChar){
    str += getRandomSymbol()
  }
  if(passwordAmount <= str.length) {break;}
 
};

//console.log(str.length);

//Generate Password
function generatePassword(){
  return str
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
