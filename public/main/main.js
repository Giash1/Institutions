document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM fully loaded and parsed");

    // Load navigation scripts
    loadNavScripts();

    // Hover effect for .main-box
    const boxes = document.querySelectorAll(".main-box");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)"; // Add hover effect
            box.style.transition = "transform 0.3s ease"; // Smooth transition
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)"; // Revert back to normal
        });
    });

    console.log("✅ Hover effects added to main-box elements");

    // Initialize language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'bn';
    updateMainContent(savedLanguage);
});

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateMainContent(event.detail);
});


// Define `loadNavScripts` function
function loadNavScripts() {
    console.log("✅ Navigation scripts loaded!");
    // Add your navigation-related JavaScript here
}

// Function to set the language
function updateMainContent(language) {
    const elements = {
        'main-title': {
            en: 'Welcome to Poschim Gaon Madrasha -E- Islamia Jameul Ulum',
            bn: 'পশ্চিমগাঁও মাদ্রাসা-ই-ইসলামিয়া জামেউল উলুম'
        },
        'main-description': {
            en: 'Providing quality Islamic education along with modern academic subjects.',
            bn: 'আধুনিক একাডেমিক বিষয়গুলির পাশাপাশি মানসম্পন্ন ইসলামী শিক্ষা প্রদান।'
        },
        'support-title': {
            en: 'Support Islamic Education',
            bn: 'ইসলামী শিক্ষায় সহায়তা করুন'
        },
        'support-description': {
            en: 'For over 50 years, Paschimgaon Madrasa has provided Ilm-e-Din education to 360 students, including 32 orphans and 30 underprivileged children.',
            bn: '৫০ বছর যাবৎ পশ্চিমগাঁও মাদ্রাসা শিক্ষার্থীদের  ইলমে দ্বীন শিক্ষা দিয়ে আসছে,বর্তমানে শিক্ষার্থী সংখ্যা ৩৬০ জন যার মধ্য ৩২ জন এতিম এবং ৩০ জন সুবিধা বঞ্চিত শিশু রয়েছে, প্রতিবছরই এদের সংখ্যা বৃদ্ধি পাচ্ছে।'
        },
        'impact-title': {
            en: 'Make an Impact',
            bn: 'প্রভাব ফেলুন'
        },
        'impact-description': {
            en: 'With annual expenses of one crore taka, we rely on your halal donations to sustain Lillah (Zakat) and General Funds. Support us today!',
            bn: 'বার্ষিক এক কোটি টাকা খরচ হওয়ায়, আমরা লিল্লাহ (যাকাত) এবং সাধারণ তহবিল টিকিয়ে রাখতে আপনার হালাল দানের উপর নির্ভর করি। আজই আমাদের সমর্থন করুন!'
        },
        'islamic-institution-title': {
            en: 'Islamic Institution Overview',
            bn: 'ইসলামী প্রতিষ্ঠান ওভারভিউ'
        },
        'islamic-institution-description': {
            en: 'Poschim Gaon Madrasha-i-Islamia Jameul Ulom is an Islamic institution where students can deeply learn Islam and its teachings. Our divisions include:',
            bn: 'পশ্চিমগাঁও মাদ্রাসা-ই-ইসলামিয়া জামেউল উলুম একটি ইসলামী প্রতিষ্ঠান যেখানে শিক্ষার্থীরা ইসলাম এবং এর শিক্ষাগুলি গভীরভাবে শিখতে পারে। আমাদের বিভাগগুলি অন্তর্ভুক্ত:'
        },
        'divisions-list': {
            en: [
                'Ideal Nurani Department',
                'Nazera Department',
                'Hifz Department',
                'Hadith Department'
            ],
            bn: [
                'আদর্শ নুরানি বিভাগ',
                'নাজেরা বিভাগ',
                'হিফজ বিভাগ',
                'হাদিস বিভাগ'
            ]
        },
        'professional-staff-title': {
            en: 'Professional Staff',
            bn: 'পেশাদার কর্মী'
        },
        'professional-staff-description': {
            en: 'Our teachers are highly trained scholars who are dedicated to providing Islamic education at the highest level.',
            bn: 'আমাদের শিক্ষকরা উচ্চ প্রশিক্ষিত পণ্ডিত যারা সর্বোচ্চ স্তরের ইসলামী শিক্ষা প্রদানে নিবেদিত।'
        },
        'deep-knowledge-title': {
            en: 'Deep Knowledge',
            bn: 'গভীর জ্ঞান'
        },
        'deep-knowledge-description': {
            en: 'We emphasize deep knowledge and understanding of Islamic subjects including Quran, Hadith, Fiqh, and more.',
            bn: 'আমরা কুরআন, হাদিস, ফিকাহ এবং আরও অনেক ইসলামী বিষয়ের গভীর জ্ঞান এবং বোঝার উপর জোর দিই।'
        },
        'dedicated-curriculum-title': {
            en: 'Dedicated Curriculum',
            bn: 'নিবেদিত পাঠ্যক্রম'
        },
        'dedicated-curriculum-description': {
            en: 'Our curriculum is designed to cover all essential areas of Islamic learning, helping students grow intellectually and spiritually.',
            bn: 'আমাদের পাঠ্যক্রমটি ইসলামী শিক্ষার সমস্ত প্রয়োজনীয় ক্ষেত্রগুলি কভার করার জন্য ডিজাইন করা হয়েছে, যা শিক্ষার্থীদের বুদ্ধিবৃত্তিক এবং আধ্যাত্মিকভাবে বৃদ্ধি করতে সহায়তা করে।'
        },
        'community-focus-title': {
            en: 'Community Focus',
            bn: 'সম্প্রদায়ের উপর ফোকাস'
        },
        'community-focus-description': {
            en: 'Our institution plays an active role in the community by organizing events and services for all age groups.',
            bn: 'আমাদের প্রতিষ্ঠানটি সমস্ত বয়সের জন্য ইভেন্ট এবং পরিষেবা আয়োজন করে সম্প্রদায়ে সক্রিয় ভূমিকা পালন করে।'
        },
        'holistic-approach-title': {
            en: 'Holistic Approach',
            bn: 'সমগ্রিক পদ্ধতি'
        },
        'holistic-approach-description': {
            en: 'We believe in a holistic approach to Islamic education that combines both religious and moral teachings.',
            bn: 'আমরা বিশ্বাস করি যে ইসলামী শিক্ষার একটি সমগ্রিক পদ্ধতি যা উভয় ধর্মীয় এবং নৈতিক শিক্ষাকে একত্রিত করে।'
        },
        'future-leaders-title': {
            en: 'Future Leaders',
            bn: 'ভবিষ্যতের নেতা'
        },
        'future-leaders-description': {
            en: 'Our aim is to shape the future leaders of the Muslim community, well-versed in both religious knowledge and societal responsibilities.',
            bn: 'আমাদের লক্ষ্য হল মুসলিম সম্প্রদায়ের ভবিষ্যতের নেতাদের গঠন করা, যারা উভয় ধর্মীয় জ্ঞান এবং সামাজিক দায়িত্বে সুপরিচিত।'
        },
        'enroll-now-title': {
            en: 'Enroll Now to Learn and Grow',
            bn: 'শেখার এবং বৃদ্ধির জন্য এখনই ভর্তি হন'
        },
        'enroll-now-description': {
            en: 'Contact us to join one of the most prestigious Islamic educational institutions.',
            bn: 'সবচেয়ে মর্যাদাপূর্ণ ইসলামী শিক্ষামূলক প্রতিষ্ঠানগুলির মধ্যে একটিতে যোগ দিতে আমাদের সাথে যোগাযোগ করুন।'
        },
        'cta-button': {
            en: 'Get in Touch',
            bn: 'যোগাযোগ করুন'
        }
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element && elements[id][language]) {
            if (Array.isArray(elements[id][language])) {
                const listItems = elements[id][language].map(item => `<li>${item}</li>`).join('');
                element.innerHTML = listItems;
            } else {
                element.textContent = elements[id][language];
            }
        }
    }
}
