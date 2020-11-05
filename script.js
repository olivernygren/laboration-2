// const menuIcon = document.getElementById('menu-icon');

// menuIcon.onclick = function() {
    
// }




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



const menuIcon = document.getElementById('menu-icon');
const mobileNav = document.getElementById('mobile-nav');
const jumboText = document.getElementById('jumbo-text');

menuIcon.onclick = function() {

    if (/* om .hamburger-menu-nav har klassen .display-none (inte visas) */) {
        mobileNav.classList.remove('display-none'); /* visa nav:en */
        jumboText.classList.add('display-none'); /* ta bort jumbo-texten */

    } else { /* om .hamburger-menu-nav inte har klassen .display-none (visas*/
        mobileNav.classList.add('display-none'); /* dölj nav:en */
        jumboText.classList.remove('display-none'); /* visa jumbo-texten */
    }
}