const apiUrl = "https://api.adviceslip.com/advice";
const quoteRandomBtn = document.querySelector(".dice");

quoteRandomBtn.addEventListener("click", () => {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.slip.advice);
      console.log(data.slip.id);
      randomAdvice(data);
    })
    .catch((error) => {
      console.error(error);
    });
});

function randomAdvice(data) {
  const adviceNumber = document.querySelector(".advice-number");
  const quote = document.querySelector(".quote");

  adviceNumber.textContent = data.slip.id;
  quote.textContent = data.slip.advice;
}
