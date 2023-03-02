window.onload = function () {
  const form = document.getElementById("form");
  const naam = document.getElementById("naam");
  const email = document.getElementById("email");
  const telefoon = document.getElementById("tel-nummer");
  const bericht = document.getElementById("bericht");
  const emailCheck = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  naam.addEventListener("input", validate);
  email.addEventListener("input", validate);
  telefoon.addEventListener("input", validate);
  bericht.addEventListener("input", validate);

  function validate(e) {
    if (e.target.name == "naam") {
      if (e.target.value.length > 3) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
      } else {
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
      }
    }

    if (e.target.name == "email") {
      if (emailCheck.test(e.target.value)) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
      } else {
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
      }
    }

    if (e.target.name == "tel-nummer") {
      if (e.target.value.length > 9) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
      } else {
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
      }
    }

    if (e.target.name == "bericht") {
      if (e.target.value.length > 9) {
        e.target.classList.add("valid");
        e.target.classList.remove("invalid");
      } else {
        e.target.classList.add("invalid");
        e.target.classList.remove("valid");
      }
    }
  }
};
