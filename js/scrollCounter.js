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
  end2 = +number2.dataset.max;

window.addEventListener("scroll", function onScroll() {
  if (window.pageYOffset > numberTop - window.innerHeight / 1.2) {
    this.removeEventListener("scroll", onScroll);
    let interval = setInterval(function () {
      number2.innerHTML = ++start2;
      if (start2 == end2) {
        clearInterval(interval);
      }
    }, 5);
  }
});

function learn(language, callback) {
  console.log(`I learn ${language}`);
  callback();
}
function done() {
  console.log("I passed this lesson");
}
learn("Js", done);

let data = ["a", "c", "b", "a", "d", "c"];
function uniq(array) {
  return array.filter((val, index) => {
    return array.indexOf(val) === index;
  });
}

console.log(uniq(data));
