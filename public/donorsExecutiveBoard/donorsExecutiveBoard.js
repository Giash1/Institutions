function loadHTML(section, filePath, cssPath, jsPath) {
    const baseUrl = window.location.origin;
    
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = baseUrl + cssPath;
        document.head.appendChild(link);
    }

    fetch(baseUrl + filePath)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(section);
            if (element) {
                element.innerHTML = data;
                if (jsPath) {
                    const script = document.createElement('script');
                    script.src = baseUrl + jsPath;
                    document.body.appendChild(script);
                }
            }
        })
        .catch(err => {
            console.error(`Error loading ${filePath}:`, err);
        });
}

loadHTML('heading', '/heading/heading.html', '/heading/heading.css', '/heading/heading.js');
loadHTML('nav', '/nav/nav.html', '/nav/nav.css', '/nav/nav.js');
loadHTML('footer', '/footer/footer.html', '/footer/footer.css', '/footer/footer.js');

function setLanguage(language) {
    const elements = {
        'main-title': {
            en: 'Donors & Executive Board',
            bn: 'দাতা ও নির্বাহী পর্ষদ'
        },
        'intro-description': {
            en: 'Explore the dedicated individuals and organizations that support our institution through their generous contributions and wise leadership.',
            bn: 'আমাদের প্রতিষ্ঠানকে তাদের উদার অবদান এবং বুদ্ধিমান নেতৃত্বের মাধ্যমে সমর্থনকারী নিবেদিত ব্যক্তি এবং সংস্থাগুলি সম্পর্কে জানুন।'
        },
        'card1-title': {
            en: 'Executive Board',
            bn: 'নির্বাহী পর্ষদ'
        },
        'card1-description': {
            en: 'Meet the leaders who guide our institution with wisdom and dedication.',
            bn: 'আমাদের প্রতিষ্ঠানকে প্রজ্ঞা ও নিবেদনের সাথে পরিচালনাকারী নেতাদের সাথে পরিচিত হন।'
        },
        'card2-title': {
            en: 'Land Donors',
            bn: 'জমি দাতা'
        },
        'card2-description': {
            en: 'Honoring those who donated land for our Madrasha and Mosque.',
            bn: 'আমাদের মাদ্রাসা ও মসজিদের জন্য জমি দানকারীদের সম্মান।'
        },
        'card3-title': {
            en: 'Key Contributors',
            bn: 'প্রধান অবদানকারী'
        },
        'card3-description': {
            en: 'Recognizing our generous financial supporters and donors.',
            bn: 'আমাদের উদার আর্থিক সমর্থনকারী এবং দাতাদের স্বীকৃতি।'
        },
        'card4-title': {
            en: 'Management Committee',
            bn: 'ব্যবস্থাপনা কমিটি'
        },
        'card4-description': {
            en: 'Our dedicated committee members managing daily operations.',
            bn: 'দৈনন্দিন কার্যক্রম পরিচালনাকারী আমাদের নিবেদিত কমিটির সদস্যরা।'
        }
    };

    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element && translations[language]) {
            element.innerHTML = translations[language];
        }
    }
}

// Wait for DOM to be ready before setting language
window.addEventListener('load', () => {
    setLanguage('en');
});