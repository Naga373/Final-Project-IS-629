const profilePic = document.getElementById("profile-pic");
const dropdownMenu = document.getElementById("dropdown-menu");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

// Toggle dropdown visibility
profilePic.addEventListener("click", () => {
    dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
});

// Toggle mobile menu visibility
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

document.getElementById("explore-region-btn").addEventListener("click", () => {
    alert("Explore Regions: United States, Canada, United Kingdom, Australia, India");
});

// Get the toggle button
const darkModeToggle = document.getElementById("darkModeToggle");

// Add an event listener for click
darkModeToggle.addEventListener("click", () => {
    // Toggle the 'dark-mode' class on the body
    document.body.classList.toggle("dark-mode");

    // Optionally, store the user's preference in localStorage
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
});

// On page load, check the stored theme
window.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
});
