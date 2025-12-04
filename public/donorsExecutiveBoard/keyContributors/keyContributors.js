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

// Handle image loading errors
function handleImageError(img) {
    const placeholder = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="150" height="150"%3E%3Crect fill="%23e0e0e0" width="150" height="150"/%3E%3Ccircle cx="75" cy="60" r="25" fill="%23999"/%3E%3Cpath d="M 40 100 Q 75 80 110 100 L 110 150 L 40 150 Z" fill="%23999"/%3E%3C/svg%3E';
    img.src = placeholder;
    img.onerror = null;
}

// Set up image error handlers after DOM loads
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.teacher-image');
    images.forEach(img => {
        img.onerror = function() {
            handleImageError(this);
        };
    });
});

// Make updateContributorsContent globally available
window.updateContributorsContent = function(language) {
    const elements = {
        'contributors-title': {
            en: 'List of Key Contributors',
            bn: 'মূল অবদানকারীদের তালিকা'
        },
        'intro-title': {
            en: '"Our Pillars of Support"',
            bn: '"আমাদের সমর্থনের স্তম্ভ"'
        },
        'intro-description': {
            en: 'We extend our deepest gratitude to the individuals whose significant contributions have helped shape our institution.',
            bn: 'আমরা সেই ব্যক্তিদের প্রতি গভীর কৃতজ্ঞতা প্রকাশ করছি যাদের উল্লেখযোগ্য অবদান আমাদের প্রতিষ্ঠানকে গড়ে তুলতে সাহায্য করেছে।'
        },
        'section-title': {
            en: 'Key Contributors',
            bn: 'মূল অবদানকারী'
        },
        // Contributor 1
        'contributor1-name': { en: 'Contributor Name 1', bn: 'অবদানকারীর নাম ১' },
        'contributor1-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor1-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor1-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 2
        'contributor2-name': { en: 'Contributor Name 2', bn: 'অবদানকারীর নাম ২' },
        'contributor2-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor2-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor2-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 3
        'contributor3-name': { en: 'Contributor Name 3', bn: 'অবদানকারীর নাম ৩' },
        'contributor3-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor3-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor3-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 4
        'contributor4-name': { en: 'Contributor Name 4', bn: 'অবদানকারীর নাম ৪' },
        'contributor4-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor4-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor4-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 5
        'contributor5-name': { en: 'Contributor Name 5', bn: 'অবদানকারীর নাম ৫' },
        'contributor5-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor5-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor5-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 6
        'contributor6-name': { en: 'Contributor Name 6', bn: 'অবদানকারীর নাম ৬' },
        'contributor6-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor6-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor6-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 7
        'contributor7-name': { en: 'Contributor Name 7', bn: 'অবদানকারীর নাম ৭' },
        'contributor7-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor7-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor7-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 8
        'contributor8-name': { en: 'Contributor Name 8', bn: 'অবদানকারীর নাম ৮' },
        'contributor8-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor8-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor8-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 9
        'contributor9-name': { en: 'Contributor Name 9', bn: 'অবদানকারীর নাম ৯' },
        'contributor9-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor9-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor9-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 10
        'contributor10-name': { en: 'Contributor Name 10', bn: 'অবদানকারীর নাম ১০' },
        'contributor10-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor10-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor10-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 11
        'contributor11-name': { en: 'Contributor Name 11', bn: 'অবদানকারীর নাম ১১' },
        'contributor11-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor11-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor11-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 12
        'contributor12-name': { en: 'Contributor Name 12', bn: 'অবদানকারীর নাম ১২' },
        'contributor12-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor12-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor12-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 13
        'contributor13-name': { en: 'Contributor Name 13', bn: 'অবদানকারীর নাম ১৩' },
        'contributor13-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor13-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor13-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 14
        'contributor14-name': { en: 'Contributor Name 14', bn: 'অবদানকারীর নাম ১৪' },
        'contributor14-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor14-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor14-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 15
        'contributor15-name': { en: 'Contributor Name 15', bn: 'অবদানকারীর নাম ১৫' },
        'contributor15-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor15-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor15-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 16
        'contributor16-name': { en: 'Contributor Name 16', bn: 'অবদানকারীর নাম ১৬' },
        'contributor16-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor16-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor16-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 17
        'contributor17-name': { en: 'Contributor Name 17', bn: 'অবদানকারীর নাম ১৭' },
        'contributor17-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor17-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor17-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 18
        'contributor18-name': { en: 'Contributor Name 18', bn: 'অবদানকারীর নাম ১৮' },
        'contributor18-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor18-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor18-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 19
        'contributor19-name': { en: 'Contributor Name 19', bn: 'অবদানকারীর নাম ১৯' },
        'contributor19-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor19-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor19-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 20
        'contributor20-name': { en: 'Contributor Name 20', bn: 'অবদানকারীর নাম ২০' },
        'contributor20-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor20-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor20-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 21
        'contributor21-name': { en: 'Contributor Name 21', bn: 'অবদানকারীর নাম ২১' },
        'contributor21-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor21-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor21-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 22
        'contributor22-name': { en: 'Contributor Name 22', bn: 'অবদানকারীর নাম ২২' },
        'contributor22-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor22-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor22-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 23
        'contributor23-name': { en: 'Contributor Name 23', bn: 'অবদানকারীর নাম ২৩' },
        'contributor23-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor23-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor23-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 24
        'contributor24-name': { en: 'Contributor Name 24', bn: 'অবদানকারীর নাম ২৪' },
        'contributor24-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor24-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor24-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 25
        'contributor25-name': { en: 'Contributor Name 25', bn: 'অবদানকারীর নাম ২৫' },
        'contributor25-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor25-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor25-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 26
        'contributor26-name': { en: 'Contributor Name 26', bn: 'অবদানকারীর নাম ২৬' },
        'contributor26-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor26-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor26-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 27
        'contributor27-name': { en: 'Contributor Name 27', bn: 'অবদানকারীর নাম ২৭' },
        'contributor27-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor27-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor27-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 28
        'contributor28-name': { en: 'Contributor Name 28', bn: 'অবদানকারীর নাম ২৮' },
        'contributor28-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor28-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor28-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 29
        'contributor29-name': { en: 'Contributor Name 29', bn: 'অবদানকারীর নাম ২৯' },
        'contributor29-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor29-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor29-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' },
        // Contributor 30
        'contributor30-name': { en: 'Contributor Name 30', bn: 'অবদানকারীর নাম ৩০' },
        'contributor30-birth': { en: 'Birth: 01-01-1970', bn: 'জন্ম: ০১-০১-১৯৭০' },
        'contributor30-death': { en: 'Death: 01-01-2020', bn: 'মৃত্যু: ০১-০১-২০২০' },
        'contributor30-desc': { en: 'Significant Contribution', bn: 'উল্লেখযোগ্য অবদান' }
    };

    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[language];
        }
    }
}

// Global function to handle language switch for both page and nav
window.changeLanguage = function(language) {
    updateContributorsContent(language);
    // Update nav if the function is available from nav.js
    if (typeof window.setLanguage === 'function') {
        window.setLanguage(language);
    }
};

// Initialize English on page load
window.addEventListener('load', function() {
    changeLanguage('en');
});
