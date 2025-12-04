window.updateNavContent = function(language) {
    const elements = {
        'nav-home': { en: 'Home', bn: 'হোম' },
        'nav-resources': { en: 'Resources', bn: 'রিসোর্স' },
        'nav-admission': { en: 'Admission', bn: 'ভর্তি' },
        'nav-courses': { en: 'Courses', bn: 'কোর্স' },
        'nav-exams': { en: 'Exams', bn: 'পরীক্ষা' },
        'nav-donation': { en: 'Donation', bn: 'অনুদান' },
        'nav-donor-list': { en: 'Donor List', bn: 'দাতা তালিকা' },
        'nav-history': { en: 'History', bn: 'ইতিহাস' },
        'nav-gallery': { en: 'Gallery', bn: 'গ্যালারি' },
        'nav-vision': { en: 'Our Vision', bn: 'আমাদের লক্ষ্য' },
        'nav-teachers-res': { en: 'Teachers', bn: 'শিক্ষকবৃন্দ' },
        'nav-lab': { en: 'Lab', bn: 'ল্যাব' },
        'nav-objective': { en: 'Objective', bn: 'উদ্দেশ্য' },
        'nav-teachers-lab': { en: 'Teachers', bn: 'শিক্ষকবৃন্দ' },
        'nav-qr': { en: 'QR Research', bn: 'কিউআর গবেষণা' },
        'nav-duas': { en: 'Duas & Supplications', bn: 'দোয়া ও মোনাজাত' },
        'nav-donors-board': { en: 'Donors & Executive Board', bn: 'দাতা ও নির্বাহী পর্ষদ' },
        'nav-exec-board': { en: 'Executive Board', bn: 'নির্বাহী পর্ষদ' },
        'nav-land-donors': { en: 'Land Donors', bn: 'জমি দাতা' },
        'nav-mosque': { en: 'Madrasha Mosque', bn: 'মাদ্রাসা মসজিদ' },
        'nav-contributors': { en: 'Key Contributors', bn: 'অন্যান্য গুরুত্বপূর্ণ অবদানকারী' },
        'nav-management': { en: 'Management Committee', bn: 'ব্যবস্থাপনা কমিটি' },
        'nav-about': { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
        'nav-contact': { en: 'Contact Us', bn: 'যোগাযোগ' },
        'nav-work': { en: 'Work with Us', bn: 'আমাদের সাথে কাজ করুন' }
    };

    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[language];
        }
    }
};

window.switchGlobalLanguage = function(language) {
    // Save preference
    localStorage.setItem('preferredLanguage', language);
    
    // Update Nav
    window.updateNavContent(language);
    
    // Dispatch event for other components/pages to listen to
    const event = new CustomEvent('languageChange', { detail: language });
    window.dispatchEvent(event);
};

// Initialize immediately
const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
window.updateNavContent(savedLanguage);

// Re-dispatch event on load for pages that might need it immediately
window.addEventListener('load', () => {
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    const event = new CustomEvent('languageChange', { detail: currentLang });
    window.dispatchEvent(event);
});