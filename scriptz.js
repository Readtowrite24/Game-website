const stemKnoppen = document.querySelectorAll(".stem-knop");

stemKnoppen.forEach(function (knop) {
  knop.addEventListener("click", function () {
    const item = knop.closest(".stem-item");
    const teller = item.querySelector(".aantal");
    teller.textContent = Number(teller.textContent) + 1;
  });
});