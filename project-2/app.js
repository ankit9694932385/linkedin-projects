const navbar = document.querySelector(".navbar");
const list = document.querySelectorAll(".list");
const btn = document.querySelector("button");
const aboutSec = document.querySelector(".about");

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 1)";
    for (li of list) {
      li.style.color = "black";
    }
  } else {
    navbar.style.backgroundColor = "rgba(255, 255, 255, 0)";
    for (li of list) {
      li.style.color = "white";
    }
  }
});

btn.addEventListener("click", () => {
  console.log("clicked");
  aboutSec.scrollIntoView({ behavior: "smooth" });
});
