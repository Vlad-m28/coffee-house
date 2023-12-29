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

// Menu-card

const modalController = ({modal, btnOpen, btnClose}) => {
    const buttonCards = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);

    modalElem.style.cssText = `
        display: flex;
        visibility: hidden;
        opacity: 0;
        transition: opacity 300ms ease-in-out;
    `;

    const closeModal = event => {
        const target = event.target;

        if (
            target === modalElem ||
            target.closest(btnClose) ||
            event.code === 'Escape'
            ) {
            modalElem.style.opacity = 0;

            setTimeout(() => {
                modalElem.style.visibility = 'hidden';
            }, 300);
            window.removeEventListener('keydown', closeModal);
        }
    }

    const openModal = () => {
        modalElem.style.visibility = 'visible';
        modalElem.style.opacity = 1;
        window.addEventListener('keydown', closeModal);
    };

    buttonCards.forEach(btn => {
        btn.addEventListener('click', openModal);
    });

    modalElem.addEventListener('click', closeModal);
};

modalController({
    modal: '.modal1',
    btnOpen: '.coffee1-card',
    btnClose: '.modal__btn-close'
});

modalController({
    modal: '.modal2',
    btnOpen: '.coffee2-card',
    btnClose: '.modal__btn-close'
});

modalController({
    modal: '.modal3',
    btnOpen: '.coffee3-card',
    btnClose: '.modal__btn-close'
});

modalController({
    modal: '.modal4',
    btnOpen: '.coffee4-card',
    btnClose: '.modal__btn-close'
});

modalController({
    modal: '.modal5',
    btnOpen: '.coffee5-card',
    btnClose: '.modal__btn-close'
});

modalController({
    modal: '.modal6',
    btnOpen: '.coffee6-card',
    btnClose: '.modal__btn-close'
});

modalController({
    modal: '.modal7',
    btnOpen: '.coffee7-card',
    btnClose: '.modal__btn-close'
});

modalController({
    modal: '.modal8',
    btnOpen: '.coffee8-card',
    btnClose: '.modal__btn-close'
});

// Modal-count

// var products = document.querySelectorAll(".btn-size");

// for (var i = 0; i < products.length; i++) {
//   products[i].addEventListener("click", totalIt);
// }

// function totalIt() {
//   var total      = document.querySelector("#total");
//   var currentVal = parseInt( total.innerText );
//   console.log(currentVal);
//   var new_val    = parseInt( this.value );
//   console.log(new_val);

//   if( this.classList.contains('clicked') ){
//     total.innerText = ( currentVal - new_val ).toFixed(2);
//   }else{
//     total.innerText = ( currentVal + new_val ).toFixed(2);
//   }

//   document.querySelector("#total2").innerText = total.innerText;

//   this.classList.toggle('clicked');
// }

// Catalog More

const catalogMore = document.querySelector(".arrow-reverse");
const cards = document.querySelectorAll('.menu__grid-card');

catalogMore.addEventListener('click', function() {
for (let card of cards) {
    card.style.display = 'block';
}
    catalogMore.style.display = 'none';
})

