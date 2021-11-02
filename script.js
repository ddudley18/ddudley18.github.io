window.addEventListener('load', (event) => {
    document.querySelector(".intro").classList.add('loadIntro');
    let navLinks = document.querySelectorAll(".nav-link");
    for (let i = 0; i < navLinks.length; ++i) {
        navLinks[i].classList.add('loadNav');
    }
});

const checkpoint = 600;
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > checkpoint) { 
        let cards = document.querySelectorAll(".card");
        for (let i = 0; i < cards.length; ++i) {
            cards[i].classList.add('visible');
        }
    }
  });