//navbar fixed
window.onscroll = function () {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if (window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};


//Huberger
const humburger = document.querySelector('#humburger');
const navMenu = document.querySelector('#nav-menu');

humburger.addEventListener('click', function() {
    humburger.classList.toggle('humburger-active');
    navMenu.classList.toggle('hidden');
}); 



// klick diluar humberger
window.addEventListener('click', function (e) {
    if(e.target != humburger && e.target != navMenu) {   
        humburger.classList.remove('humburger-active');
        navMenu.classList.add('hidden');
    }
});
