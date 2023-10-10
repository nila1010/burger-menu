const burger = document.querySelector(".burger");
const alllinks = document.querySelector(".alllinks");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  alllinks.classList.toggle("active");
});

document.querySelectorAll(".sublink").forEach((n) =>
  n.addEventListener("click", () => {
    burger.classList.remove("active");
    alllinks.classList.remove("active");
  })
);
