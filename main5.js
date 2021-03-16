


document.addEventListener('scroll', () => {
    let nav = document.querySelector('#nav');
    let scrolled = window.pageYOffset;
    if (scrolled > 80) {
        nav.classList.add('shadow');
        nav.classList.add('bg-light');
        nav.style.transition = '0.3s ease'
    } else {
        nav.classList.remove('bg-light');
        nav.classList.remove('shadow');
    }
});