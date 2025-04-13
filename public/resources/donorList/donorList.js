// Function to dynamically load HTML components into the specified section
function loadHTML(section, filePath, cssPath, jsPath) {
    // Add error handling and base URL
    const baseUrl = window.location.origin;
    
    console.log(`Loading ${filePath} into #${section}`);

    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = baseUrl + cssPath;
        document.head.appendChild(link);
    }

    fetch(baseUrl + filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}, status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            const element = document.getElementById(section);
            if (element) {
                element.innerHTML = data;
                console.log(`Loaded ${filePath} successfully`);

                if (jsPath) {
                    const script = document.createElement('script');
                    script.src = baseUrl + jsPath;
                    document.body.appendChild(script);
                }
            }
        })
        .catch(err => {
            console.error(`Error loading ${filePath}:`, err);
            // Fallback content if loading fails
            document.getElementById(section).innerHTML = `<p>Error loading content. Please try again.</p>`;
        });
}

// Load sections dynamically with specific paths
loadHTML('heading', '/heading/heading.html', '/heading/heading.css', '/heading/heading.js');
loadHTML('nav', '/nav/nav.html', '/nav/nav.css', '/nav/nav.js');
loadHTML('footer', '/footer/footer.html', '/footer/footer.css', '/footer/footer.js');

// Function to toggle the visibility of the "More" content
function toggleMore(category) {
    const moreContent = document.getElementById(`moreContent-${category}`);
    const moreBtn = document.getElementById(`moreBtn-${category}`);
    const lessBtn = document.getElementById(`lessBtn-${category}`);

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
                'Resident of Poschimgaon, Kewdala, and Dokhinpara but currently live abroad (Remitance fighter).',
                'Commit to donating monthly or annually.',
                'To be listed as a donor, one must pay the amount of money they have declared to donate to the Madrasa',
                'Support the mission and values of our Madrasha as a dedicated well-wisher.',
                'Donors who donate more money, their names come first in the donor list.',
                'If two donors donate the same amount, the one who donated earlier appears first in the donor list.',
            ],
            bn: [
                'পশ্চিমগাঁও, কেউঢালা এবং দক্ষিণপাড়ার স্থায়ী বা অস্থায়ী বাসিন্দা হওয়া যাবে না।',
                'পশ্চিম গাঁও, কেওডালে এবং দক্ষিণপাড়ার বাসিন্দা কিন্তু বর্তমানে বিদেশে থাকেন (রেমিট্যান্স যোদ্ধা)।',
                'মাসিক বা বার্ষিক ভিত্তিতে নিয়মিত অনুদানের প্রতিশ্রুতিবদ্ধ ।',
                'দাতা হিসেবে তালিকাভুক্ত হতে হলে, মাদ্রাসায় অনুদানের ঘোষণা করা অর্থের পরিমাণ অবশ্যই দিতে হবে।',
                'একজন নিবেদিতপ্রাণ শুভাকাঙ্ক্ষী হিসেবে আমাদের মাদ্রাসার লক্ষ্য এবং মূল্যবোধকে সমর্থন করতে হবে।',
                'যারা বেশি অর্থ দান করেন, তাদের নাম দাতা তালিকায় প্রথমে আসে।',
                'যদি দুজন দাতা একই পরিমাণ দান করেন, তাহলে যিনি আগে দান করেছিলেন, তিনি দাতা তালিকায় প্রথমে উপস্থিত হন।'
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
            en: 'Shahidul Islam Zia',
            bn: 'শহিদুল ইসলাম জিয়া'
        },
        'donor2-designation': {
            en: 'Businessman',
            bn: 'ব্যবসায়ী'
        },
        'donor2-address': {
            en: 'Schweizer-Reneke, South Africa',
            bn: 'শোয়েজার-রেনেক, দক্ষিণ আফ্রিকা'
        },
        'donor2-contribution': {
            en: 'Contribution: 20000 taka /year',
            bn: 'অনুদান: ২০,000 টাকা /বছর'
        },
        'donor3-name': {
            en: 'Md. Abdur Rahim',
            bn: 'মোঃ আব্দুর রহিম'
        },
        'donor3-designation': {
            en: 'Director',
            bn: 'পরিচালক'
        },
        'donor3-position': {
            en: 'Tropical Hospital & Diagnostic Centre (pvt) Ltd, Staff Quarter, Demra Road, Dhaka',
            bn: 'ট্রপিক্যাল হাসপাতাল ও ডায়াগনস্টিক সেন্টার (প্রা.) লিমিটেড, স্টাফ কোয়ার্টার, ডেমরা রোড, ঢাকা'
        },
        'donor3-address': {
            en: 'Noraibag, Demra, Dhaka, Bangladesh',
            bn: 'নরাইবাগ, ডেমরা, ঢাকা, বাংলাদেশ'
        },
        'donor3-contribution': {
            en: 'Contribution: 10,000 taka /year',
            bn: 'অনুদান: ১০,০০০ টাকা প্রতি বছর'
        },
        'donor4-name': {
            en: 'Abdullah Al Mamun',
            bn: 'আব্দুল্লাহ আল মামুন'
        },
        'donor4-designation': {
            en: 'Businessman',
            bn: 'ব্যবসায়ী'
        },
        'donor4-position': {
            en: 'M/S Awora Traders, Demra Dhaka',
            bn: 'মেসার্স আওরা ট্রেডার্স, ডেমরা ঢাকা'
        },
        'donor4-address': {
            en: 'Demra, Dhaka, Bangladesh',
            bn: 'ডেমরা, ঢাকা, বাংলাদেশ'
        },
        'donor4-contribution': {
            en: 'Contribution: 5000 taka /year',
            bn: 'অনুদান: ৫,000 টাকা /বছর'
        },
        'donor5-name': {
            en: 'Advocate Mohammad Selim Mia',
            bn: 'এডভোকেট মোহাম্মদ সেলিম মিয়া'
        },
        'donor5-designation': {
            en: 'Vice-President',
            bn: 'ভাইস প্রেসিডেন্ট'
        },
        'donor5-position': {
            en: 'Bangladesh Survey and Valuation Companies, Farms and Individual Concerns Association',
            bn: 'বাংলাদেশ সার্ভে ও ভ্যালুয়েশন কোম্পানিজ, ফার্মস ও ইনডিভিজ্যুয়াল কনসার্নস এসোসিয়েশন'
        },
        'donor5-address': {
            en: 'Tarabo, Dhaka, Bangladesh',
            bn: 'তারাবো, ঢাকা, বাংলাদেশ'
        },
        'donor5-contribution': {
            en: 'Contribution: 5000 taka /year',
            bn: 'অনুদান: ৫,000 টাকা /বছর'
        },
        'donor6-name': {
            en: 'Md Abdul Alim',
            bn: 'মোঃ আবদুল আলিম'
        },
        'donor6-designation': {
            en: 'Director',
            bn: 'পরিচালক'
        },
        'donor6-position': {
            en: 'Hass International Ltd, Uttara, Dhaka',
            bn: 'হাস ইন্টারন্যাশনাল লিমিটেড, উত্তরা, ঢাকা'
        },
        'donor6-address': {
            en: 'Demra, Dhaka, Bangladesh',
            bn: 'ডেমরা, ঢাকা, বাংলাদেশ'
        },
        'donor6-contribution': {
            en: 'Contribution: 5000 taka /year',
            bn: 'অনুদান: ৫,000টাকা /বছর'
        },
        'donor7-name': {
            en: 'Md. Mofazzal Hossain Biplob',
            bn: 'মোঃ মফাজ্জল হোসেন বিপ্লব'
        },
        'donor7-designation': {
            en: 'Businessman',
            bn: 'ব্যবসায়ী'
        },
        'donor7-address': {
            en: 'Noraipur, Demra, Dhaka, Bangladesh',
            bn: 'নরাইপুর, ডেমরা, ঢাকা, বাংলাদেশ'
        },
        'donor7-contribution': {
            en: 'Contribution: 5000 taka /year',
            bn: 'অনুদান: ৫,000 টাকা /বছর'
        },
        'donor8-name': {
            en: 'Md Masum Parvez Bhuiyan',
            bn: 'মোঃ মাসুম পারভেজ ভূঁইয়া'
        },
        'donor8-designation': {
            en: 'Director',
            bn: 'পরিচালক'
        },
        'donor8-position': {
            en: 'Muskan Pharmacy, Mitford road, Mitford Tower, Dhaka 1100',
            bn: 'মুসকান ফার্মেসি, মিটফোর্ড রোড, মিটফোর্ড টাওয়ার, ঢাকা ১১০০'
        },
        'donor8-address': {
            en: 'Tarabo, Dhaka',
            bn: 'তারাবো, ঢাকা'
        },
        'donor8-contribution': {
            en: 'Contribution: 5000 taka /year',
            bn: 'অনুদান: ৫,000 টাকা /বছর'
        },
        'donor9-name': {
            en: 'Md. Nuruzzaman Sarker',
            bn: 'মোঃ নুরুজ্জামান সরকার'
        },
        'donor9-designation': {
            en: 'Director',
            bn: 'পরিচালক'
        },
        'donor9-position': {
            en: 'Waterline Ship Design & Consultant. Motijheel,Dhaka.',
            bn: 'ওয়াটারলাইন শিপ ডিজাইন অ্যান্ড কনসালটেন্ট। মতিঝিল, ঢাকা।'
        },
        'donor9-address': {
            en: 'Matuail, kadamtoli, Dhaka.',
            bn: 'মাতুয়াইল, কদমতলী, ঢাকা।'
        },
        'donor9-contribution': {
           en: 'Contribution: 10,000 taka /year',
            bn: 'অনুদান: ১০,০০০ টাকা প্রতি বছর'
        },
        'contact-link-text': {
            en: 'Contact Us',
            bn: 'যোগাযোগ করুন'
        },
        'overseas-btn-text': {
            en: 'Non-Resident Donors',
            bn: 'অনাবাসী দাতা'  // Donors who live outside the territory but in Bangladesh
        },
        'migrant-btn-text': {
            en: 'Foreign Resident Donors',
            bn: 'প্রবাসী দাতা'  // Donors who are from the territory but live abroad
        },
        
        'non-resident-title': {
            en: 'Non-Resident Donors',
            bn: 'অনাবাসী দাতা'
        },
        'non-resident-text': {
            en: 'These donors live outside our local area but within Bangladesh. They contribute to our madrasha while maintaining their residency in other parts of the country.',
            bn: 'এই দাতারা আমাদের এলাকার বাইরে কিন্তু বাংলাদেশের মধ্যে বসবাস করেন। তারা দেশের অন্যান্য অঞ্চলে বসবাস করার সময় আমাদের মাদ্রাসায় অবদান রাখেন।'
        },
        'foreign-resident-title': {
            en: 'Foreign Resident Donors',
            bn: 'প্রবাসী দাতা'
        },
        'foreign-resident-text': {
            en: 'These donors are originally from our local community but currently live abroad. They support our madrasha through their foreign earnings.',
            bn: 'এই দাতারা মূলত আমাদের স্থানীয় সম্প্রদায়ের অংশ কিন্তু বর্তমানে বিদেশে বসবাস করেন। তারা তাদের বিদেশী আয় থেকে আমাদের মাদ্রাসাকে সহায়তা করেন।'
        },
        'click-instruction-text': {
            en: 'Click below to view donor lists',
            bn: 'দাতাদের তালিকা দেখতে নীচে ক্লিক করুন'
        },
        'migrant0-name': {
            en: 'Mohammad Giash Uddin Bhuiyan, MSc (Triple MSc)',
            bn: 'মোহাম্মদ গিয়াস উদ্দিন ভূঁইয়া, এমএসসি (ট্রিপল এমএসসি)'
        },
        'migrant0-designation': {
            en: [
                'JavaScript FullStack Developer',
                'Founder of the Poschimgaon Madrasha Computer Lab',
                'Developer of the Poschimgaon Madrasha Website',
                'Social Counsellor, Stockholm Commune and Upplands Väsby Commune, Sweden'
            ],
            bn: [
                'জাভাস্ক্রিপ্ট ফুলস্ট্যাক ডেভেলপার',
                'পশ্চিমগাঁও মাদ্রাসা কম্পিউটার ল্যাবের প্রতিষ্ঠাতা',
                'পশ্চিমগাঁও মাদ্রাসা ওয়েবসাইটের ডেভেলপার',
                'সামাজিক কাউন্সেলর, স্টকহোম কমিউন এবং উপল্যান্ডস ভেসবি কমিউন, সুইডেন'
            ]
        },
        'migrant0-address': {
            en: 'Stockholm, Sweden',
            bn: 'স্টকহোম, সুইডেন'
        },
        'migrant0-contribution': {
            en: 'Contribution: 50.000 taka /year and other types of donations',
            bn: 'অনুদান: ৫০,০০০টাকা /বছর এবং অন্যান্য ধরনের অনুদান'
        },
        
        'migrant1-name': {
            en: 'Dr. Kaiser Ahmed',
            bn: 'ড. কায়সার আহমেদ'
        },
        'migrant1-designation': {
            en: 'Civil Engineer',
            bn: 'সিভিল ইঞ্জিনিয়ার'
        },
        'migrant1-position': {
           en: 'Phd in Civil Engineering, UNSW, Sydney',
            bn: ' সিভিল ইঞ্জিনিয়ারিংয়ে পিএইচডি, ইউএনএসডব্লিউ, সিডনি'
        },
        'migrant1-address': {
            en: 'Sydney, Australia',
            bn: 'সিডনি, অষ্ট্রেলিয়া'
        },
        'migrant1-contribution': {
            en: 'Contribution: 10000 taka /year and other types of donations',
            bn: 'অনুদান: 20,000 টাকা /বছর এবং অন্যান্য ধরনের অনুদান'
        },
        
        'migrant2-name': {
            en: 'Syekh Kawsar Ahmed',
            bn: 'শেখ কাওসার আহমেদ'
        },
        'migrant2-designation': {
            en: 'Imam',
            bn: 'ইমাম'
        },
        'migrant2-position': {
            en: 'Mosjid Al Abeat, Taef, Saudi Arabia',
            bn: 'মসজিদ আল আবেআত, তায়েফ, সৌদি আরব'
        },
        'migrant2-address': {
            en: 'Taef, Saudi Arabia',
            bn: 'তায়েফ, সৌদি আরব'
        },
        'migrant2-contribution': {
            en: 'Contribution: 20,000 taka /year',
            bn: 'অনুদান: 20,000 টাকা /বছর এবং অন্যান্য ধরনের অনুদান'
        },
        'migrant3-name': {
            en: 'Parvez Ahmed',
            bn: 'পারভেজ আহমেদ'
        },
        'migrant3-designation': {
            en: 'Business Analyst',
            bn: 'বিজনেস অ্যানালিস্ট'
        },
        'migrant3-position': {
            en: 'Studynet Pvt Ltd, Melbourne, Australia',
            bn: 'স্টাডিনেট প্রাইভেট লিমিটেড, মেলবোর্ন, অস্ট্রেলিয়া'
        },
        'migrant3-address': {
            en: 'Melbourne, Australia',
            bn: 'মেলবোর্ন, অস্ট্রেলিয়া'
        },
        'migrant3-contribution': {
            en: 'Contribution: 10,000 taka /year',
            bn: 'অনুদান: ১০,000 টাকা /বছর'
        },
        'overseas-donor8-name': {
            en: 'Donor Name 8',
            bn: 'দাতা নাম ৮'
        },
        'overseas-donor8-designation': {
            en: 'Professor',
            bn: 'অধ্যাপক'
        },
        'overseas-donor8-address': {
            en: 'Toronto, Canada',
            bn: 'টরন্টো, কানাডা'
        },
        'overseas-donor8-contribution': {
            en: 'Contribution: $1000',
            bn: 'অনুদান: $১০০০'
        }
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element) {
            if (Array.isArray(elements[id][language])) {
                const listItems = elements[id][language].map(item => `<li>${item}</li>`).join('');

                element.innerHTML = listItems;
            } else {
                element.textContent = elements[id][language];
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
    
    // Initially hide all donor sections and more content
    document.querySelectorAll('.donor-section').forEach(section => {
        section.style.display = 'none';
    });
    
    document.querySelectorAll('[id^="moreContent-"]').forEach(content => {
        content.style.display = 'none';
    });
    
    // Show overseas section by default
    document.getElementById('overseas-section').style.display = 'block';
    document.getElementById('overseasBtn').classList.add('active');
});

function toggleCategory(category) {
    // Hide all sections
    document.querySelectorAll('.donor-section').forEach(section => {
        section.style.display = 'none';
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.donor-categories button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected section and activate button
    document.getElementById(`${category}-section`).style.display = 'block';
    document.getElementById(`${category}Btn`).classList.add('active');
}
