/* Gives the transparent header a background color when user scroll past 50px down on the page */

const header = document.getElementById('header');
const headerMobile = document.getElementById('header-mobile');

window.onscroll = function() {

    let top = window.scrollY;

    if (top >= 50) {
        header.classList.add('active');
        headerMobile.classList.add('active');

    } else {
        header.classList.remove('active');
        headerMobile.classList.remove('active');
    }
}


/* Hamburger menu */

const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');
const jumboText = document.getElementById('jumbo-text');
const html = document.querySelector('html');

menuIcon.onclick = function() {

    if (mobileNav.classList.contains('display-none')) {
        mobileNav.classList.remove('display-none'); /* visa nav:en */
        // jumboText.classList.add('display-none'); /* ta bort jumbo-texten */
        html.classList.add('remove-scroll');
        headerMobile.classList.add('active');

    } else { 
        mobileNav.classList.add('display-none'); /* dölj nav:en */
        // jumboText.classList.remove('display-none'); /* visa jumbo-texten */
        html.classList.remove('remove-scroll');
        headerMobile.classList.remove('active');
    }
}

/* Closes hamburger menu when a nav link is clicked */

const hamburgerMenuLink1 = document.getElementById('hamb-link-1');
const hamburgerMenuLink2 = document.getElementById('hamb-link-2');
const hamburgerMenuLink3 = document.getElementById('hamb-link-3');
const hamburgerMenuLink4 = document.getElementById('hamb-link-4');

hamburgerMenuLink1.onclick = function() {
    mobileNav.classList.add('display-none');
    jumboText.classList.remove('display-none');
}

hamburgerMenuLink2.onclick = function() {
    mobileNav.classList.add('display-none');
    jumboText.classList.remove('display-none');
}

hamburgerMenuLink3.onclick = function() {
    mobileNav.classList.add('display-none');
    jumboText.classList.remove('display-none');
}

hamburgerMenuLink4.onclick = function() {
    mobileNav.classList.add('display-none');
    jumboText.classList.remove('display-none');
}

