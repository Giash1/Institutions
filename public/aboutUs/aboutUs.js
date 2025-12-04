// Function to dynamically load HTML components into the specified section
function loadHTML(section, filePath, cssPath, jsPath) {
    console.log(`Attempting to load ${filePath} into section #${section}`);

    // Load CSS if provided
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    // Fetch the HTML content and insert it into the specified section
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}, status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById(section).innerHTML = data;
            console.log(`Loaded ${filePath} successfully`);

            // Load JavaScript if provided
            if (jsPath) {
                const script = document.createElement('script');
                script.src = jsPath;
                document.body.appendChild(script);
                console.log(`Loaded script ${jsPath}`);
            }
        })
        .catch(err => console.error(`Error loading ${filePath}:`, err));
}

// Load sections dynamically with specific paths
loadHTML('heading', '../heading/heading.html', '../heading/heading.css', '../heading/heading.js');
loadHTML('nav', '../nav/nav.html', '../nav/nav.css', '../nav/nav.js');
loadHTML('footer', '../footer/footer.html', '../footer/footer.css', '../footer/footer.js');

// Function to toggle the visibility of the "More" content
function toggleMore() {
    const moreContent = document.getElementById('moreContent');
    const moreBtn = document.getElementById('moreBtn');
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';

    if (moreContent.style.display === 'none' || moreContent.style.display === '') {
        moreContent.style.display = 'block';
        moreBtn.textContent = currentLang === 'bn' ? 'কম দেখুন' : 'Less';
    } else {
        moreContent.style.display = 'none';
        moreBtn.textContent = currentLang === 'bn' ? 'আরও দেখুন' : 'More';
    }
}

// Function to set the language
function updateAboutUsContent(language) {
    const elements = {
        'about-title': {
            en: 'About Us',
            bn: 'আমাদের সম্পর্কে'
        },
        'about-description': {
            en: 'Founded by Hazrat Hafezzi Huzoor Rahmatullah Alaihi, Paschimgaon Madrasa Islamia Jamiul Uloom Lillah Boarding has been a center for Ilm-e-Din education following the Deobandi model for over 50 years. Our dedicated teachers provide quality religious education, nurturing orphans and underprivileged students.',
            bn: 'হযরত হাফেজ্জী হুজুর রহমতুল্লাহ আলাইহি কর্তৃক প্রতিষ্ঠিত, পশ্চিমগাঁও মাদ্রাসা ইসলামিয়া জামিউল উলূম লিল্লাহ বোর্ডিং ৫০ বছরেরও বেশি সময় ধরে দেওবন্দী মডেল অনুসরণ করে ইলমে দ্বীন শিক্ষার কেন্দ্র হয়ে দাঁড়িয়েছে। আমাদের নিবেদিতপ্রাণ শিক্ষকরা মানসম্পন্ন ধর্মীয় শিক্ষা প্রদান করেন, এতিম এবং সুবিধাবঞ্চিত শিক্ষার্থীদের লালন-পালন করেন।'
        },
        'about-description2': {
            en: 'Our institution has been a beacon of Islamic education for over 50 years, fostering both spiritual and intellectual growth in students.',
            bn: 'আমাদের প্রতিষ্ঠান ৫০ বছরেরও বেশি সময় ধরে ইসলামী শিক্ষার একটি বাতিঘর হয়ে আছে, যা শিক্ষার্থীদের আধ্যাত্মিক এবং বুদ্ধিবৃত্তিক বৃদ্ধি লালন করে।'
        },
        'mission-title': {
            en: 'Our Mission & Legacy',
            bn: 'আমাদের মিশন ও ঐতিহ্য'
        },
        'mission-description': {
            en: 'Founded by Hazrat Hafezzi Huzoor Rahmatullah Alaihi, Paschimgaon Madrasa Islamia Jamiul Uloom Lillah Boarding has been a center for Ilm-e-Din education following the Deobandi model for over 50 years. Our dedicated teachers provide quality religious education, nurturing orphans and underprivileged students.',
            bn: 'হযরত হাফেজ্জি হুজুর রহমতুল্লাহ আলাইহি দ্বারা প্রতিষ্ঠিত, পশ্চিমগাঁও মাদ্রাসা ইসলামিয়া জামিউল উলুম লিল্লাহ বোর্ডিং ৫০ বছরেরও বেশি সময় ধরে দেওবন্দি মডেল অনুসরণ করে ইলম-এ-দ্বীন শিক্ষার কেন্দ্র হয়ে আছে। আমাদের নিবেদিত শিক্ষকরা গুণগত ধর্মীয় শিক্ষা প্রদান করেন, এতিম এবং সুবিধাবঞ্চিত শিক্ষার্থীদের লালন-পালন করেন।'
        },
        'support-title': {
            en: 'Student Support & Facilities',
            bn: 'শিক্ষার্থী সহায়তা ও সুবিধা'
        },
        'support-description': {
            en: 'We currently educate 360 students, including 32 orphans and 30 extremely poor students. Our Lillah Boarding program ensures proper care, accommodation, and education for 62 students in need.',
            bn: 'আমরা বর্তমানে ৩৬০ জন শিক্ষার্থীকে শিক্ষা দিচ্ছি, যার মধ্যে ৩২ জন এতিম এবং ৩০ জন অত্যন্ত দরিদ্র শিক্ষার্থী রয়েছে। আমাদের লিল্লাহ বোর্ডিং প্রোগ্রাম ৬২ জন প্রয়োজনীয় শিক্ষার্থীর জন্য যথাযথ যত্ন, আবাসন এবং শিক্ষা নিশ্চিত করে।'
        },
        'help-title': {
            en: 'How You Can Help',
            bn: 'আপনি কিভাবে সাহায্য করতে পারেন'
        },
        'help-description': {
            en: 'As a publicly funded institution, our annual expenses reach one crore taka, with 30 lakh taka allocated to Lillah Boarding. Your halal donations to our Lillah (Zakat) and General Fund help sustain our mission and change lives. Support us today!',
            bn: 'একটি জনসাধারণের অর্থায়িত প্রতিষ্ঠান হিসাবে, আমাদের বার্ষিক ব্যয় এক কোটি টাকায় পৌঁছায়, যার মধ্যে ৩০ লাখ টাকা লিল্লাহ বোর্ডিংয়ের জন্য বরাদ্দ করা হয়। আমাদের লিল্লাহ (যাকাত) এবং সাধারণ তহবিলে আপনার হালাল অনুদান আমাদের মিশন বজায় রাখতে এবং জীবন পরিবর্তন করতে সহায়তা করে। আজই আমাদের সমর্থন করুন!'
        },
        'vision-title': {
            en: 'Our Vision',
            bn: 'আমাদের দৃষ্টি'
        },
        'vision-description': {
            en: 'Our vision is to be a leading institution in Islamic education, known for our commitment to academic excellence and the development of moral and ethical values in our students.',
            bn: 'আমাদের দৃষ্টি হল ইসলামী শিক্ষায় একটি শীর্ষস্থানীয় প্রতিষ্ঠান হওয়া, যা একাডেমিক উৎকর্ষতা এবং আমাদের শিক্ষার্থীদের নৈতিক এবং নৈতিক মূল্যবোধের বিকাশের প্রতি আমাদের প্রতিশ্রুতির জন্য পরিচিত।'
        },
        'values-title': {
            en: 'Our Values',
            bn: 'আমাদের মূল্যবোধ'
        },
        'values-list': {
            en: [
                'Integrity: Upholding the highest standards of honesty and ethical behavior.',
                'Excellence: Striving for academic and personal excellence in all that we do.',
                'Respect: Fostering a culture of respect and inclusivity.',
                'Community: Building a strong sense of community and collaboration.',
                'Faith: Instilling a deep understanding and love for Islamic teachings.'
            ],
            bn: [
                'অখণ্ডতা: সততা এবং নৈতিক আচরণের সর্বোচ্চ মান বজায় রাখা।',
                'উৎকর্ষতা: আমরা যা করি তার সবকিছুতে একাডেমিক এবং ব্যক্তিগত উৎকর্ষতার জন্য প্রচেষ্টা।',
                'সম্মান: সম্মান এবং অন্তর্ভুক্তির একটি সংস্কৃতি লালন করা।',
                'সম্প্রদায়: সম্প্রদায় এবং সহযোগিতার একটি শক্তিশালী অনুভূতি তৈরি করা।',
                'বিশ্বাস: ইসলামী শিক্ষার প্রতি গভীর বোঝাপড়া এবং ভালবাসা জাগানো।'
            ]
        },
        'history-title': {
            en: 'Our History',
            bn: 'আমাদের ইতিহাস'
        },
        'history-description': {
            en: 'Founded in 1954 by Hafezzī Huzūrm, Poschimgaon Madrasha -E- Islamia Jameul Ulum has a rich history of providing quality Islamic education. Over the years, we have grown and evolved to meet the changing needs of our students and community.',
            bn: '১৯৫৪ সালে হাফেজী হুজুর দ্বারা প্রতিষ্ঠিত, পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুম মানসম্পন্ন ইসলামী শিক্ষা প্রদানের একটি সমৃদ্ধ ইতিহাস রয়েছে। বছরের পর বছর ধরে, আমরা আমাদের শিক্ষার্থী এবং সম্প্রদায়ের পরিবর্তিত চাহিদা মেটাতে বেড়েছি এবং বিকশিত হয়েছি।'
        },
        'contact-title': {
            en: 'Contact Us',
            bn: 'যোগাযোগ করুন'
        },
        'contact-description': {
            en: 'For more information about our programs and admission process, please contact us at:',
            bn: 'আমাদের প্রোগ্রাম এবং ভর্তি প্রক্রিয়া সম্পর্কে আরও তথ্যের জন্য, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:'
        },
        'contact-phone': {
            en: 'Phone: <strong>008801632482306</strong>',
            bn: 'ফোন: <strong>008801632482306</strong>'
        },
        'contact-email': {
            en: 'Email: <strong>pgmadrasha@gmail.com</strong>',
            bn: 'ইমেইল: <strong>pgmadrasha@gmail.com</strong>'
        },
        'contact-address': {
            en: '<strong>Address:</strong> Poschimgaon Madrasha -E- Islamia Jameul Ulum, Poschimgaon, Demra, Rupgonj, Narayangonj.',
            bn: '<strong>ঠিকানা:</strong> পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুম, পশ্চিমগাঁও, ডেমরা, রূপগঞ্জ, নারায়ণগঞ্জ।'
        },
        'about-us-title': {
            en: 'About Us',
            bn: 'আমাদের সম্পর্কে'
        },
        'about-us-description': {
            en: 'Paschimgaon Madrasa has been a beacon of Islamic education, nurturing students with both religious and modern academic knowledge for over 50 years.',
            bn: 'পশ্চিমগাঁও মাদ্রাসা ৫০ বছরেরও বেশি সময় ধরে ইসলামী শিক্ষার একটি বাতিঘর হয়ে আছে, যা শিক্ষার্থীদের ধর্মীয় এবং আধুনিক একাডেমিক জ্ঞানের সাথে লালন-পালন করে।'
        },
        'additional-info-title': {
            en: 'Additional Information',
            bn: 'অতিরিক্ত তথ্য'
        },
        'contact-page-btn': {
            en: 'Go to Contact Us Page',
            bn: 'যোগাযোগ পেজে যান'
        }
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element && elements[id][language]) {
            element.textContent = elements[id][language];
        }
    }

    const moreBtn = document.getElementById('moreBtn');
    const moreContent = document.getElementById('moreContent');
    if (moreBtn && moreContent) {
        const isExpanded = moreContent.style.display === 'block';
        if (language === 'bn') {
            moreBtn.textContent = isExpanded ? 'কম দেখুন' : 'আরও দেখুন';
        } else {
            moreBtn.textContent = isExpanded ? 'Less' : 'More';
        }
    }
}

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateAboutUsContent(event.detail);
});

document.addEventListener("DOMContentLoaded", () => {
    // Set initial state for "More" content and button text
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    if (moreContent && moreBtn) {
        moreContent.style.display = "none";
        moreBtn.dataset.more = 'More';
        moreBtn.dataset.less = 'Less';
        moreBtn.innerText = moreBtn.dataset.more;
    }

    // Initialize language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateAboutUsContent(savedLanguage);
});