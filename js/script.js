document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const nav = document.querySelector(".nav-links");

    if (menuToggle && nav) {
        console.log("Menu toggle found, adding event listener.");
        
        menuToggle.addEventListener("click", function () {
            console.log("Hamburger menu clicked!");
            nav.classList.toggle("nav-active");
            console.log("Current nav classList:", nav.classList);
        });

        // 👇 Auto-close overlay menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('nav-active');
            });
        });
    } else {
        console.error("Error: menu-toggle or nav-links not found in DOM.");
    }

    // Update the footer year automatically
    const yearElement = document.getElementById("year");
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    } else {
        console.error("Error: #year element not found in DOM.");
    }
});
