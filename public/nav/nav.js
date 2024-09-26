document.addEventListener('DOMContentLoaded', () => {
    // Example JavaScript for handling dropdowns if needed
    // Currently, CSS handles dropdowns

    const dropdowns = document.querySelectorAll('.dropdown');

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', () => {
            dropdown.classList.toggle('active');
        });
    });
});
