document.addEventListener("DOMContentLoaded", () => {
  const menu = document.querySelector('#headerMenu');
  
  const menuBtn = document.querySelector('#menuIcon');

  const body = document.querySelector('#body');

  const overlay = document.querySelector('#overlay');

  const closeBtn = document. querySelector('.close__btn');

  menuBtn.addEventListener('click', function () {
    menu.classList.add('header__menu--active');
    body.classList.add('body--lock');
    overlay.classList.add('active');
  });

  closeBtn.addEventListener('click', function () {
    menu.classList.remove('header__menu--active');
    body.classList.remove('body--lock');
    overlay.classList.remove('active');
  });

  overlay.addEventListener('click', function() {
    body.classList.remove('body--lock');
    menu.classList.remove('header__menu--active');
  })

});


