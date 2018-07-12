var nav = document.querySelectorAll(".site-list");
var buttontoggle = document.querySelector(".page-header__button");
var buttonopen = document.querySelector(".products-item__link");
var modalwindow = document.querySelector(".modal");
var modalclose = document.querySelector(".modal__button");
var catalogLink = document.querySelectorAll(".catalog__svg-link");
var sliderWrapper = document.querySelector(".review__list");
var nextSlideButton = sliderWrapper.querySelectorAll(".review__button--next");
var prewSlideButton = sliderWrapper.querySelectorAll(".review__button--prew");
var offsetSliderSlides = 0;

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

if (buttonopen) {
  buttonopen.addEventListener("click", function (evt) {
    evt.preventDefault();
    modalwindow.classList.add("modal--opened");
  });
}

if (catalogLink) {
  for (var j = 0; j < catalogLink.length; j++) {
    catalogLink[j].addEventListener("click", function (evt) {
      evt.preventDefault();
      modalwindow.classList.add("modal--opened");
    })
  }
}

modalclose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalwindow.classList.remove("modal--opened");
});

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalwindow.classList.contains("modal--opened")) {
      modalwindow.classList.remove("modal--opened");
    }
  }
});

var seeNextSlide = function () {
  offsetSliderSlides = (offsetSliderSlides - sliderWrapper.offsetWidth / 3) % -sliderWrapper.offsetWidth;
  sliderWrapper.style.marginLeft = offsetSliderSlides + 'px';
};

var seePrewSlide = function () {
  if (offsetSliderSlides === 0) {
    offsetSliderSlides = -sliderWrapper.offsetWidth;
  }
  offsetSliderSlides = (offsetSliderSlides + sliderWrapper.offsetWidth / 3);
  sliderWrapper.style.marginLeft = offsetSliderSlides + 'px';
};

for (var b = 0; b < nextSlideButton.length; b++) {
  nextSlideButton[b].addEventListener('click', seeNextSlide);
  prewSlideButton[b].addEventListener('click', seePrewSlide);
}
