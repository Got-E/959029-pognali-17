var navMain = document.querySelector('.page-header__container');
var navToggle = document.querySelector('.page-header__toggle');

navMain.classList.remove('page-header__container--open');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('page-header__container--open')) {
    navMain.classList.remove('page-header__container--open');

  } else {
    navMain.classList.add('page-header__container--open');

  }
});
