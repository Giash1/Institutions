// Function to load HTML content into a specific element
function loadHTML(section, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(section).innerHTML = data;
            // After loading HTML, load the respective scripts and styles if needed
            if (section === 'nav') {
                loadNavScripts(); // Call the function to load scripts and styles specific to the nav
            }
        })
        .catch(err => console.error('Error loading HTML:', err));
}

// Load the different sections
loadHTML('heading', './heading/heading.html');
loadHTML('nav', './nav/nav.html');
loadHTML('main', './main/main.html');
loadHTML('footer', './footer/footer.html');

// Load additional JavaScript and CSS if needed
const scriptFiles = ['./heading/heading.js', './nav/nav.js', './main/main.js', './footer/footer.js'];
scriptFiles.forEach(file => {
    const script = document.createElement('script');
    script.src = file;
    document.body.appendChild(script);
});

const cssFiles = ['./heading/heading.css', './nav/nav.css', './main/main.css', './footer/footer.css'];
cssFiles.forEach(file => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = file;
    document.head.appendChild(link);
});
