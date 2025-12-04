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

// Make updateCommitteeContent globally available
window.updateCommitteeContent = function(language) {
    const elements = {
        'committee-title': {
            en: 'List of Management Committee Members',
            bn: 'ব্যবস্থাপনা কমিটির সদস্যদের তালিকা'
        },
        'intro-title': {
            en: '"Our Management Team"',
            bn: '"আমাদের ব্যবস্থাপনা দল"'
        },
        'intro-description': {
            en: 'The dedicated team responsible for the smooth operation and strategic direction of our institution.',
            bn: 'আমাদের প্রতিষ্ঠানের সুষ্ঠু পরিচালনা এবং কৌশলগত নির্দেশনার জন্য দায়ী নিবেদিত দল।'
        },
        'section-title': {
            en: 'Committee Members',
            bn: 'কমিটির সদস্যবৃন্দ'
        },
        'member1-name': { en: 'Member Name 1', bn: 'সদস্যের নাম ১' },
        'member1-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member1-role': { en: 'President', bn: 'সভাপতি' },
        'member1-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member2-name': { en: 'Member Name 2', bn: 'সদস্যের নাম ২' },
        'member2-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member2-role': { en: 'Secretary', bn: 'সম্পাদক' },
        'member2-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member3-name': { en: 'Member Name 3', bn: 'সদস্যের নাম ৩' },
        'member3-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member3-role': { en: 'Joint President', bn: 'সহ-সভাপতি' },
        'member3-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member4-name': { en: 'Member Name 4', bn: 'সদস্যের নাম ৪' },
        'member4-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member4-role': { en: 'Joint President', bn: 'সহ-সভাপতি' },
        'member4-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member5-name': { en: 'Member Name 5', bn: 'সদস্যের নাম ৫' },
        'member5-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member5-role': { en: 'Joint President', bn: 'সহ-সভাপতি' },
        'member5-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member6-name': { en: 'Member Name 6', bn: 'সদস্যের নাম ৬' },
        'member6-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member6-role': { en: 'Joint President', bn: 'সহ-সভাপতি' },
        'member6-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member7-name': { en: 'Member Name 7', bn: 'সদস্যের নাম ৭' },
        'member7-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member7-role': { en: 'Joint President', bn: 'সহ-সভাপতি' },
        'member7-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member8-name': { en: 'Member Name 8', bn: 'সদস্যের নাম ৮' },
        'member8-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member8-role': { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' },
        'member8-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member9-name': { en: 'Member Name 9', bn: 'সদস্যের নাম ৯' },
        'member9-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member9-role': { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' },
        'member9-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member10-name': { en: 'Member Name 10', bn: 'সদস্যের নাম ১০' },
        'member10-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member10-role': { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' },
        'member10-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member11-name': { en: 'Member Name 11', bn: 'সদস্যের নাম ১১' },
        'member11-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member11-role': { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' },
        'member11-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member12-name': { en: 'Member Name 12', bn: 'সদস্যের নাম ১২' },
        'member12-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member12-role': { en: 'Joint Secretary', bn: 'যুগ্ম সম্পাদক' },
        'member12-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member13-name': { en: 'Member Name 13', bn: 'সদস্যের নাম ১৩' },
        'member13-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member13-role': { en: 'Treasurer', bn: 'কোষাধ্যক্ষ' },
        'member13-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member14-name': { en: 'Member Name 14', bn: 'সদস্যের নাম ১৪' },
        'member14-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member14-role': { en: 'Member', bn: 'সদস্য' },
        'member14-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member15-name': { en: 'Member Name 15', bn: 'সদস্যের নাম ১৫' },
        'member15-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member15-role': { en: 'Member', bn: 'সদস্য' },
        'member15-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member16-name': { en: 'Member Name 16', bn: 'সদস্যের নাম ১৬' },
        'member16-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member16-role': { en: 'Member', bn: 'সদস্য' },
        'member16-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member17-name': { en: 'Member Name 17', bn: 'সদস্যের নাম ১৭' },
        'member17-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member17-role': { en: 'Member', bn: 'সদস্য' },
        'member17-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member18-name': { en: 'Member Name 18', bn: 'সদস্যের নাম ১৮' },
        'member18-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member18-role': { en: 'Member', bn: 'সদস্য' },
        'member18-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member19-name': { en: 'Member Name 19', bn: 'সদস্যের নাম ১৯' },
        'member19-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member19-role': { en: 'Member', bn: 'সদস্য' },
        'member19-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member20-name': { en: 'Member Name 20', bn: 'সদস্যের নাম ২০' },
        'member20-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member20-role': { en: 'Member', bn: 'সদস্য' },
        'member20-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' },
        'member21-name': { en: 'Member Name 21', bn: 'সদস্যের নাম ২১' },
        'member21-designation': { en: 'Businessman', bn: 'ব্যবসায়ী' },
        'member21-role': { en: 'Member', bn: 'সদস্য' },
        'member21-period': { en: 'Period: 2024-2025', bn: 'সময়কাল: ২০২৪-২০২৫' }
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
    updateCommitteeContent(language);
    // Update nav if the function is available from nav.js
    if (typeof window.setLanguage === 'function') {
        window.setLanguage(language);
    }
};

// Initialize English on page load
window.addEventListener('load', function() {
    changeLanguage('en');
});
