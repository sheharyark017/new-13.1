const buttonContainer = document.querySelector(".slider-bottom-btn");
const buttonContents = document.querySelectorAll(".hover-dropdown");
const blur = document.querySelector(".blur");

buttonContainer.addEventListener("mouseover", function (e) {
  const clicked = e.target.closest(".slider-button");

  if (!clicked) {
    return;
  }

  buttonContents.forEach((buttonContent) =>
    buttonContent.classList.remove("hover-dropdown-active")
  );

  document
    .querySelector(`.hover-dropdown-${clicked.dataset.button}`)
    .classList.add("hover-dropdown-active");

  blur.classList.add("blur-active");
});

buttonContainer.addEventListener("mouseout", function (e) {
  buttonContents.forEach((buttonContent) =>
    buttonContent.classList.remove("hover-dropdown-active")
  );
  blur.classList.remove("blur-active");
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper-2", {
  slidesPerView: 1,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 1500,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
