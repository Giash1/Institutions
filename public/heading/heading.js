// heading.js

document.addEventListener('DOMContentLoaded', function () {
    const loginLink = document.querySelector('#login a');

    // Ensure the link is working by logging the event
    if (loginLink) {
        loginLink.addEventListener('click', function (event) {
            // Uncomment this line if it is present and unnecessary
            // event.preventDefault(); // Comment out to ensure default behavior

            console.log('Login link clicked:', loginLink.href); // Logs when clicked
        });
    } else {
        console.error('Login link not found');
    }
});
