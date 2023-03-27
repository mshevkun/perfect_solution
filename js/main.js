// Cards
const cards = document.querySelectorAll(".card-block");
for (let i = 0; i < cards.length; i++) {
  const card = cards[i];
  card.addEventListener("mousemove", rotate);
  card.addEventListener("mouseout", stopRotate);
}

function rotate(e) {
  const cardItem = this.querySelector(".card-item");
  const halfHeight = cardItem.offsetHeight / 2;

  cardItem.style.transform =
    "rotateX(" +
    -(e.offsetY - halfHeight) / 7 +
    "deg) rotateY(" +
    (e.offsetX - halfHeight) / 7 +
    "deg)";
}
function stopRotate() {
  const cardItem = this.querySelector(".card-item");
  cardItem.style.transform = "rotate(0)";
}

// mob-menu animation and functional
const mobMenu = document.querySelector(".mob-menu");

window.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    mobMenu.classList.add("active_sticky");
  } else {
    mobMenu.classList.remove("active_sticky");
  }
});

const checkbox = document.querySelector("#burger-toggle");

const menuItem = Array.from(document.querySelectorAll(".menu-nav-link"));
menuItem.forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelector("#burger-toggle").checked = false;
    document.querySelector(".burger-menu").style.position = "absolute";
    document.body.style.overflow = "auto";
  });
});

checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".burger-menu").style.position = "fixed";
    document.body.style.overflow = "hidden";
    return;
  }
  document.querySelector(".burger-menu").style.position = "absolute";
  document.body.style.overflow = "auto";
});

const servicesSection = document.querySelector("#services");
const scrollToServicesButton = document.querySelector(".dropdown");
scrollToServicesButton.addEventListener("click", () => {
  servicesSection.scrollIntoView({ behavior: "smooth" });
});

const dropdownMenuItems = Array.from(document.querySelectorAll(".dropdown_menu li"));
dropdownMenuItems.forEach((x) => {
  x.addEventListener("click", (e) => {
    e.stopPropagation();
  })
})

const mainSliderButoon = Array.from(document.querySelectorAll(".slidenav__item"));
mainSliderButoon.forEach((x) => {
  x.addEventListener("click", () => {
    mainSliderButoon.forEach((el) => {
      el.style.animationPlayState = 'paused';
      el.style.transform = 'none';
    })
  })
})