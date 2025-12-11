function loadHTML(section, filePath, cssPath, jsPath) {
    console.log(`Attempting to load ${filePath} into section #${section}`);

    // Load CSS if provided
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        link.onload = () => console.log(`Loaded CSS: ${cssPath}`);
        link.onerror = (err) => console.error(`Failed to load CSS: ${cssPath}`, err);
        document.head.appendChild(link);
    }

    // Fetch the HTML content and insert it into the specified section
    fetch(filePath)
        .then(response => {
            console.log(`Fetching ${filePath}: Status ${response.status}`);
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}, status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const sectionElement = document.getElementById(section);
            if (!sectionElement) {
                throw new Error(`Section #${section} not found in the DOM.`);
            }
            sectionElement.innerHTML = data;
            console.log(`Loaded ${filePath} successfully into #${section}`);

            // Load JavaScript if provided
            if (jsPath) {
                const script = document.createElement('script');
                script.src = jsPath;
                script.onload = () => console.log(`Loaded script: ${jsPath}`);
                script.onerror = (err) => console.error(`Failed to load script: ${jsPath}`, err);
                document.body.appendChild(script);
            }
        })
        .catch(err => {
            console.error(`Error loading ${filePath}:`, err);
            alert(`Error loading ${filePath}: ${err.message}`);
        });
}

// Test each loadHTML call individually
loadHTML('heading', '../../heading/heading.html', '../../heading/heading.css', '../../heading/heading.js');
loadHTML('nav', '../../nav/nav.html', '../../nav/nav.css', '../../nav/nav.js');
loadHTML('footer', '../../footer/footer.html', '../../footer/footer.css', '../../footer/footer.js');

function updateLoginContent(language) {
    const elements = {
        'login-title': {
            en: 'Login',
            bn: 'লগইন'
        },
        'username-label': {
            en: 'Username:',
            bn: 'ব্যবহারকারীর নাম:'
        },
        'password-label': {
            en: 'Password:',
            bn: 'পাসওয়ার্ড:'
        },
        'login-btn': {
            en: 'Login',
            bn: 'লগইন'
        },
        'register-link-text': {
            en: 'Don\'t have an account? <a href="../register/register.html" id="register-link">Register here</a>',
            bn: 'কোন অ্যাকাউন্ট নেই? <a href="../register/register.html" id="register-link">এখানে নিবন্ধন করুন</a>'
        }
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = elements[id][language];
        }
    }
}

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateLoginContent(event.detail);
});

// Initialize with current stored language or default to English
document.addEventListener("DOMContentLoaded", () => {
    const currentLanguage = localStorage.getItem('preferredLanguage') || 'bn';
    updateLoginContent(currentLanguage);
});
