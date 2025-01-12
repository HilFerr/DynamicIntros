const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const navbar = document.getElementById('navbar');
const navbarTitle = document.getElementById('navbar-title');

let hasScrolled = false;

function forwardAnimation() {
    title.style.transition = 'top 1s ease, font-size 1s ease, transform 1s ease';
    title.style.top = '21px';
    title.style.fontSize = '2rem';
    title.style.transform = 'translate(-50%, 0)';
    overlay.style.opacity = '0';

    setTimeout(() => {
        overlay.remove();
    }, 1000);

    // Insert the title into the navbar after the animation completes
    setTimeout(() => {
        navbarTitle.innerText = 'TITLE'; // Puts the title inside navbar
        navbarTitle.style.transform = 'translate(-50%, -50%)'; // Keeps the navbar title centered
        navbarTitle.style.fontSize = '2rem';
        title.style.display = 'none'; // Hide the original Title after animation
    }, 1000); // Delay to match the animation duration
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
