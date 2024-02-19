//initializing constants;
const inputField = document.getElementById("text-input");
const buttonElement = document.getElementById("check-btn");
const displayOutPut = document.getElementById("result");
const paragraphOutPut = document.createElement("p");



const palindromeChecker = (inputValue) => {

   //turn value to lower case
       inputValue = inputField.value;
       let lowerCaseValue = inputValue.toLowerCase()
   //remove all specialcharcters and white spaces
       let regex = /[0-9a-z]/g;
       let alphaNumericValue = lowerCaseValue.match(regex);
       let reverdArray = alphaNumericValue.reverse()
       let joinToStribgAgain = reverdArray.join("")
       console.log(joinToStribgAgain)
       let valueForCamperison = alphaNumericValue.reverse().join("");
       console.log(valueForCamperison)
      if(joinToStribgAgain === valueForCamperison ) {
         displayOutPut.innerText = `${inputValue} is a Palindrome`
      }
       else {
         displayOutPut.innerText = `${inputValue} is not a Palindrome`
       }


}

const checkButtonFuntion = () => {
     if(inputField.value === "") {
        alert("Please input a value");
     }
     palindromeChecker();
    
}


buttonElement.addEventListener("click", checkButtonFuntion);
