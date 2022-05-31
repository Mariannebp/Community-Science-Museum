
const form = document.querySelector("form");
const message = document.querySelector(".message");
const fullName = document.querySelector("#fullName");
const fullNameError = document.querySelector("#errorMessage_fullName")
const email = document.querySelector("#email");
const emailError = document.querySelector("#errorMessage_email")
const textarea = document.querySelector("textarea");
const textareaError = document.querySelector("#errorMessage_textarea")

function sendForm(event) {
  event.preventDefault();

  if (checkLength(fullName.value, 5)) {
    fullNameError.style.display = "none";
  } else {
    fullNameError.style.display = "block";
  }

  if (checkEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(textarea.value, 10)) {
    textareaError.style.display = "none";
  } else {
    textareaError.style.display = "block";
  }

  checkValidation()
};

function checkLength(value, len) {
    if (value.trim().length >= len) {
        return true;
    } else {
        return false;
    }
};

function checkEmail(email) {
    const regEx = /\S+@\S+\.\S+/;
    const testEmail = regEx.test(email);
    return testEmail;
};

function checkValidation() {
  if (checkLength(fullName.value, 5) && checkEmail(email.value) && checkLength(textarea.value, 10)) {
    message.innerHTML = "Message sent";
  }
}

form.addEventListener("submit", sendForm);
