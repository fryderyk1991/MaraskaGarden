const hamburger = document.querySelector('.hamburger');
const sideBar = document.querySelector('.nav-side-bar');
const cross = document.querySelector('.cross');
const body = document.querySelector('body');
const blur = document.querySelector('.blur')
const header = document.querySelector('header');



// otwierniane nav w mobile + animacja hamburgera
hamburger.addEventListener('click', () => {
    // animacja hamburgera wylaczona
    // hamburger.classList.add('change');
    sideBar.classList.add('show');
    blur.classList.add('active');
});

// fixed header on scroll 
window.onscroll = function(){
    let top = window.scrollY;
    console.log(top);
    if (top >= 150) {
        header.classList.add('scroll');
    }
    else {
    header.classList.remove('scroll');
    }
}

// zamykanie nav i zabieranie klasy z blur
const liNavBar = document.querySelectorAll('li');
const closeNav = () => {
    liNavBar.forEach((el) => {
        el.addEventListener('click', () => {
            sideBar.classList.remove('show');
            blur.classList.remove('active');
        });
    });
};

closeNav();

// animacja zdjec i tekstu AOS;)
AOS.init({
    offset: 100,
    duration: 500,
    once: true,
});
// btn do pokazania dalszej częsci galerii
const btnShow = document.querySelector('.show-more');
// tablica ze zdjęciami
const moreImages = [...document.querySelectorAll('.more')];
btnShow.addEventListener('click', () => {
    btnShow.style.display = "none";
    moreImages.forEach((el)=> {
        el.classList.add('show');
    })
});
