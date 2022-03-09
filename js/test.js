const buttonContainer = document.querySelector(".banner-buttons");
const buttonContents = document.querySelectorAll(".button-content");

buttonContainer.addEventListener("mouseover", function (e) {
  const clicked = e.target.closest(".button");

  if (!clicked) {
    return;
  }

  buttonContents.forEach((buttonContent) =>
    buttonContent.classList.remove("button-content-active")
  );

  document
    .querySelector(`.button-content--${clicked.dataset.button}`)
    .classList.add("button-content-active");
});

buttonContainer.addEventListener("mouseout", function (e) {
  buttonContents.forEach((buttonContent) =>
    buttonContent.classList.remove("button-content-active")
  );
});
