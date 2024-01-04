document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector(".navbar");
  var navbarOffset = navbar.offsetTop;

  window.onscroll = function () {
    var scrollPosition = window.pageYOffset;

    // Check if the user has scrolled past the original position of the navbar
    if (scrollPosition >= navbarOffset) {
      navbar.classList.add("fixed");
    } else {
      navbar.classList.remove("fixed");
    }

    // Check if the user has scrolled back to the top
    if (scrollPosition === 0) {
      navbar.classList.remove("fixed");
    }
  };
});

const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");

    // Add animation to each nav link
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 7 + 0.7
        }s`;
      }
    });
    burger.classList.toggle("toggle");
  });
};

navSlide();


function scrollAppear() {
  var oNasText = document.querySelector('.o-nas-content');
  var oNasPosition = oNasText.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if (oNasPosition < screenPosition) {
    oNasText.classList.add('o-nas-content-active')
    console.log('Active');
  }
}

window.addEventListener('scroll', scrollAppear);
