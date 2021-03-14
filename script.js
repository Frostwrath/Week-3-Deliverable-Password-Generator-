// Assignment Code
var generateBtn = document.querySelector("#generate");
var password;
var passwordContents;
var wantLength;
var pwArray = []

//Start the password query and generation
function generatePassword() {
  //Generate a password with all types of characters
  var passChars = confirm("Do you want your password to have numbers, letters and symbols? (OK is Yes, Cancel is No, and will lead you to next prompt.)")
  if (passChars == true) {
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
    //Generate a password with numbers and all cases of letters
    var passChars = confirm("Do you want your password to be have numbers and letters, but no symbols?")
    if (PassChars==true) {
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
      //Generate a password with numbers and lowercase
      var passChars = confirm("Do you want your password to be have numbers and lowercase, but no symbols or uppercase?")
      if (passChars==true) {
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
        //Generate a password with numbers and uppercase
        var passChars = confirm("Do you want your password to be have numbers and uppercase, but no symbols or lowercase?")
        if (passChars==true) {
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
          //Generate a password with all cases of letters
          var passChars = confirm("Do you want your password to be have all letters, but no symbols or numbers?")
          if (passChars==true) {
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
            //Generate a password with lowercase only
            var PassChars = confirm("Do you want your password to be have only lowercase?")
            if (PassChars==true) {
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
              //Generate a password with uppercase only
              var PassChars = confirm("Do you want your password to be have only uppercase?")
              if (PassChars==true) {
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
                //Generate a password with symbols only
                var PassChars = confirm("Do you want your password to have only symbols?")
                if (passChars == true) {
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
                  //Generate a password with numbers only
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
