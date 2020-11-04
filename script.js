// const header = document.querySelector('header');
// const menuIcon = document.getElementById('menu');

// menuIcon.onclick = function() {

//     if (header.style.height == '100%') {
//         header.style.height = null;
//     } else {
//         header.style.height = '100%';
//     }
    
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