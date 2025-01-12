const overlay = document.getElementById('overlay');
const title = document.getElementById('title');
const navbar = document.getElementById('navbar');
const navbarTitle = document.getElementById('navbar-title');

let hasScrolled = false;

function forwardAnimation() {
    title.style.transition = 'top 1s ease, font-size 1s ease, transform 1s ease';
    title.style.top = '21px';
    title.style.fontSize = '2rem';
    title.style.transform = 'translate(-50%, 0)'; // Keeps centered
    overlay.style.opacity = '0'; // Fade out the overlay

    setTimeout(() => {
        overlay.remove(); // Removes the overlay after the animation
    }, 1000);

    // Inserts the title into the navbar after the animation completes
    setTimeout(() => {
        navbarTitle.innerText = 'TITLE';
        navbarTitle.style.transform = 'translate(-50%, -50%)';
        navbarTitle.style.fontSize = '2rem';
        title.style.display = 'none';
    }, 1000);
} 

function handleScroll() {
    if (!hasScrolled) {
        hasScrolled = true;

        // Resets scroll position
        window.scrollTo(0, 0);

        // Starts the animation after a small delay (allow scroll reset to take effect)
        setTimeout(() => {
            forwardAnimation();
        }, 200); // Adjust the delay if needed
    }
}

// Listen for the first scroll event
window.addEventListener('scroll', handleScroll);
        
// Handle wheel event (to catch initial scroll)
document.addEventListener('wheel', handleScroll);
