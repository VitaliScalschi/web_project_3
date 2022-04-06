const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeElement = document.querySelector('.menu__close');


hamburger.addEventListener('click', () =>{
    menu.classList.add('activ');
});

closeElement.addEventListener('click', () =>{
    menu.classList.remove('activ');
});


const counters = document.querySelectorAll('.progress__item-counter');
const line = document.querySelectorAll('.progress__item-liner');

console.log(counters);

counters.forEach( (item, i) => {
    line[i].style.width = item.innerHTML;
});