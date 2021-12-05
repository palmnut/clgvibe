// Animations
anime({
  targets: '.nav .icon i',
  translateX: [100, 0],
  duration: 1200,
  opacity: [0, 1],
  delay: (el, i) => {
    return 300 + 100 * i;
  },
})

anime({
  targets: '.inner-width ',
  translateX: [500, 0],
  duration: 1200,
  opacity: [0, 1],
  delay: (el, i) => {
    return 800 + 500 * i;
  },
})

anime({
  targets: '.menu ',
  translateX: [100, 0],
  duration: 1200,
  opacity: [0, 1],
  delay: (el, i) => {
    return 300 + 100 * i;
  },
})

anime({
  targets: '.navbar-menu span ',
  translateX: [700, 0],
  duration: 1200,
  opacity: [0, 1],
  delay: (el, i) => {
    return 2100 + 700 * i;
  },
})

anime({
  targets: '.nav .icon p',
  duration: 1200,
  opacity: [0, 1],
  delay: 700
})

anime({
  targets: '.find .person',
  translateY: [100, 0],
  duration: 1200,
  delay: (el, i) => {
    return 1000 + 100 * i;
  },
})

anime({
  targets: '.icon i',
  translateY: [100, 0],
  duration: 1200,
  delay: (el, i) => {
    return 1000 + 100 * i;
  },
})

anime({
  targets: '.navbar i',
  translateX: [150, 0],
  duration: 1200,
  delay: (el, i) => {
    return 1000 + 100 * i;
  },
})

anime({
  targets: '.logo ',
  easing: 'easeOutExpo',
  scale: [2, 1],
  opacity: [0, 1],
  delay: 1200
})

anime({
  targets: '.like i',
  easing: 'easeOutExpo',
  scale: [2, 1],
  opacity: [0, 1],
  delay: 1200
})

anime({
  targets: '.comment i',
  easing: 'easeOutExpo',
  scale: [2, 1],
  opacity: [0, 1],
  delay: 1300
})

anime({
  targets: '.share i',
  easing: 'easeOutExpo',
  scale: [2, 1],
  opacity: [0, 1],
  delay: 1400
})


anime({
  targets: '.newsfeed .card1',
  translateY: [300, 0],
  easing: 'easeOutExpo',
  opacity: [0, 1],
  delay: (el, i) => 700 + 300 * i
})

anime({
  targets: '.newsfeed .card',
  translateY: [300, 0],
  easing: 'easeOutExpo',
  opacity: [0, 1],
  delay: (el, i) => 700 + 300 * i
})

anime({
  targets: '.footer',
  translateY: [300, 0],
  easing: 'easeOutExpo',
  opacity: [0, 1],
  delay: (el, i) => 700 + 300 * i
})
// Notification
var box = document.getElementById('box');
var down = false;
function toggleNotifi() {
  if (down) {
    box.style.height = '0px';
    box.style.opacity = 0;
    down = false;
  } else {
    box.style.height = '510px';
    box.style.opacity = 1;
    down = true;
  }
}
// Blur
function toggle() {
  var blur = document.getElementById('blur');
  blur.classList.toggle('active')
}
// Popup
document.getElementById("open-popup-btn").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("open-popup-btn2").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.add("active");
});
document.getElementById("open-popup-btn3").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.add("active");
});

document.getElementById("dismiss-popup-btn").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.remove("active");
});
document.getElementById("dismiss-popup-btn2").addEventListener("click", function () {
  document.getElementsByClassName("popup")[0].classList.remove("active");
});