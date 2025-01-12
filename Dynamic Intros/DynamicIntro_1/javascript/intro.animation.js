const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const navbar = document.getElementById('navbar');
const navbarTitle = document.getElementById('navbar-title');

let hasScrolled = false;

function forwardAnimation() {
    title.style.transition = 'top 1s ease, font-size 1s ease, transform 1s ease';
    title.style.top = '21px'; // Move to just below the top of the page
    title.style.fontSize = '2rem'; // Match the navbar title size (same as animation title size)
    title.style.transform = 'translate(-50%, 0)';
    overlay.style.opacity = '0'; // Fade out the overlay

    setTimeout(() => {
        overlay.remove(); // Remove overlay after animation
    }, 1000);

    // Insert the title into the navbar after the animation completes
    setTimeout(() => {
        navbarTitle.innerText = 'TITLE'; // Set the title inside navbar
        navbarTitle.style.transform = 'translate(-50%, -50%)'; // Keep the navbar title centered
        navbarTitle.style.fontSize = '2rem'; // Ensure it matches the final size
        title.style.display = 'none'; // Hide the original title after animation

        // Shrink the navbar title to 1rem after the animation is done
        navbarTitle.style.fontSize = '1.5rem';
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
