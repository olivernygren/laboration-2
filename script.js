// const menuIcon = document.getElementById('menu-icon');

// menuIcon.onclick = function() {
    
// }




const header = document.querySelector('header');

window.onscroll = function() {

    let top = window.scrollY;

    if (top >= 50) {
        header.classList.add('active')
    } else {
        header.classList.remove('active');
    }
}