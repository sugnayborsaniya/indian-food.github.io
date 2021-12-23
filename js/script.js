var navbar = document.querySelector('#navbar');
function openMenu() {
    navbar.style.transform = 'translateX(0)';
}

function closeMenu() {
    navbar.style.transform = 'translateX(200px)';
}

// $(document).ready(function () {
//     $(document).click(function (event) {
//         var clickover = $(event.target);
//         var _opened = document.querySelector('.responsive-nav').style.transform == 'translateX(0px)';
//         if (_opened === true && !clickover.hasClass("navbar-toggle")) {
//             document.querySelector('.responsive-nav').style.transform = 'translateX(200px)';
//         }
//     });
// });