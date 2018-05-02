var nav = document.querySelectorAll(".site-list");
var buttontoggle = document.querySelector(".page-header__button");
var buttonopen = document.querySelector(".products-item__link");
var modalwindow = document.querySelector(".modal");
var modalclose = document.querySelector(".modal__button");

for (var i = 0; i < nav.length; i++){
  nav[i].classList.add("site-list--closed");
}

buttontoggle.classList.add("page-header__button--closed");

buttontoggle.addEventListener("click", function (evt) {
  evt.preventDefault();
  for (var i = 0; i < nav.length; i++) {
    if (nav[i].classList.contains("site-list--closed")) {
      nav[i].classList.remove("site-list--closed");
      nav[i].classList.add("site-list--opened");
      buttontoggle.classList.remove("page-header__button--closed");
    } else {
      nav[i].classList.add("site-list--closed");
      nav[i].classList.remove("site-list--opened");
      buttontoggle.classList.add("page-header__button--closed");
    }
  }
});

buttonopen.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalwindow.classList.add("modal--opened");
})

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalwindow.classList.remove("modal--opened");
})

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalwindow.classList.contains("modal--opened")) {
      modalwindow.classList.remove("modal--opened");
    }
  }
});
