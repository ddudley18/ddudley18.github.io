window.addEventListener('load', (event) => {
    let navLinks = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLinks.length; ++i) {
        navLinks[i].style.opacity = 1;
    }
});