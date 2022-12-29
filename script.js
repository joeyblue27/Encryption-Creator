
// Character Array list 

var lowercase = ['a','b','c','d', 'e', 'f', 'g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
var uppercase=  [ 'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',];
var specials = ['@','%','+','\\','/', "'",'!','#','$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.',];
var numbers= ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9',];

// Prompt window with character requirements 

function pwdPrompt() {
  var char = parseInt(
    prompt('how many character keys?'));

  if (Number.isNaN(char)) {
    alert('number of length does not match criteria');
    return null;
  }

  if (char < 8) {
    alert('8 characters atleast');
    return null;
  }
 
  if (char > 128)
  {alert('password should be less than 128 keys')
return null;
}

// Prompt window password confirmations 

var uppercaseCon = confirm('confirm the uppercase');
var lowercaseCon = confirm('confirm the lowercase');
var numbersCon = confirm('confirm the number keys');
var specialsCon = confirm('confirm the special keys');

// Conditional statement declaring confirmation 

if 
(
uppercaseCon !== true && lowercaseCon !== true &&
numbersCon !== true && specialsCon !== true
){alert ('please select one of the types')}


// User input property length Array

var userinput = 
{
  length: char, 
  uppercaseCon: uppercaseCon,
  lowercaseCon: lowercaseCon,
  specialsCon: specialsCon,
  numbersCon: numbersCon,
}
return userinput;
}

// Math randomizer 

function getRandom(arr) {
  var calc = Math.floor(Math.random() * arr.length);
  var random = arr[calc];

  return random;
}


// adds to the array and returns the new length of the array

function generator() {

  var types = pwdPrompt();
  var generate = [];
  var keyTypes = [];
  var allKeys = [];

  if (!types) return null;

  if (types.specialsCon) {
    keyTypes = keyTypes.concat(specials);
    allKeys.push(getRandom(specials));
  }

  if (types.numbersCon) {
    keyTypes = keyTypes.concat(numbers);
    allKeys.push(getRandom(numbers));
  }

  if (types.uppercaseCon) {
    keyTypes = keyTypes.concat(uppercase);
    allKeys.push(getRandom(uppercase));
  }

  if (types.lowercaseCon) {
    keyTypes = keyTypes.concat(lowercase);
    allKeys.push(getRandom(lowercase));
  }

  for (var i = 0; i < types.length; i++) {
    var keyType = getRandom(keyTypes);
    generate.push(keyType);
  }

  for (var i = 0; i < allKeys.length; i++) {
      generate[i] = allKeys[i];
    }

return generate.join('');
  }

  const Button = document.querySelector('#generate');






// Write password to the #password input
function writePassword() {
  var password = generator();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
Button.addEventListener("click", writePassword);
