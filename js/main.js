window.onload = function () {
  document.querySelector(".close-popup").addEventListener("click", close);

  document.getElementById("a").addEventListener("click", bestel);
  document.getElementById("b").addEventListener("click", bestel);
  document.getElementById("c").addEventListener("click", bestel);
  document.getElementById("d").addEventListener("click", bestel);
  document.getElementById("e").addEventListener("click", bestel);
  document.getElementById("f").addEventListener("click", bestel);
  document.getElementById("g").addEventListener("click", bestel);
  document.getElementById("h").addEventListener("click", bestel);
  document.getElementById("i").addEventListener("click", bestel);
};

function close(event) {
  document.querySelector(".achtergrond-popup").style.display = "none";
}

function bestel(event) {
  document.querySelector(".achtergrond-popup").style.display = "flex";
}
