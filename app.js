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
