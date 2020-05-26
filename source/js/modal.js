var form = document.querySelector(".form");
var popup = document.querySelector(".modal--success");
var popuperror = document.querySelector(".modal--error");
var close = document.querySelector(".modal__btn");
var submitBtn = form.querySelector("[type=submit]");
var login = form.querySelector("[name=login]");
var family = form.querySelector("[name=family]");
var tel = form.querySelector("[name=tel]");
var email = form.querySelector("[name=mail]");
var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("login");
} catch (error) {
  isStorageSupport = false;
}

form.addEventListener("submit", function (evt) {
  if (!login.value || !family.value || !email.value || !tel.value) {
    return
}  {
  if (isStorageSupport) {
    evt.preventDefault();
    popup.classList.remove("modal--on");
    popuperror.classList.remove("modal--on");
    popuperror.offsetWidth = popup.offsetWidth;
    popuperror.classList.add("modal--on");
    popup.classList.add("modal--on");
    localStorage.setItem("login", login.value);
    localStorage.setItem("family", family.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("tel", tel.value);
    }
  }
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popuperror.classList.remove("modal--on");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal--on");
});