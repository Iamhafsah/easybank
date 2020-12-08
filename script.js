let close = document.querySelector('.close-menu');
let mobileNav = document.querySelector('.mobile-nav');
let menuBar = document.querySelector('.hamburger-menu');

// function to show mobile navigation
const showMobile = () =>{
    close.classList.remove('hide')
    menuBar.classList.add('hide')
    mobileNav.classList.remove('hide')
}

// function to hide mobile navigation
const hideMobile = () =>{
    close.classList.add('hide')
    menuBar.classList.remove('hide')
    mobileNav.classList.add('hide')
}


menuBar.addEventListener('click', showMobile)
close.addEventListener('click', hideMobile)



