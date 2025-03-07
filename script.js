// Ensure the script runs after the page loads
document.addEventListener("DOMContentLoaded", function () {
    // Dynamically update the copyright year in the footer
    document.getElementById("year").textContent = new Date().getFullYear();

    // Highlight the active navigation link
    const currentPage = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active");
        }
    });
});
