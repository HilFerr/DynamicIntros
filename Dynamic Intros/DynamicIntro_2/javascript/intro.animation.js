const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const navbar = document.getElementById('navbar');
const navbarTitle = document.getElementById('navbar-title');

let hasScrolled = false;

function forwardAnimation() {
    title.style.transform = 'translate(-50%, -40%)';  // Moves the title up
    title.style.fontSize = '2rem';
    title.style.opacity = '0';

    navbarTitle.innerText = 'TITLE';
    navbarTitle.style.fontSize = '1.5rem';
    navbarTitle.style.opacity = '1';
    navbarTitle.style.transform = 'translate(-50%, -50%)'; // Center it in the navbar

    overlay.style.opacity = '0';

    setTimeout(() => {
        overlay.remove();
    }, 1000);
}

window.addEventListener('scroll', () => {
    if (!hasScrolled && window.scrollY > 0) {
        hasScrolled = true;
        forwardAnimation();
    }
});

document.addEventListener('wheel', (e) => {
    if (!hasScrolled && e.deltaY > 0) {
        forwardAnimation();
    }
});