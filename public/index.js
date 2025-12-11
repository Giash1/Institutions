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

// Ensure the audio element plays on page load
document.addEventListener('DOMContentLoaded', () => {
    const audioElement = document.getElementById('quran-recitation');
    if (audioElement) {
        audioElement.play().catch(error => {
            console.error('Error playing audio:', error);
        });
    }

    // Set initial state for "More" content and button text
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    if (moreContent && moreBtn) {
        moreContent.style.display = "none";
        moreBtn.innerText = "More";
    }
});

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

// Function to set the language
function updateIndexContent(language) {
    const elements = {
        'heading-title': {
            en: 'Welcome to Poschim Gaon Madrasha -E- Islamia Jameul Ulum',
            bn: 'পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুমে স্বাগতম'
        },
        'heading-description': {
            en: 'Providing quality Islamic education along with modern academic subjects.',
            bn: 'আধুনিক একাডেমিক বিষয়গুলির পাশাপাশি মানসম্পন্ন ইসলামী শিক্ষা প্রদান।'
        }
        // Add more elements as needed
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element) {
            if (elements[id][language]) {
                element.textContent = elements[id][language];
            }
        }
    }
}

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateIndexContent(event.detail);
});

// Add event listeners for language buttons
document.addEventListener("DOMContentLoaded", () => {
    // Initialize language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'bn';
    updateIndexContent(savedLanguage);


    // Set initial state for "More" content and button text
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    if (moreContent && moreBtn) {
        moreContent.style.display = "none";
        moreBtn.innerText = "More";
    }
});
