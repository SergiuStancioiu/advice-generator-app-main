document.addEventListener("DOMContentLoaded", () => {
  const apiUrl = "https://api.adviceslip.com/advice";
  const quoteRandomBtn = document.querySelector(".dice");

  quoteRandomBtn.addEventListener("click", () => {
    fetch(apiUrl, { cache: "no-store" })
      .then((response) => response.json())
      .then((data) => {
        randomAdvice(data);
      })
      .catch((error) => {
        console.error(error);
      });
  });
});

function randomAdvice(data) {
  const adviceNumber = document.querySelector(".advice-number");
  const quote = document.querySelector(".quote");

  adviceNumber.textContent = "Advice #" + data.slip.id;
  quote.textContent = `"${data.slip.advice}"`;
}
