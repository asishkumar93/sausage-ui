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
});
