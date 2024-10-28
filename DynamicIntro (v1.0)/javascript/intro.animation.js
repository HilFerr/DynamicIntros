document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('movingTitle');
    const navBrand = document.getElementById('navbarBrand');
    const navbar = document.querySelector('.navbar'); // Selects a navbar
    const scrollThreshold = 50; // Value to detect the scroll

    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > scrollThreshold) {
            // Scrolling down beyond the threshold
            title.classList.add('scrolled');
            navbar.classList.add('scrolled'); // Adds a class to the navbar
            navBrand.textContent = title.textContent; // Copies the text to the navbar
            
        } else {
            // Scrolling down beyond the threshold
            title.classList.remove('scrolled');
            navbar.classList.remove('scrolled'); // Removes the class to the navbar
            navBrand.textContent = ''; // Limps the text from the navbar
        }
    });
});
