const formEl = document.querySelector(".login-form");
const inputEl = document.querySelector(".input");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formInputValues = {
    email: event.currentTarget.elements.email.value,
    password: event.currentTarget.elements.password.value,
  };

  if (formInputChecker(formInputValues)) return;
  console.log(formInputValues);
  event.currentTarget.reset();
}

function formInputChecker({ email, password }) {
  let message = "";
  if (email === "") message = "Все поля должны быть заполнены.\n";
  if (password === "") message = "Все поля должны быть заполнены.";
  if (message) {
    alert(message);
    return false;
  }
  return true;
}
