// nav fixed
const headerNav = document.querySelector(".header__nav");
const navigation = headerNav.offsetTop;
const navFxed = function () {
    if (window.pageYOffset > 10) {
        headerNav.classList.add("sticky");
    } else {
        headerNav.classList.remove("sticky");
    }
}
window.addEventListener("scroll", navFxed);

//event button menu
const btnMenu = document.querySelector('.navigation__icon');
const listMenu = document.querySelector('.navigation');

btnMenu.addEventListener('click', function () {
    console.log("test");
    listMenu.classList.toggle('menu-open');
}, false)

// slider
const slides = document.querySelectorAll('.slider__item');
const nextBtn = document.querySelector('.slider__buttons--next');
const prevBtn = document.querySelector('.slider__buttons--prev');

slides.forEach(function (slide, index) {
    slide.style.left = `${index * 100}%`;
});

let counter = 0;
nextBtn.addEventListener('click', function () {
    //  console.log('next');
    counter++;
    if (counter > slides.length - 1) {
        counter = 0;
    }
    carousel();
});

prevBtn.addEventListener('click', function () {
    //   console.log('prev');
    counter--;
    if (counter < 0) {
        counter = slides.length - 1;
    }
    carousel();
});

function carousel() {
    slides.forEach(function (slide) {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    });
}
