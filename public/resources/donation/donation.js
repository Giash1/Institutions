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
function updateDonationContent(language) {
    const elements = {
        'donation-title': {
            en: 'Empower Education, Enrich Lives',
            bn: 'শিক্ষাকে ক্ষমতায়িত করুন, জীবনকে সমৃদ্ধ করুন'
        },
        'donation-description': {
            en: 'Your generosity can transform lives and uplift communities. By supporting our madrasa, you play a vital role in enhancing education, fostering spiritual growth, and promoting community welfare.',
            bn: 'আপনার উদারতা জীবনকে রূপান্তরিত করতে এবং সম্প্রদায়কে উন্নীত করতে পারে। আমাদের মাদ্রাসাকে সমর্থন করে, আপনি শিক্ষার উন্নয়ন, আধ্যাত্মিক বৃদ্ধির প্রচার এবং সম্প্রদায়ের কল্যাণে গুরুত্বপূর্ণ ভূমিকা পালন করেন।'
        },
        'why-donation-matters-title': {
            en: 'Why Your Donation Matters:',
            bn: 'আপনার দান কেন গুরুত্বপূর্ণ:'
        },
        'why-donation-matters-description': {
            en: 'Making a donation to our madrasa is an opportunity to create lasting change. Your contribution will:',
            bn: 'আমাদের মাদ্রাসায় দান করা একটি স্থায়ী পরিবর্তন তৈরি করার সুযোগ। আপনার অবদান হবে:'
        },
        'donation-benefits-list': {
            en: [
                '**Enhance Educational Opportunities: Your support helps provide high-quality education to students eager to learn.',
                '**Support Religious Activities: Contribute to religious programs that enrich the spiritual lives of our community members.',
                '**Cultivate Future Leaders: Help shape the next generation of leaders who will carry our values forward.'
            ],
            bn: [
                '**শিক্ষার সুযোগ বাড়ান: আপনার সমর্থন শিক্ষার্থীদের উচ্চ-মানের শিক্ষা প্রদান করতে সহায়তা করে যারা শিখতে আগ্রহী।',
                '**ধর্মীয় কার্যক্রম সমর্থন করুন: ধর্মীয় প্রোগ্রামগুলিতে অবদান রাখুন যা আমাদের সম্প্রদায়ের সদস্যদের আধ্যাত্মিক জীবনকে সমৃদ্ধ করে।',
                '**ভবিষ্যতের নেতাদের চাষ করুন: পরবর্তী প্রজন্মের নেতাদের গঠন করতে সহায়তা করুন যারা আমাদের মূল্যবোধকে এগিয়ে নিয়ে যাবে।'
            ]
        },
        'join-us-title': {
            en: 'Join Us in Making a Difference',
            bn: 'একটি পরিবর্তন আনতে আমাদের সাথে যোগ দিন'
        },
        'join-us-description': {
            en: 'Your financial support can provide vital resources, such as educational materials, scholarships, and infrastructure improvements. Together, we can build a brighter future for our students.',
            bn: 'আপনার আর্থিক সহায়তা গুরুত্বপূর্ণ সম্পদ যেমন শিক্ষামূলক উপকরণ, বৃত্তি এবং অবকাঠামো উন্নতি প্রদান করতে পারে। একসাথে, আমরা আমাদের শিক্ষার্থীদের জন্য একটি উজ্জ্বল ভবিষ্যত গড়ে তুলতে পারি।'
        },
        'donation-options-title': {
            en: 'Donation Options',
            bn: 'দান বিকল্প'
        },
        'donation-options-description': {
            en: 'We offer multiple convenient ways to donate:',
            bn: 'আমরা দান করার জন্য একাধিক সুবিধাজনক উপায় অফার করি:'
        },
        'donation-methods-list': {
            en: [
                '**Bank Transfer: Make a direct deposit to our account.',
                'Bank Name: Islami Bank Bangladesh Limited',
                'Account Name: Poschim Gaon Madrasha-E-Islamia Jameul Ulum',
                'Account Number: 20506370200032918',
                'Routing Number: 125273220',
                'SWIFT Code: IBBLBDDH',
                'Branch: Islami Bank Demra Staff Quarter Sub Branch, Dhaka',
                '**Bikash: Use the popular mobile payment platform for easy transactions.',
                'Bikash number: 01831-889749',
                'Bikash number: 01813202875'
            ],
            bn: [
                '**ব্যাংক ট্রান্সফার: আমাদের অ্যাকাউন্টে সরাসরি জমা দিন।',
                'ব্যাংকের নাম: ইসলামী ব্যাংক বাংলাদেশ লিমিটেড',
                'অ্যাকাউন্টের নাম: পশ্চিমগাঁও মাদ্রাসা-ই-ইসলামিয়া জামেউল উলুম',
                'অ্যাকাউন্ট নম্বর: 20506370200032918',
                'রাউটিং নম্বর: 125273220',
                'SWIFT কোড: IBBLBDDH',
                'শাখা: ইসলামী ব্যাংক ডেমরা স্টাফ কোয়ার্টার সাব ব্রাঞ্চ, ঢাকা',
                '**বিকাশ: সহজ লেনদেনের জন্য জনপ্রিয় মোবাইল পেমেন্ট প্ল্যাটফর্ম ব্যবহার করুন।',
                'বিকাশ নম্বর: 01831-889749',
                'বিকাশ নম্বর: 01813202875'
            ]
        },
        'take-action-title': {
            en: 'Take Action Today!',
            bn: 'আজই পদক্ষেপ নিন!'
        },
        'take-action-description': {
            en: 'Every donation, no matter the size, makes a significant impact. Join us in our mission to educate, inspire, and uplift. Thank you for considering a contribution to our madrasa!',
            bn: 'প্রতিটি দান, আকার যাই হোক না কেন, একটি উল্লেখযোগ্য প্রভাব ফেলে। শিক্ষিত, অনুপ্রাণিত এবং উন্নীত করার আমাদের মিশনে আমাদের সাথে যোগ দিন। আমাদের মাদ্রাসায় অবদান বিবেচনা করার জন্য আপনাকে ধন্যবাদ!'
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

    // Update More Button Text based on current state
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    if (moreContent && moreBtn) {
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
             moreBtn.innerText = language === 'bn' ? "আরও" : "More";
        } else {
             moreBtn.innerText = language === 'bn' ? "কম" : "Less";
        }
    }
}

// Add event listeners for language buttons
document.addEventListener("DOMContentLoaded", () => {
    const currentLang = localStorage.getItem('preferredLanguage') || 'bn';
    updateDonationContent(currentLang);
});

window.addEventListener('languageChange', (event) => {
    updateDonationContent(event.detail);
});
