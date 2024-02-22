let result = document.getElementById("result");
let userInput = document.getElementById("user-input");
result.textContent = ".......";
let testButton = document.getElementById( "test-button" );
let resetButton = document.getElementById("reset-button");


testButton.addEventListener( "click", palindromeChecker );
resetButton.addEventListener("click", resetApp);


document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    palindromeChecker();
  }
});

let elementToTest;

function palindromeChecker(elementToTest) {
  if (userInput.value.trim() === "") {
    result.innerText = "An expresion is required !";
    setTimeout(() => {
      result.innerText = "";
    }, 1500);
    return;
  }

  elementToTest = userInput.value.toLowerCase();

  for (let i = 0; i < elementToTest.length / 2; i++) {
    console.log(`Current iteration number is: ${i}`);
    console.log(`Checked element from left side is : ${elementToTest[i]}`);
    console.log(
      `Checked element from right side is : ${
        elementToTest[elementToTest.length - i - 1]
      }`
    );
    console.log(
      `${elementToTest[i]}  =  ${
        elementToTest[elementToTest.length - i - 1]
      }, checks continue`
    );
    if (elementToTest[i] !== elementToTest[elementToTest.length - i - 1]) {
      console.log(
        `Warning  : ${elementToTest[i]} !=  ${
          elementToTest[elementToTest.length - i - 1]
        }, checks stopped`
      );
      console.log(`Expression: ${elementToTest}, Is NOT a palindrome`);
      return (result.innerText = "Expression checked, IS NOT a palindrome");
    }
  }
  console.log(`Expression: ${elementToTest}. IS a palindrome`);
  return (result.innerText = "Expression checked, IS a palindrome");
}

function resetApp () {
  result.innerText = "";
  userInput.value = "";
}

console.log("=====================================");
