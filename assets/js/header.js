console.log("hello from header.js");

const btn = document.querySelector('.menu-btn');
const bar = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
console.log(btn);
console.log(menu);



btn.addEventListener('click', e =>{
    menu.classList.toggle('open');
    if(menu.classList.contains('open')){

        bar.classList.add('menu-bar-close');
        bar.classList.remove('menu-bar-open');

    }
    else{
        bar.classList.add('menu-bar-open');
        bar.classList.remove('menu-bar-close');

    }
});


