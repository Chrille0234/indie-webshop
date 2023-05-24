const burger = document.querySelector('.primaryNav__burger');
burger.addEventListener('click', () => {
    const nav = document.querySelector('.primaryNav');
    nav.classList.toggle('primaryNav--active')
})