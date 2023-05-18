const form = document.querySelector("form");
let userInput = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  userInput = e.target[0].value;
  let url = `https://www.google.com/search?q= + ${encodeURIComponent(
    userInput
  )}`;
  window.location.href = url;
});
