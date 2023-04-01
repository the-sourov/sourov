var typed = new Typed(".heading-primary--typing", {
  strings: ["Developer", "Designer"],
  typeSpeed: 150,
  backSpeed: 150,
  backDelay: 2000,
  loop: true,
  cursorChar: "_",
});
const header = document.querySelector(`.header`);
const sectionHero = document.querySelector(`.section-hero`);
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        header.classList.add(`header-bg`);
      } else {
        header.classList.remove(`header-bg`);
      }
    });
  },
  { rootMargin: `-95%0px 0px 0px` }
);
observer.observe(sectionHero);
const navBar = document.querySelector(`.nav-bar`);
const hamburger = document.querySelector(`.header__hamburger`);
const hamburgerLines = document.querySelectorAll(`.header__hamburger__line`);
const navBarLinks = document.querySelectorAll(`.nav-bar__link`);
const navBarOpenClose = () => {
  hamburgerLines.forEach((value, index) => {
    value.classList.toggle(`header__hamburger__line--${index + 1}-active`);
  });
  navBar.classList.toggle(`nav-bar--active`);
  return;
};
hamburger.addEventListener(`click`, () => {
  navBarOpenClose();
});
navBarLinks.forEach((value) => {
  value.addEventListener(`click`, () => {
    navBarOpenClose();
  });
});
const formBTN = document.querySelector(`#form__btn`);
const formHeading = document.querySelector(`#form__heading`);
formBTN.addEventListener(`click`, () => {
  formHeading.textContent = `Web Servers are costly and I am broke.Please,call or mail me 🐸.`;
});
