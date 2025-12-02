function setLanguage(language) {
    const elements = {
        'nav-home': { en: 'Home', bn: 'হোম' },
        'nav-about': { en: 'About Us', bn: 'আমাদের সম্পর্কে' },
        'nav-history': { en: 'History', bn: 'ইতিহাস' },
        'nav-mission': { en: 'Mission & Vision', bn: 'লক্ষ্য ও উদ্দেশ্য' },
        'nav-achievements': { en: 'Achievements', bn: 'অর্জন' },
        'nav-academics': { en: 'Academics', bn: 'শিক্ষাবিষয়ক' },
        'nav-courses': { en: 'Courses Offered', bn: 'কোর্স সমূহ' },
        'nav-curriculum': { en: 'Curriculum', bn: 'পাঠ্যক্রম' },
        'nav-faculty': { en: 'Faculty', bn: 'শিক্ষকমণ্ডলী' },
        'nav-students': { en: 'Students', bn: 'শিক্ষার্থী' },
        'nav-admissions': { en: 'Admissions', bn: 'ভর্তি' },
        'nav-student-life': { en: 'Student Life', bn: 'শিক্ষার্থী জীবন' },
        'nav-alumni': { en: 'Alumni', bn: 'প্রাক্তন শিক্ষার্থী' },
        'nav-facilities': { en: 'Facilities', bn: 'সুবিধা' },
        'nav-library': { en: 'Library', bn: 'লাইব্রেরি' },
        'nav-hostel': { en: 'Hostel', bn: 'হোস্টেল' },
        'nav-lab': { en: 'Lab', bn: 'ল্যাব' },
        'nav-donors': { en: 'Donors & Board', bn: 'দাতা ও পর্ষদ' },
        'nav-contact': { en: 'Contact Us', bn: 'যোগাযোগ' }
    };

    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.textContent = translations[language];
        }
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setLanguage('en');
});