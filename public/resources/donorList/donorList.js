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
    const lessBtn = document.getElementById("lessBtn");

    if (window.getComputedStyle(moreContent).display === "none") {
        moreContent.style.display = "flex";
        moreContent.style.flexWrap = "wrap";
        moreBtn.style.display = "none";
        lessBtn.style.display = "inline-block";
    } else {
        moreContent.style.display = "none";
        moreBtn.style.display = "inline-block";
        lessBtn.style.display = "none";
    }
}

// Initially hide the "More" content and "Less" button
document.addEventListener("DOMContentLoaded", () => {
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    const lessBtn = document.getElementById("lessBtn");

    if (moreContent) {
        moreContent.style.display = "none";
    }
    if (moreBtn) {
        moreBtn.style.display = "inline-block";
    }
    if (lessBtn) {
        lessBtn.style.display = "none";
    }
});

// Function to set the language
function setLanguage(language) {
    const elements = {
        'donor-list-title': {
            en: 'Our Generous Donors',
            bn: 'আমাদের উদার দাতারা'
        },
        'donor-list-description': {
            en: 'We are grateful for the support of our generous donors who make our mission possible.',
            bn: 'আমরা আমাদের উদার দাতাদের সমর্থনের জন্য কৃতজ্ঞ যারা আমাদের মিশন সম্ভব করে তোলেন।'
        },
        'become-donor-title': {
            en: 'Become a Donor',
            bn: 'দাতা হোন'
        },
        'become-donor-description': {
            en: 'We appreciate any support you can provide. Donors are crucial in sustaining our educational programs and improving our facilities. If you are living outside of Bangladesh, we encourage you to join our efforts.',
            bn: 'আপনার যে কোনও সহায়তার জন্য আমরা কৃতজ্ঞ। দাতারা আমাদের শিক্ষামূলক প্রোগ্রামগুলি বজায় রাখতে এবং আমাদের সুবিধাগুলি উন্নত করতে গুরুত্বপূর্ণ। আপনি যদি বাংলাদেশের বাইরে থাকেন, আমরা আপনাকে আমাদের প্রচেষ্টায় যোগ দেওয়ার জন্য উত্সাহিত করি।'
        },
        'donor-criteria-title': {
            en: 'Donor Criteria',
            bn: 'দাতা মানদণ্ড'
        },
        'donor-criteria-subtitle': {
            en: 'As per the decision of the Poschim Gaon Madrasha Committee Board, individuals who wish to become donors must meet the following criteria:',
            bn: 'পশ্চিম গাঁও মাদ্রাসা কমিটি বোর্ডের সিদ্ধান্ত অনুসারে, দাতা হতে ইচ্ছুক ব্যক্তিদের নিম্নলিখিত মানদণ্ড পূরণ করতে হবে:'
        },
        'donor-criteria-list': {
            en: [
                'No one can be a permanent or temporary resident of Paschimgaon, Kewdhala and Dakshinpara.',
                'Commit to donating monthly or annually.',
                'Support the mission and values of our Madrasha as a dedicated well-wisher.'
            ],
            bn: [
                'পশ্চিমগাঁও, কেউঢালা এবং দক্ষিণপাড়ার স্থায়ী বা অস্থায়ী বাসিন্দা হওয়া যাবে না।',
                'মাসিক বা বার্ষিক ভিত্তিতে নিয়মিত অনুদানের প্রতিশ্রুতিবদ্ধ ।',
                'একজন নিবেদিতপ্রাণ শুভাকাঙ্ক্ষী হিসেবে আমাদের মাদ্রাসার লক্ষ্য এবং মূল্যবোধকে সমর্থন করতে হবে।'
            ]
        },
        'contact-us-title': {
            en: 'Contact Us to be an Honourable Donor',
            bn: 'সম্মানিত দাতা হতে আমাদের সাথে যোগাযোগ করুন'
        },
        'contact-us-description': {
            en: 'If you\'re interested in becoming a donor, please reach out to us through our contact page for more information on how you can help.',
            bn: 'আপনি যদি দাতা হতে আগ্রহী হন, অনুগ্রহ করে আমাদের যোগাযোগ পৃষ্ঠার মাধ্যমে আমাদের সাথে যোগাযোগ করুন কিভাবে আপনি সাহায্য করতে পারেন তার আরও তথ্যের জন্য।'
        },
        'donor1-name': {
            en: 'Dm Mosharaf Hossain',
            bn: 'ডি এম মোশারফ হোসেন'
        },
        'donor1-designation': {
            en: 'Businessman',
            bn: 'ব্যবসায়ী'
        },
        'donor1-position': {
            en: 'President, Bd Investment, Boston, USA\nSecretary, Islamic Society and Cultural Center of Hyde Park, USA',
            bn: 'প্রেসিডেন্ট, বিডি ইনভেস্টমেন্ট, বস্টন, যুক্তরাষ্ট্র\nসেক্রেটারি, ইসলামিক সোসাইটি এবং কালচারাল সেন্টার অফ হাইড পার্ক, যুক্তরাষ্ট্র'
        },
        'donor1-address': {
            en: 'Boston, USA',
            bn: 'বস্টন, যুক্তরাষ্ট্র'
        },
        'donor1-contribution': {
            en: 'Contribution: 20000 taka /year',
            bn: 'অনুদান: ২০,০০০ টাকা /বছর'
        },
        'donor2-name': {
            en: 'Abdullah Al Mamun',
            bn: 'আব্দুল্লাহ আল মামুন'
        },
        'donor2-designation': {
            en: 'Businessman',
            bn: 'ব্যবসায়ী'
        },
        'donor2-position': {
            en: 'M/S Awora Traders, Demra Dhaka',
            bn: 'মেসার্স আওরা ট্রেডার্স, ডেমরা ঢাকা'
        },
        'donor2-address': {
            en: 'Demra, Dhaka, Bangladesh',
            bn: 'ডেমরা, ঢাকা, বাংলাদেশ'
        },
        'donor2-contribution': {
            en: 'Contribution: 5000 taka /year',
            bn: 'অনুদান: ৫,০০০ টাকা /বছর'
        },
        'donor3-name': {
            en: 'Advocate Mohammad Selim Mia',
            bn: 'এডভোকেট মোহাম্মদ সেলিম মিয়া'
        },
        'donor3-designation': {
            en: 'Vice-President',
            bn: 'ভাইস প্রেসিডেন্ট'
        },
        'donor3-position': {
            en: 'Bangladesh Survey and Valuation Companies, Farms and Individual Concerns Association',
            bn: 'বাংলাদেশ সার্ভে এবং ভ্যালুয়েশন কোম্পানিজ, ফার্মস এবং ইনডিভিজুয়াল কনসার্নস এসোসিয়েশন'
        },
        'donor3-address': {
            en: 'Tarabo, Dhaka, Bangladesh',
            bn: 'তারাবো, ঢাকা, বাংলাদেশ'
        },
        'donor3-contribution': {
            en: 'Contribution: 5000 taka /year',
            bn: 'অনুদান: ৫,০০০ টাকা /বছর'
        },
        'donor4-name': {
            en: 'Donor Name 4',
            bn: 'দাতার নাম ৪'
        },
        'donor4-designation': {
            en: 'Software Engineer',
            bn: 'সফটওয়্যার ইঞ্জিনিয়ার'
        },
        'donor4-address': {
            en: 'Sydney, Australia',
            bn: 'সিডনি, অস্ট্রেলিয়া'
        },
        'donor4-contribution': {
            en: 'Contribution: $1500',
            bn: 'অনুদান: ১,৫০০ ডলার'
        },
        'donor5-name': {
            en: 'Donor Name 5',
            bn: 'দাতার নাম ৫'
        },
        'donor5-designation': {
            en: 'Professor',
            bn: 'অধ্যাপক'
        },
        'donor5-address': {
            en: 'Toronto, Canada',
            bn: 'টরোন্টো, কানাডা'
        },
        'donor5-contribution': {
            en: 'Contribution: $1000',
            bn: 'অনুদান: ১,০০০ ডলার'
        },
        'donor6-name': {
            en: 'Donor Name 6',
            bn: 'দাতার নাম ৬'
        },
        'donor6-designation': {
            en: 'Architect',
            bn: 'স্থপতি'
        },
        'donor6-address': {
            en: 'Berlin, Germany',
            bn: 'বার্লিন, জার্মানি'
        },
        'donor6-contribution': {
            en: 'Contribution: $800',
            bn: 'অনুদান: ৮০০ ডলার'
        }
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element) {
            if (Array.isArray(elements[id][language])) {
                const listItems = elements[id][language].map(item => `<li>${item}</li>`).join('');
                element.innerHTML = listItems;
            } else {
                element.innerHTML = elements[id][language];
            }
        }
    }
}

// Add event listeners for language buttons
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('language-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('language-bn').addEventListener('click', () => setLanguage('bn'));
    
    // Set initial language
    setLanguage('en');
});
