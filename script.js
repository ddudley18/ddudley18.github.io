window.addEventListener('load', (event) => {
    document.querySelector(".intro").classList.add('loadIntro');
    let navLinks = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLinks.length; ++i) {
        navLinks[i].classList.add('loadNav');
    }
});


