let result = document.getElementById("result");
let userInput = document.getElementById("user-input");
result.innerHTML = ".......";
let testButton = document.getElementById("test-button");
let resetButton = document.getElementById("reset-button");

testButton.addEventListener("click", palindromeChecker);
resetButton.addEventListener("click", resetApp);

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    palindromeChecker();
  }
});

let elementToTest;
let isPalindrome = true;

function palindromeChecker() {
  if (userInput.value.trim() === "") {
    result.innerText = "An expression is required!";
    setTimeout(() => {
      result.innerText = "";
    }, 1500);
    return;
  }

  elementToTest = userInput.value.toLowerCase().toString().split("");
  let formattedExpression = "";

  for (let i = 0; i < elementToTest.length; i++) {
    let leftItem = elementToTest[i];
    let rightItem = elementToTest[elementToTest.length - i - 1];

    console.log(`Current iteration number is: ${i}`);
    console.log(`Checked element from left side is : ${leftItem}`);
    console.log(`Checked element from right side is : ${rightItem}`);

    if (leftItem !== rightItem) {
      console.log(`Warning  : ${leftItem} !=  ${rightItem}`);
      isPalindrome = false;
    }

    formattedExpression += `<span class="${
      leftItem !== rightItem ? "red-mark" : "green-mark"
    }">${elementToTest[i]}</span>`;
  }

  if (isPalindrome) {
    console.log(`Expression: ${elementToTest.join("")}. IS a palindrome`);
    result.innerHTML = `Expression: '${formattedExpression}'   IS a Palindrome!`;
  } else {
    console.log(`Expression: ${elementToTest.join("")}. IS NOT a palindrome`);
    result.innerHTML = `Expression:  '${formattedExpression}',   IS NOT a Palindrome!`;
  }
}

function resetApp() {
  isPalindrome = true;
  result.innerHTML = ".......";
  userInput.value = "";
  result.classList.remove("red-mark", "green-mark");
}

console.log("=====================================");
