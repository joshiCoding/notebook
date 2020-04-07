console.log("hello from header.js");

const btn = document.querySelector('.menu-bar');
const menu = document.querySelector('.menu');
console.log(btn);
console.log(menu);

btn.addEventListener('click',e =>{
    menu.classList.toggle('open');
})
