// User interaction animations
// Mobile menu toggle
const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')

    burger.addEventListener('click', () => {

        // toggle nav
        nav.classList.toggle('nav-active');

        // // animate links
        navLinks.forEach((link, index) => {

            if (link.style.animation) {
                link.style.animation = ``;
            } else {
                link.style.animation = `navLinkFadeIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        })

        // burger animation
        burger.classList.toggle('toggle');
    });
}

// Nav-links delay
const navLinksDelay = () => {
    const navLinks = document.querySelectorAll('.nav-links li');
    let counter = 0;

    for (var i = navLinks.length - 1; i >= 0; i--) {
        counter++;
        navLinks[i].classList.toggle("from-right-" + (counter + 1));
    }
}

const app = () => {
    navLinksDelay();
    navSlide();
}

app();