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

// Make updateBoardContent globally available
window.updateBoardContent = function(language) {
    const elements = {
        'board-title': {
            en: 'List of Murubbi, Muhtamim and Nayeb-e-Muhtamim',
            bn: 'মুরুব্বি, মুহতামিম এবং নায়েব-ই-মুহতামিমের তালিকা'
        },
        'intro-title': {
            en: '"Meet Our Esteemed Leadership"',
            bn: '"আমাদের সম্মানিত নেতৃবৃন্দের সাথে পরিচিত হন"'
        },
        'intro-description': {
            en: 'Our dedicated leaders have guided our institution with wisdom and devotion throughout the years.',
            bn: 'আমাদের নিবেদিত নেতৃবৃন্দ বছরের পর বছর ধরে প্রজ্ঞা ও ভক্তি সহকারে আমাদের প্রতিষ্ঠানকে পরিচালনা করেছেন।'
        },
        'murubbi-title': {
            en: 'Murubbi',
            bn: 'মুরুব্বি'
        },
        'murubbi1-name': {
            en: 'Hazrat Mohammadullah Hafezzi Huzoor (may Allah be pleased with him)',
            bn: 'হযরত মোহাম্মাদুল্লাহ হাফেজ্জি হুজুর রহ.'
        },
        'murubbi1-period': {
            en: '(1977 to 07/05/1987)',
            bn: '(১৯৭৭ থেকে ০৭/০৫/১৯৮৭)'
        },
        'murubbi2-name': {
            en: 'Allama Abdul Hai Paharpuri (may Allah be pleased with him)',
            bn: 'আল্লামা আব্দুল হাই পাহাড়পুরী রহ.'
        },
        'murubbi2-period': {
            en: '(1987 to 2016)',
            bn: '(১৯৮৭ থেকে ২০১৬)'
        },
        'murubbi3-name': {
            en: 'Allama Ataullah Hafezzi (may Allah be pleased with him)',
            bn: 'আল্লামা আতাউল্লাহ হাফেজ্জি রহ.'
        },
        'murubbi3-period': {
            en: '(2016 to 04/04/2025)',
            bn: '(২০১৬ থেকে ০৪/০৪/২০২৫)'
        },
        'murubbi4-name': {
            en: 'Maulana Ashrafuzzaman Paharpuri',
            bn: 'মাওলানা আশরাফুজ্জামান পাহাড়পুরী'
        },
        'murubbi4-period': {
            en: '(Continuing from 2025)',
            bn: '(২০২৫ থেকে বর্তমান)'
        },
        'muhtamim-title': {
            en: 'Muhtamim',
            bn: 'মুহতামিম'
        },
        'muhtamim1-name': {
            en: 'Martyr Qari Ubaidullah Hafezzi (may Allah have mercy on him)',
            bn: 'শহীদ ক্বারী উবায়দুল্লাহ হাফেজ্জি রহ.'
        },
        'muhtamim1-period': {
            en: '(1977 to 19/08/1980)',
            bn: '(১৯৭৭ থেকে ১৯/০৮/১৯৮০)'
        },
        'muhtamim2-name': {
            en: 'Allama Abdul Hai Paharpuri (may Allah have mercy on him)',
            bn: 'আল্লামা আব্দুল হাই পাহাড়পুরী রহ.'
        },
        'muhtamim2-period': {
            en: '(1980 to 1987)',
            bn: '(১৯৮০ থেকে ১৯৮৭)'
        },
        'muhtamim3-name': {
            en: 'Maulana Ahidul Haque',
            bn: 'মাওলানা আহিদুল হক'
        },
        'muhtamim3-period': {
            en: '(1987 to 1993)',
            bn: '(১৯৮৭ থেকে ১৯৯৩)'
        },
        'muhtamim4-name': {
            en: 'Allama Abdul Hai Paharpuri (may Allah have mercy on him)',
            bn: 'আল্লামা আব্দুল হাই পাহাড়পুরী রহ.'
        },
        'muhtamim4-period': {
            en: '(1993 to 2006)',
            bn: '(১৯৯৩ থেকে ২০০৬)'
        },
        'muhtamim5-name': {
            en: 'Hafez Abdul Ghani',
            bn: 'হাফেজ আব্দুল গনি'
        },
        'muhtamim5-period': {
            en: '(2006 to 2011)',
            bn: '(২০০৬ থেকে ২০১১)'
        },
        'muhtamim6-name': {
            en: 'Maulana Abdur Rashid',
            bn: 'মাওলানা আব্দুর রশীদ'
        },
        'muhtamim6-period': {
            en: '(2012)',
            bn: '(২০১২)'
        },
        'muhtamim7-name': {
            en: 'Mufti Mohammadullah Al-Hussaini',
            bn: 'মুফতি মোহাম্মাদুল্লাহ আল-হুসাইনী'
        },
        'muhtamim7-period': {
            en: '(2013 to 2016)',
            bn: '(২০১৩ থেকে ২০১৬)'
        },
        'muhtamim8-name': {
            en: 'Hafej Mawlana Mufti Anamul Haque Sharif',
            bn: 'হাফেজ মাওলানা মুফতি আনামুল হক শরীফ'
        },
        'muhtamim8-period': {
            en: '(Continuing from 2017)',
            bn: '(২০১৭ থেকে বর্তমান)'
        },
        'nayeb-title': {
            en: 'Nayeb-e-Muhtamim',
            bn: 'নায়েব-ই-মুহতামিম'
        },
        'nayeb1-name': {
            en: 'Maulana Fazlur Rahman (may Allah have mercy on him), Nagarpara',
            bn: 'মাওলানা ফজলুর রহমান রহ., নগরপাড়া'
        },
        'nayeb1-period': {
            en: '(1977 to 1979)',
            bn: '(১৯৭৭ থেকে ১৯৭৯)'
        },
        'nayeb2-name': {
            en: 'Maulana Abdul Malek (may Allah have mercy on him)',
            bn: 'মাওলানা আব্দুল মালেক রহ.'
        },
        'nayeb2-period': {
            en: '(1979 to 2010)',
            bn: '(১৯৭৯ থেকে ২০১০)'
        },
        'nayeb3-name': {
            en: 'Mawlana Mufti Monir Hossain',
            bn: 'মাওলানা মুফতি মনির হোসাইন'
        },
        'nayeb3-period': {
            en: '(2011 to 2012)',
            bn: '(২০১১ থেকে ২০১২)'
        },
        'nayeb4-name': {
            en: 'Hafej Mawlana Mufassir Hossain Ahmed',
            bn: 'হাফেজ মাওলানা মুফাসসির হোসাইন আহমেদ'
        },
        'nayeb4-period': {
            en: '(Continuing from 2013)',
            bn: '(২০১৩ থেকে বর্তমান)'
        }
    };

    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element && translations[language]) {
            element.innerHTML = translations[language];
        }
    }
}

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateBoardContent(event.detail);
});

// Initialize with current stored language or default to English
const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
updateBoardContent(currentLanguage);
