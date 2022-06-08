const menuOpen = document.getElementById('menuOpen');
const menuClose = document.getElementById('menuClose');
const mobileNav = document.getElementById('mobileNav');


menuOpen.addEventListener('click',()=>{
    mobileNav.classList.add('active');
    menuClose.classList.add('active');
    menuOpen.classList.add('deactive')

})

menuClose.addEventListener('click',()=>{
    // menuClose.classList.add('deactive');
    // menuOpen.classList.add('active');
    mobileNav.classList.remove('active');

})
