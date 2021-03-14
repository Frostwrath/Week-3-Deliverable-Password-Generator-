// Assignment Code
var generateBtn = document.querySelector("#generate");
var password;
var passwordContents;
var wantLength;
var pwArray = []

function generatePassword() {
  var allchars = confirm("Do you want your password to have numbers, letters and symbols? (OK is Yes, Cancel is No, and will lead you to next prompt.)")
  if (allchars == true) {
    passwordContents = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
    wantLength = Number(prompt("How long do you want your password to be?"))
    for (let index = 0; index < wantLength; index++) {
      const element = wantLength;
      pwArray.push(passwordContents[Math.floor(Math.random()*91)])
    }
    password = String(pwArray.join(''))
    pwArray=[]
    return (password)
  }
  else {
    var noSymbols = confirm("Do you want your password to be have numbers and letters, but no symbols?")
    if (noSymbols==true) {
      passwordContents = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
      wantLength = Number(prompt("How long do you want your password to be?"))
      for (let index = 0; index < wantLength; index++) {
        const element = wantLength;
        pwArray.push(passwordContents[Math.floor(Math.random()*62)])
      }
      password = String(pwArray.join(''))
      pwArray = []
      return (password)
    } 
    else {
      var noSymbols = confirm("Do you want your password to be have numbers and lowercase, but no symbols or uppercase?")
      if (noSymbols==true) {
        passwordContents = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
        wantLength = Number(prompt("How long do you want your password to be?"))
        for (let index = 0; index < wantLength; index++) {
          const element = wantLength;
          pwArray.push(passwordContents[Math.floor(Math.random()*36)])
        }
        password = String(pwArray.join(''))
        pwArray = []
        return (password)
      } 
      else {
        var noSymbols = confirm("Do you want your password to be have numbers and uppercase, but no symbols or lowercase?")
        if (noSymbols==true) {
          passwordContents = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
          wantLength = Number(prompt("How long do you want your password to be?"))
          for (let index = 0; index < wantLength; index++) {
            const element = wantLength;
            pwArray.push(passwordContents[Math.floor(Math.random()*36)])
          }
          password = String(pwArray.join(''))
          pwArray = []
          return (password)
        } 
        else {
          var noSymbols = confirm("Do you want your password to be have all letters, but no symbols or numbers?")
          if (noSymbols==true) {
            passwordContents = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
            wantLength = Number(prompt("How long do you want your password to be?"))
            for (let index = 0; index < wantLength; index++) {
              const element = wantLength;
              pwArray.push(passwordContents[Math.floor(Math.random()*52)])
            }
            password = String(pwArray.join(''))
            pwArray = []
            return (password)
          } 
          else {
            var noSymbols = confirm("Do you want your password to be have only lowercase?")
            if (noSymbols==true) {
              passwordContents = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
              wantLength = Number(prompt("How long do you want your password to be?"))
              for (let index = 0; index < wantLength; index++) {
                const element = wantLength;
                pwArray.push(passwordContents[Math.floor(Math.random()*26)])
              }
              password = String(pwArray.join(''))
              pwArray = []
              return (password)
            } 
            else {
              var noSymbols = confirm("Do you want your password to be have only uppercase?")
              if (noSymbols==true) {
                passwordContents = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
                wantLength = Number(prompt("How long do you want your password to be?"))
                for (let index = 0; index < wantLength; index++) {
                  const element = wantLength;
                  pwArray.push(passwordContents[Math.floor(Math.random()*26)])
                }
                password = String(pwArray.join(''))
                pwArray = []
                return (password)
              } 
              else{
                var allchars = confirm("Do you want your password to have only symbols?")
                if (allchars == true) {
                  passwordContents = ["!","#","$","%","&","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","]","^","_","`","{","|","}","~"]
                  wantLength = Number(prompt("How long do you want your password to be?"))
                  for (let index = 0; index < wantLength; index++) {
                    const element = wantLength;
                    pwArray.push(passwordContents[Math.floor(Math.random()*29)])
                  }
                password = String(pwArray.join(''))
                pwArray=[]
                return (password)
                } 
                else {
                  alert("Your password will consist of only numbers.")
                  wantLength = Number(prompt("How long do you want your password to be?"))
                  for (let index = 0; index < wantLength; index++) {
                    const element = wantLength;
                    pwArray.push(Math.floor(Math.random()*10))
                    }
                  password = String(pwArray.join(''))
                  pwArray = []
                  return (password)
                }
              }
            }
          }
        }
      }  
    }
  }
}
// Write password to the #password input
function writePassword() {
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
