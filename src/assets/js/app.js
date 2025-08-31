// Header active
$(document).ready(function () {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
      $(".header__wrapper").addClass("navActive");
    } else {
      $(".header__wrapper").removeClass("navActive");
    }
  });
});

// Humbuger Toogle button
const toggleBtn = document.getElementById("humguberBtn");
const box = document.getElementById("humbugerMenu");

toggleBtn.addEventListener("click", () => {
  box.classList.toggle("show");
  toggleBtn.classList.toggle("close");
});

//Navbar Link Active
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname.split("/").pop();
  const links = document.querySelectorAll(".nav_list a");

  links.forEach((link) => {
    const linkPath = link.getAttribute("href").split("/").pop();
    if (
      linkPath === currentPath ||
      (linkPath === "index.html" && currentPath === "")
    ) {
      link.classList.add("active");
    }
  });


  
  // Initialize Lenis
  const lenis = new Lenis({
    duration: 1.8, // scroll animation duration (seconds)
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // smooth easing
    orientation: "vertical", // vertical scrolling
    wheelMultiplier: 1, // wheel speed multiplier
    smoothTouch: false, // leave true if you want smooth touch on mobile
    infinite: false,
    autoResize: true,
  });

  // Required RAF loop that drives Lenis
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
});



