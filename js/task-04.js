const decrease = document.querySelector("[data-action='decrement']");
const increase = document.querySelector("[data-action='increment']");
const span = document.querySelector("#value");

let counterValue = 0;

const decrement = () => {
  counterValue -= 1;
  span.textContent = counterValue;
};

const increment = () => {
  counterValue += 1;
  span.textContent = counterValue;
};

increase.addEventListener("click", increment);
decrease.addEventListener("click", decrement);
