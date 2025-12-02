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

// Global function to handle language switch for both page and nav
window.changeLanguage = function(language) {
    updateMosqueContent(language);
    // Update nav if the function is available from nav.js
    if (typeof window.setLanguage === 'function') {
        window.setLanguage(language);
    }
};

function updateMosqueContent(language) {
    const elements = {
        'mosque-title': {
            en: 'Baitul Huda Jame Masjid (Madrasa Mosque)',
            bn: 'বাইতুল হুদা জামে মসজিদ (মাদ্রাসা মসজিদ)'
        },
        'donor-name': {
            en: 'Late Alhaj Abdul Motalib Saheb',
            bn: 'মরহুম আলহাজ্ব আব্দুল মোতালিব সাহেব'
        },
        'role-founder': {
            en: 'Founder of Baitul Huda Jame Masjid',
            bn: 'বাইতুল হুদা জামে মসজিদের প্রতিষ্ঠাতা'
        },
        'role-president': {
            en: 'Former President of Poschimgaon Madrasha',
            bn: 'পশ্চিমগাঁও মাদ্রাসার সাবেক সভাপতি'
        },
        'donor-profession': {
            en: 'Founder and Proprietor of Shohag Community Center, 91 New Eskaton Road, Dhaka-1000, Bangladesh',
            bn: 'শোহাগ কমিউনিটি সেন্টারের প্রতিষ্ঠাতা ও স্বত্বাধিকারী, ৯১ নিউ ইস্কাটন রোড, ঢাকা-১০০০, বাংলাদেশ'
        },
        'bio-title-philanthropy': {
            en: 'Philanthropy & Contributions',
            bn: 'জনহিতকর কাজ ও অবদান'
        },
        'bio-p1': {
            en: 'Alhaj Abdul Motalib Saheb was a highly respected, generous, and influential figure in society. He dedicated his life to social welfare, philanthropy, and community development. Among his notable contributions was the single-handed funding for the construction of Baitul Huda Jame Masjid (Madrasa Mosque), as well as the provision of a luxury flat (2002 sq. ft with parking) to support community initiatives.',
            bn: 'আলহাজ্ব আব্দুল মোতালিব সাহেব সমাজে অত্যন্ত সম্মানিত, উদার এবং প্রভাবশালী ব্যক্তিত্ব ছিলেন। তিনি তার জীবন সমাজকল্যাণ, জনহিতকর কাজ এবং সম্প্রদায়ের উন্নয়নে উৎসর্গ করেছিলেন। তার উল্লেখযোগ্য অবদানের মধ্যে ছিল বাইতুল হুদা জামে মসজিদ (মাদ্রাসা মসজিদ) নির্মাণের জন্য একক অর্থায়ন, পাশাপাশি সম্প্রদায়ের উদ্যোগকে সমর্থন করার জন্য একটি বিলাসবহুল ফ্ল্যাট (২০০২ বর্গফুট পার্কিং সহ) প্রদান।'
        },
        'bio-p2': {
            en: 'His philanthropic efforts were recognized on significant occasions, including 10/03/2017 and 31/08/2022, which marked key milestones in his charitable projects.',
            bn: 'তার জনহিতকর প্রচেষ্টা ১০/০৩/২০১৭ এবং ৩১/০৮/২০২২ সহ গুরুত্বপূর্ণ অনুষ্ঠানে স্বীকৃত হয়েছিল, যা তার দাতব্য প্রকল্পের মূল মাইলফলক হিসেবে চিহ্নিত।'
        },
        'bio-title-leadership': {
            en: 'Leadership & Service',
            bn: 'নেতৃত্ব ও সেবা'
        },
        'bio-p3': {
            en: 'Born on 1st January 1940, Alhaj Abdul Motalib Saheb played an active role not only in social work but also in political leadership. He served as the President of the Madrasha for a long period, during which he oversaw significant progress and development of the institution. His dedication to education and religious development left a lasting legacy in Dhaka and beyond.',
            bn: '১লা জানুয়ারি ১৯৪০ সালে জন্মগ্রহণকারী আলহাজ্ব আব্দুল মোতালিব সাহেব শুধুমাত্র সমাজকর্মেই নয়, রাজনৈতিক নেতৃত্বেও সক্রিয় ভূমিকা পালন করেছিলেন। তিনি দীর্ঘ সময় ধরে মাদ্রাসার সভাপতি হিসেবে দায়িত্ব পালন করেন এবং এই সময়ে প্রতিষ্ঠানের উল্লেখযোগ্য অগ্রগতি ও উন্নয়ন তদারকি করেন। শিক্ষা ও ধর্মীয় উন্নয়নে তার নিবেদন ঢাকা এবং এর বাইরেও দীর্ঘস্থায়ী প্রভাব ফেলেছে।'
        },
        'bio-title-legacy': {
            en: 'Family & Legacy',
            bn: 'পরিবার ও উত্তরাধিকার'
        },
        'bio-p4': {
            en: 'He passed away on 1st February 2024, leaving behind a devoted family of two sons and two daughters. His elder son, Abdullah Al Mamun Shab, continues his father’s legacy by actively contributing to the welfare of the madrasa and serving as the Sub-President of the Madrasa Managing Board. Through Abdullah Al Mamun Shab and his family, the vision and mission of Alhaj Abdul Motalib Saheb continue to flourish, inspiring generations to come.',
            bn: 'তিনি ১লা ফেব্রুয়ারি ২০২৪ সালে ইন্তেকাল করেন, রেখে যান দুই ছেলে ও দুই মেয়ের এক নিবেদিত পরিবার। তার বড় ছেলে, আব্দুল্লাহ আল মামুন সাব, মাদ্রাসার কল্যাণে সক্রিয়ভাবে অবদান রেখে এবং মাদ্রাসা পরিচালনা পর্ষদের সহ-সভাপতি হিসেবে দায়িত্ব পালন করে তার বাবার উত্তরাধিকার অব্যাহত রেখেছেন। আব্দুল্লাহ আল মামুন সাব এবং তার পরিবারের মাধ্যমে আলহাজ্ব আব্দুল মোতালিব সাহেবের দর্শন ও লক্ষ্য বিকশিত হতে থাকে, যা আগামী প্রজন্মকে অনুপ্রাণিত করবে।'
        },
        'bio-p5': {
            en: 'Alhaj Abdul Motalib Saheb will always be remembered as a compassionate leader, a generous philanthropist, and a pioneer in social and religious welfare. His life stands as a shining example of selfless service and unwavering commitment to community development.',
            bn: 'আলহাজ্ব আব্দুল মোতালিব সাহেব সর্বদা একজন সহানুভূতিশীল নেতা, উদার জনহিতৈষী এবং সামাজিক ও ধর্মীয় কল্যাণের অগ্রদূত হিসেবে স্মরণীয় হয়ে থাকবেন। তার জীবন নিঃস্বার্থ সেবা এবং সম্প্রদায়ের উন্নয়নে অবিচল প্রতিশ্রুতির এক উজ্জ্বল দৃষ্টান্ত হিসেবে দাঁড়িয়ে আছে।'
        }
    };

    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[language];
        }
    }
}

// Initialize English on page load
window.addEventListener('load', function() {
    changeLanguage('en');
});
