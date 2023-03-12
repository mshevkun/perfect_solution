// Scroll Counter

let number1 = document.querySelector(".number1"),
  numberTop = number1.getBoundingClientRect().top,
  start1 = +number1.innerHTML,
  end1 = +number1.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 1.2) {
    this.removeEventListener("scroll", onScroll);
    let interval = setInterval(function () {
      number1.innerHTML = ++start1;
      if (start1 == end1) {
        clearInterval(interval);
      }
    }, 10);
  }
});

let number2 = document.querySelector(".number2"),
  start2 = +number2.innerHTML,
  end2 = +number2.dataset.max,
  numberTop2 = number2.getBoundingClientRect().top;


window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > numberTop2 - window.innerHeight / 1.2) {
    this.removeEventListener("scroll", onScroll);
    let interval = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval);
      }
    }, 5);
  }
});

let number3 = document.querySelector(".number3")
if (number3) {
  let start3 = +number3.innerHTML,
  end3 = +number3.dataset.max,
  numberTop3 = number3.getBoundingClientRect().top;

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop3 - window.innerHeight / 1.2) {
      this.removeEventListener("scroll", onScroll);
      let interval = setInterval(function () {
        number3.innerHTML = ++start3;
        if (start3 == end3) {
          clearInterval(interval);
        }
      }, 5);
    }
  });
}

let number4 = document.querySelector(".number4")
if (number4) {
  let start4 = +number4.innerHTML,
  end4 = +number4.dataset.max,
  numberTop4 = number4.getBoundingClientRect().top;
  

  window.addEventListener("scroll", function onScroll() {
    if (window.pageYOffset > numberTop4 - window.innerHeight / 1.2) {
      this.removeEventListener("scroll", onScroll);
      let interval = setInterval(function () {
        number4.innerHTML = ++start4;
        if (start4 == end4) {
          clearInterval(interval);
        }
      }, 315);
    }
  });
}