var navMain = document.querySelector('.page-header__container');
var navToggle = document.querySelector('.page-header__toggle');
var contentMail = document.querySelector('.contacts__item--mail');
var contentPhone = document.querySelector('.contacts__item--phone');

navMain.classList.remove('page-header__container--open');
navToggle.classList.remove('page-header__toggle--no-js')

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__container--open')) {
    navMain.classList.remove('page-header__container--open');
    contentMail.classList.add('contacts__item--toggle');
    contentPhone.classList.add('contacts__item--toggle');
  } else {
    navMain.classList.add('page-header__container--open');
    contentMail.classList.remove('contacts__item--toggle');
    contentPhone.classList.remove('contacts__item--toggle');
  }
});
