const sliderCenter = document.querySelector('.coffee__slider-item');
const leftButton = document.querySelector('.coffee__slider-left');
const rightButton = document.querySelector('.coffee__slider-right');
const lines = document.querySelectorAll('.coffee__bottom-line');
const sliderCoffee = document.querySelector('.coffee__slider');
const sliderBottom = document.querySelector('.coffee__bottom');
// const sliderLine = document.querySelector('.coffee__slider-center');

let position = 0;
let lineIndex = 0;

// function showSlide() {
//     sliderWidth = document.querySelector('.coffee__slider').offsetWidth;
//     sliderLine.style.width = sliderWidth * sliderCenter.length + 'px';
//     sliderCenter.forEach(item => item.style.width = sliderWidth + 'px');
// }

// window.addEventListener('resize', sliderCenter);

const rightSlide = () => {
    if (position < (lines.length - 1) * 1152) {
        position += 1152;
        lineIndex++
    } else {
        position = 0;
        lineIndex = 0;
    }
    sliderCenter.style.left = -position + 'px';
    activeLine(lineIndex);
}

const leftSlide = () => {
    if (position > 0) {
        position -= 1152;
        lineIndex--
    } else {
        position = (lines.length - 1) * 1152;
        lineIndex = (lines.length - 1);
    }
    sliderCenter.style.left = -position + 'px';
    activeLine(lineIndex);
}

const activeLine = (index) => {
    for (let line of lines) {
        line.classList.remove('active')
        // lineIndex--
    }
    lines[index].classList.add('active');
}

rightButton.addEventListener('click', rightSlide);
leftButton.addEventListener('click', leftSlide);

lines.forEach((line, index) => {
    line.addEventListener('click', () => {
        position = 1152 * index;
        sliderCenter.style.left = -position + 'px';
        lineIndex = index;
        activeLine(lineIndex);
    })
})

let timer = setInterval(() => {
    rightSlide()
}, 3000)

sliderCoffee.onmouseover = function() {
    clearInterval(timer);
}

sliderBottom.onmouseover = function() {
    clearInterval(timer);
}

sliderCoffee.onmouseout = function() {
    timer = setInterval(() => {
    rightSlide()
}, 3000);
}

sliderBottom.onmouseout = function() {
    timer = setInterval(() => {
    rightSlide()
}, 3000);
}


// Menu Icon

const navBtn = document.querySelector('.menu-icon-wrapper');
const nav = document.querySelector('.nav__list');
const menuIcon = document.querySelector('.menu-icon');
const body = document.body;


navBtn.onclick = function() {
    nav.classList.toggle('nav__list--visible');
    menuIcon.classList.toggle('menu-icon-active');
    body.classList.toggle('lock');
}

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav__list--visible');
        menuIcon.classList.remove('menu-icon-active');
        body.classList.remove('lock');
    })
})

// const anchors = document.querySelectorAll('a[href*="#"]');

// anchors.forEach(anchor => {
//     anchor.addEventListener('click', event => {
//         event.preventDefault();

//         const blockID = anchor.getAttribute('href').substring(1);

//         document.getElementById(blockID).scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//         })
//     })
// })