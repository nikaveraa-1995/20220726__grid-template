const menuBtn = document.querySelector('.header-navbar__btn');
let menuOpen = false;
menuBtn.addEventListener('click', ()=> {
    if(!menuOpen) {
        menuBtn.classList.add('header-navbar__btn--active');
        menuOpen=true;
    }
    else {
        menuBtn.classList.remove('header-navbar__btn--active');
        menuOpen=false;
    }
})
