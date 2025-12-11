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
loadHTML('heading', '../../heading/heading.html', '../../heading/heading.css', '../../heading/heading.js');
loadHTML('nav', '../../nav/nav.html', '../../nav/nav.css', '../../nav/nav.js');
loadHTML('footer', '../../footer/footer.html', '../../footer/footer.css', '../../footer/footer.js');

// Function to toggle the visibility of the "More" content
function toggleMore() {
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    const currentLang = localStorage.getItem('preferredLanguage') || 'bn';

    if (moreContent.style.display === "none") {
        moreContent.style.display = "block";
        moreBtn.innerText = currentLang === 'bn' ? "কম" : "Less";
    } else {
        moreContent.style.display = "none";
        moreBtn.innerText = currentLang === 'bn' ? "আরও" : "More";
    }
}

// Function to set the language
function updateAdmissionContent(language) {
    const elements = {
        'admission-title': {
            en: 'Admission to Poschimgaon Madrasha E Islamia Jamul Ulum',
            bn: 'পশ্চিমগাঁও মাদ্রাসা ই ইসলামিয়া জামুল উলুমে ভর্তি'
        },
        'admission-description': {
            en: 'Welcome to Poschimgaon Madrasha E Islamia Jamul Ulum, where we provide a balanced education that integrates Islamic teachings with modern academic subjects. Our admission process is designed to welcome students who are eager to grow spiritually and intellectually.',
            bn: 'পশ্চিমগাঁও মাদ্রাসা ই ইসলামিয়া জামুল উলুমে স্বাগতম, যেখানে আমরা ইসলামী শিক্ষার সাথে আধুনিক একাডেমিক বিষয়গুলিকে একত্রিত করে একটি ভারসাম্যপূর্ণ শিক্ষা প্রদান করি। আমাদের ভর্তি প্রক্রিয়া এমন শিক্ষার্থীদের স্বাগত জানাতে ডিজাইন করা হয়েছে যারা আধ্যাত্মিক এবং বুদ্ধিবৃত্তিকভাবে বৃদ্ধি পেতে আগ্রহী।'
        },
        'timeline-title': {
            en: 'Admission Timeline',
            bn: 'ভর্তি সময়সূচী'
        },
        'timeline-start': {
            en: '<strong>Start Date:</strong> 1st of Ramadan',
            bn: '<strong>শুরুর তারিখ:</strong> রমজানের ১ম দিন'
        },
        'timeline-end': {
            en: '<strong>End Date:</strong> 15 days after Eid-ul-Fitr',
            bn: '<strong>শেষ তারিখ:</strong> ঈদ-উল-ফিতরের ১৫ দিন পর'
        },
        'fees-title': {
            en: 'Admission Fees and Costs',
            bn: 'ভর্তি ফি এবং খরচ'
        },
        'fees-list': {
            en: [
                '<strong>Admission Fee:</strong> 3500 Taka',
                '<strong>Monthly Fee (All Departments):</strong> 1000 Taka',
                '<strong>Boarding Cost:</strong> 2500 Taka (Discount available for orphan and poor students)'
            ],
            bn: [
                '<strong>ভর্তি ফি:</strong> ৩৫০০ টাকা',
                '<strong>মাসিক ফি (সব বিভাগ):</strong> ১০০০ টাকা',
                '<strong>বোর্ডিং খরচ:</strong> ২৫০০ টাকা (এতিম এবং দরিদ্র শিক্ষার্থীদের জন্য ছাড় উপলব্ধ)'
            ]
        },
        'why-choose-title': {
            en: 'Why Choose Our Madrasha?',
            bn: 'আমাদের মাদ্রাসা কেন বেছে নেবেন?'
        },
        'why-choose-list': {
            en: [
                '<strong>Comprehensive Islamic Education:</strong> Our curriculum includes Quranic studies, Hadith, Fiqh, and Arabic language courses to build a strong foundation in Islamic knowledge.',
                '<strong>Modern Academic Subjects:</strong> In addition to Islamic studies, we offer courses in Mathematics, Science, English, and Computer Science to prepare students for the modern world.',
                '<strong>Qualified Instructors:</strong> Our experienced and dedicated teachers ensure a high standard of education and personal guidance for students.',
                '<strong>Conducive Learning Environment:</strong> We provide a safe, disciplined, and nurturing atmosphere where students can focus on their studies.',
                '<strong>Scholarships and Financial Aid:</strong> We support students from diverse backgrounds by offering scholarships and financial assistance based on merit and need.'
            ],
            bn: [
                '<strong>বিস্তৃত ইসলামী শিক্ষা:</strong> আমাদের পাঠ্যক্রমে কুরআনিক স্টাডিজ, হাদিস, ফিকাহ এবং আরবি ভাষার কোর্স অন্তর্ভুক্ত রয়েছে যাতে ইসলামী জ্ঞানের একটি শক্ত ভিত্তি তৈরি হয়।',
                '<strong>আধুনিক একাডেমিক বিষয়:</strong> ইসলামী শিক্ষার পাশাপাশি, আমরা গণিত, বিজ্ঞান, ইংরেজি এবং কম্পিউটার বিজ্ঞানের কোর্স অফার করি যাতে শিক্ষার্থীরা আধুনিক বিশ্বের জন্য প্রস্তুত হয়।',
                '<strong>যোগ্য প্রশিক্ষক:</strong> আমাদের অভিজ্ঞ এবং নিবেদিত শিক্ষকরা শিক্ষার্থীদের জন্য উচ্চ মানের শিক্ষা এবং ব্যক্তিগত নির্দেশনা নিশ্চিত করেন।',
                '<strong>শিক্ষার অনুকূল পরিবেশ:</strong> আমরা একটি নিরাপদ, শৃঙ্খলাবদ্ধ এবং লালনপালনকারী পরিবেশ প্রদান করি যেখানে শিক্ষার্থীরা তাদের পড়াশোনায় মনোনিবেশ করতে পারে।',
                '<strong>বৃত্তি এবং আর্থিক সহায়তা:</strong> আমরা মেধা এবং প্রয়োজনের উপর ভিত্তি করে বৃত্তি এবং আর্থিক সহায়তা প্রদান করে বিভিন্ন পটভূমির শিক্ষার্থীদের সমর্থন করি।'
            ]
        },
        'requirements-title': {
            en: 'Admission Requirements',
            bn: 'ভর্তি প্রয়োজনীয়তা'
        },
        'requirements-description': {
            en: 'To enroll in our madrasha, applicants must meet the following criteria:',
            bn: 'আমাদের মাদ্রাসায় ভর্তি হতে, আবেদনকারীদের নিম্নলিখিত মানদণ্ড পূরণ করতে হবে:'
        },
        'requirements-list': {
            en: [
                'Submit a completed application form with all required documents.',
                'Pass the entrance examination (for specific grade levels).',
                'Attend an interview with the admission committee.'
            ],
            bn: [
                'সমস্ত প্রয়োজনীয় নথি সহ একটি সম্পূর্ণ আবেদনপত্র জমা দিন।',
                'প্রবেশিকা পরীক্ষায় উত্তীর্ণ হন (নির্দিষ্ট গ্রেড স্তরের জন্য)।',
                'ভর্তি কমিটির সাথে একটি সাক্ষাত্কারে অংশগ্রহণ করুন।'
            ]
        },
        'apply-title': {
            en: 'How to Apply',
            bn: 'কিভাবে আবেদন করবেন'
        },
        'apply-description': {
            en: 'Interested students and parents can visit our madrasha for an application form or download it from our website. The admission office is available to guide you through the process and answer any queries.',
            bn: 'আগ্রহী শিক্ষার্থী এবং অভিভাবকরা আমাদের মাদ্রাসায় আবেদনপত্রের জন্য যেতে পারেন বা আমাদের ওয়েবসাইট থেকে এটি ডাউনলোড করতে পারেন। ভর্তি অফিস আপনাকে প্রক্রিয়ার মাধ্যমে গাইড করতে এবং যেকোনো প্রশ্নের উত্তর দিতে উপলব্ধ।'
        },
        'contact-title': {
            en: 'Contact Us',
            bn: 'যোগাযোগ করুন'
        },
        'contact-description': {
            en: 'For more information regarding the admission process, eligibility criteria, and deadlines, please contact us at:',
            bn: 'ভর্তি প্রক্রিয়া, যোগ্যতার মানদণ্ড এবং সময়সীমা সম্পর্কে আরও তথ্যের জন্য, অনুগ্রহ করে আমাদের সাথে যোগাযোগ করুন:'
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
            en: '<strong>Address:</strong> Poschimgaon Madrasha E Islamia Jamul Ulum, Poschimgaon,Demra, Rupgonj, Narayangonj.',
            bn: '<strong>ঠিকানা:</strong> পশ্চিমগাঁও মাদ্রাসা ই ইসলামিয়া জামুল উলুম, পশ্চিমগাঁও, ডেমরা, রূপগঞ্জ, নারায়ণগঞ্জ।'
        }
    };

    for (const id in elements) {
        if (Array.isArray(elements[id][language])) {
            const listItems = elements[id][language].map(item => `<li>${item}</li>`).join('');
            document.getElementById(id).innerHTML = listItems;
        } else {
            document.getElementById(id).innerHTML = elements[id][language];
        }
    }

    // Update "More" button text based on current language and state
    const moreBtn = document.getElementById("moreBtn");
    const moreContent = document.getElementById("moreContent");
    if (moreBtn && moreContent) {
        const isExpanded = moreContent.style.display === "block";
        if (language === 'bn') {
            moreBtn.innerText = isExpanded ? "কম" : "আরও";
        } else {
            moreBtn.innerText = isExpanded ? "Less" : "More";
        }
    }
}

// Add event listeners for language buttons
document.addEventListener("DOMContentLoaded", () => {
    // Set initial state for "More" content
    const moreContent = document.getElementById("moreContent");
    if (moreContent) {
        moreContent.style.display = "none";
    }

    // Initial content update based on global language
    const currentLang = localStorage.getItem('preferredLanguage') || 'bn';
    updateAdmissionContent(currentLang);
});

// Listen for global language change events
window.addEventListener('languageChange', (event) => {
    updateAdmissionContent(event.detail);
});
