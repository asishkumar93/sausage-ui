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
