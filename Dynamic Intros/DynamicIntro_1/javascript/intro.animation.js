const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const navbar = document.getElementById('navbar');

let hasScrolled = false;

function forwardAnimation() {
    title.style.top = '50px'; // Changes the amount of space between the top of the screen and the text (Currently centered with the navbar)
    title.style.left = '50%';
    title.style.transform = 'translate(-50%, -50%)';
    title.style.fontSize = '1.25rem';
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