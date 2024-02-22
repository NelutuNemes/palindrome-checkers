let result = document.getElementById("result");
let userInput = document.getElementById("user-input");
result.textContent = ".......";
let testButton = document.getElementById("test-button");
let resetButton = document.getElementById("reset-button");

testButton.addEventListener("click", checkPalindrome);
resetButton.addEventListener("click", resetApp);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    checkPalindrome();
  }
});
let userChoice;
let expression = "";
let reversedExpression = "";

function checkPalindrome() {
  userChoice = userInput.value;

  if (userInput.value.trim() === "") {
    result.innerText = "An expresion is required !";
    setTimeout(() => {
      result.innerText = "";
    }, 1500);
    return;
  }

  expression = userChoice.toString().toLowerCase();
  let conversionCheck = typeof expression;
  console.log( conversionCheck );
  
  reversedExpression = expression.split("").reverse().join("");
  console.log(`Expression is : (${expression}),`);
  console.log(`reversedExpression is : (${reversedExpression}),`);

  if (expression !== reversedExpression) {
    console.log(`Expression Is not a palindrome`);
    return (result.innerText = "Expression Is not a palindrome");
  }
  console.log(`Expression Is a palindrome`);
  return (result.innerText = "Expression Is a palindrome");
}


function resetApp() {
  result.innerText = "";
  userInput.value = "";
}

console.log("..............................");
