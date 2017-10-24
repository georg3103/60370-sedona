var menuIcon  = document.querySelector('.main-nav__button'),
    menuItems = document.querySelector('.main-nav__list');
    if (!(menuItems.classList.contains('main-nav__list--closed'))) {
        menuItems.classList.add('main-nav__list--closed')
        menuIcon.classList.add('main-nav__button--closed')
    }
    menuIcon.addEventListener('click', function(event) {
    event.preventDefault();
    if (menuItems.classList.contains('main-nav__list--closed')) {
        menuItems.classList.remove('main-nav__list--closed')
        menuIcon.classList.remove('main-nav__button--closed')
    }
    else {
        menuItems.classList.add('main-nav__list--closed');
        menuIcon.classList.add('main-nav__button--closed');
    }
  });
