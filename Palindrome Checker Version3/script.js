let result = document.getElementById("result");
let userInput = document.getElementById("user-input");
result.textContent = ".......";
let testButton = document.getElementById("test-button");
let resetButton = document.getElementById("reset-button");

testButton.addEventListener("click", palindromeChecker);
resetButton.addEventListener("click", resetApp);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    palindromeChecker();
  }
});

let expressionToTest;

function palindromeChecker() {
  if (userInput.value.trim() === "") {
    result.innerText = "An expresion is required !";
    setTimeout(() => {
      result.textContent = ".......";
    }, 1500);
    return;
  }

  expressionToTest = userInput.value.toLowerCase().trim().toString().split("");
  console.log(expressionToTest);
  let conversionCheck = typeof expressionToTest;
  console.log(conversionCheck);

  while (expressionToTest.length > 1) {
    leftItem = expressionToTest.shift();
    rightItem = expressionToTest.pop();

    console.log(`Checked element from left side is : ${leftItem}`);
    console.log(`Checked element from right side is : ${rightItem}`);
    console.log(`${leftItem}  =  ${rightItem}, checks continue`);

    if (leftItem !== rightItem) {
      console.log(`Warning  : ${leftItem} !=  ${rightItem}, checks stopped`);
      console.log(`Expression: ${`'${userInput.value}'`}, Is NOT a palindrome`);

      return (result.innerText = "Expression checked, IS NOT a palindrome");
    }
  }
  console.log(`Expression: ${`'${userInput.value}'`}. IS a palindrome`);

  return (result.innerText = "Expression checked, IS a palindrome");
}

function resetApp () {
  console.log(`App was reset by user action !`);
  result.innerText = "";
  userInput.value = "";
}

console.log("=====================================");
