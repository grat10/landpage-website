const buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    console.log(`Clicked: ${button.textContent}`);
  });
});

console.log("Nova landing page loaded successfully.");