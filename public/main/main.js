document.addEventListener('DOMContentLoaded', () => {
    // Select all .main-box elements
    const boxes = document.querySelectorAll('.main-box');

    // Loop through each box and add event listeners for hover effects
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.style.transform = 'scale(1.05)'; // Add hover effect
        });

        box.addEventListener('mouseleave', () => {
            box.style.transform = 'scale(1)'; // Revert back to normal
        });
    });
});
