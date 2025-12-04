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
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';

    // Check the actual computed style
    if (window.getComputedStyle(moreContent).display === "none") {
        moreContent.style.display = "block";
        moreBtn.innerText = currentLang === 'bn' ? "কম" : "Less";
    } else {
        moreContent.style.display = "none";
        moreBtn.innerText = currentLang === 'bn' ? "আরও" : "More";
    }
}

// Function to set the language
function updateVisionContent(language) {
    const elements = {
        'vision-title': {
            en: 'Our Vision: Empowering Minds for a Bright Future',
            bn: 'আমাদের দৃষ্টি: উজ্জ্বল ভবিষ্যতের জন্য মেধা বিকাশ'
        },
        'lab-opening-title': {
        en: 'Poschimgaon Madrasha Computer Lab Opening Date',
        bn: 'পশ্চিমগাঁও মাদ্রাসা কম্পিউটার ল্যাব উদ্বোধনের তারিখ'
    },
    'lab-opening-date': {
        en: 'November 11, 2024',
        bn: '১১ নভেম্বর, ২০২৪'
    },
    'founder-title': {
        en: 'Founder of the Poschimgaon Madrasha Computer Lab',
        bn: 'পশ্চিমগাঁও মাদ্রাসা কম্পিউটার ল্যাবের প্রতিষ্ঠাতা'
    },
    'founder-name': {
        en: 'Mohammad Giash Uddin Bhuiyan, MSc (Triple MSc)',
        bn: 'মোহাম্মদ গিয়াস উদ্দিন ভূঁইয়া, এমএসসি (ট্রিপল এমএসসি)'
    },
    'founder-role': {
        en: 'Developer of the Poschimgaon Madrasha Website',
        bn: 'পশ্চিমগাঁও মাদ্রাসা ওয়েবসাইটের ডেভেলপার'
    },
    'founder-location': {
        en: 'Stockholm, Sweden',
        bn: 'স্টকহোম, সুইডেন'
    },
    'founder-description': {
        en: 'A JavaScript Full-Stack Developer, social counsellor, and community educator dedicated to promoting digital literacy for Madrasha students. He established the Computer Lab and developed the official website to support modern learning.',
        bn: 'একজন জাভাস্ক্রিপ্ট ফুল-স্ট্যাক ডেভেলপার, সামাজিক পরামর্শদাতা এবং কমিউনিটি শিক্ষক যিনি মাদ্রাসা ছাত্রদের জন্য ডিজিটাল সাক্ষরতা প্রচারে নিবেদিত। তিনি কম্পিউটার ল্যাব প্রতিষ্ঠা করেছেন এবং আধুনিক শিক্ষাকে সমর্থন করার জন্য অফিসিয়াল ওয়েবসাইট তৈরি করেছেন।'
    },
    'publications-title': {
        en: 'Published Works:',
        bn: 'প্রকাশিত গ্রন্থসমূহ:'
    },
    'book1-title': {
        en: 'Democracy and Political Parties in Theoretical & Practical Perspective',
        bn: 'তাত্ত্বিক ও ব্যবহারিক দৃষ্টিকোণে গণতন্ত্র এবং রাজনৈতিক দল'
    },
    'book2-title': {
        en: 'Electoral Violence in Bangladesh: A Study of the 2001 & 2008 Parliamentary Elections',
        bn: 'বাংলাদেশে নির্বাচনী সহিংসতা: ২০০১ ও ২০০৮ সালের সংসদীয় নির্বাচনের একটি গবেষণা'
        },
    'founder-linkedin-text': {
        en: 'To know more about the founder visit: ',
        bn: 'প্রতিষ্ঠাতা সম্পর্কে আরও জানতে ভিজিট করুন: '
    },
    'founder-linkedin-link': {
        en: 'LinkedIn Profile',
        bn: 'লিংকডইন প্রোফাইল'
    },
        'why-opened-title': {
            en: 'Why We Opened This Lab',
            bn: 'আমরা কেন এই ল্যাবটি খুললাম'
        },
        'why-opened-description': {
            en: 'We envisioned a space where students could develop essential skills in Computer Science and English, ensuring they are well-prepared for modern educational and professional challenges. His goal was to provide young learners with the tools they need to succeed in a rapidly evolving digital world while maintaining a strong foundation in Islamic education.',
            bn: 'আমরা এমন একটি স্থান কল্পনা করেছি যেখানে শিক্ষার্থীরা কম্পিউটার বিজ্ঞান এবং ইংরেজিতে প্রয়োজনীয় দক্ষতা বিকাশ করতে পারে, নিশ্চিত করে যে তারা আধুনিক শিক্ষাগত এবং পেশাদার চ্যালেঞ্জগুলির জন্য ভালভাবে প্রস্তুত। তার লক্ষ্য ছিল তরুণ শিক্ষার্থীদের দ্রুত পরিবর্তিত ডিজিটাল বিশ্বে সফল হওয়ার জন্য প্রয়োজনীয় সরঞ্জামগুলি সরবরাহ করা, একই সাথে ইসলামী শিক্ষার একটি শক্ত ভিত্তি বজায় রাখা।'
        },
        'lab-purpose-title': {
        en: 'Main Purpose of the Computer Lab',
        bn: 'কম্পিউটার ল্যাবের মূল উদ্দেশ্য'
    },
    'lab-purpose-p1': {
        en: 'The main purpose of the Computer Lab is to help students learn English, Mathematics and Bangla so they can better understand and explain the Qur\'an and Hadith in Arabic, English, and Bangla.',
        bn: 'কম্পিউটার ল্যাব প্রতিষ্ঠার মূল উদ্দেশ্য হলো শিক্ষার্থীদের ইংরেজি, গণিত ও বাংলা শেখানো, যাতে তারা আরবি, ইংরেজি ও বাংলায় কুরআন ও হাদীসকে আরও ভালোভাবে বুঝতে ও ব্যাখ্যা করতে সক্ষম হয়।'
    },
    'lab-purpose-p2': {
        en: 'Through computer education, students gain the ability to search for authentic Islamic resources, access global knowledge, and use essential software for their daily academic and personal needs.',
        bn: 'কম্পিউটার শিক্ষার মাধ্যমে শিক্ষার্থীরা নির্ভরযোগ্য ইসলামী উপকরণ খুঁজে পাওয়া, বৈশ্বিক জ্ঞান অর্জন এবং দৈনন্দিন শিক্ষা ও ব্যক্তিগত প্রয়োজনের গুরুত্বপূর্ণ সফটওয়্যার ব্যবহার করার দক্ষতা অর্জন করবে।'
    },
    'lab-purpose-p3': {
        en: 'With these skills, they will be able to share the beauty of Islamic teachings with people around the world.',
        bn: 'এই জ্ঞান ও দক্ষতার মাধ্যমে তারা বিশ্বের সামনে ইসলামের সৌন্দর্য তুলে ধরতে সক্ষম হবে।'
    },
        'importance-title': {
            en: 'The Importance of Our Lab',
            bn: 'আমাদের ল্যাবের গুরুত্ব'
        },
        'importance-description': {
            en: 'Our lab plays a crucial role in equipping students with the necessary skills to thrive in today\'s competitive environment. The key focus areas include:',
            bn: 'আমাদের ল্যাব শিক্ষার্থীদের আজকের প্রতিযোগিতামূলক পরিবেশে উন্নতি করার জন্য প্রয়োজনীয় দক্ষতা দিয়ে সজ্জিত করতে একটি গুরুত্বপূর্ণ ভূমিকা পালন করে। মূল ফোকাস এলাকাগুলি অন্তর্ভুক্ত:'
        },
        'focus-areas': {
            en: [
                '<strong>Computer Science:</strong> Providing hands-on experience with technology, programming, and digital literacy to prepare students for the future.',
                '<strong>English Language Proficiency:</strong> Strengthening communication skills to enhance career and academic opportunities.',
                '<strong>Mathematics Mastery:</strong> Developing critical thinking and problem-solving skills essential for various disciplines.',
                '<strong>Islamic Studies:</strong> Integrating Hadith and Quran education to ensure a well-rounded moral and spiritual foundation.'
            ],
            bn: [
                '<strong>কম্পিউটার বিজ্ঞান:</strong> শিক্ষার্থীদের ভবিষ্যতের জন্য প্রস্তুত করতে প্রযুক্তি, প্রোগ্রামিং এবং ডিজিটাল সাক্ষরতার সাথে হাতে-কলমে অভিজ্ঞতা প্রদান।',
                '<strong>ইংরেজি ভাষার দক্ষতা:</strong> ক্যারিয়ার এবং একাডেমিক সুযোগ বাড়ানোর জন্য যোগাযোগ দক্ষতা শক্তিশালী করা।',
                '<strong>গণিত দক্ষতা:</strong> বিভিন্ন শৃঙ্খলার জন্য প্রয়োজনীয় সমালোচনামূলক চিন্তাভাবনা এবং সমস্যা সমাধানের দক্ষতা বিকাশ।',
                '<strong>ইসলামী শিক্ষা:</strong> একটি সু-গঠিত নৈতিক এবং আধ্যাত্মিক ভিত্তি নিশ্চিত করতে হাদিস এবং কুরআন শিক্ষার সংহতকরণ।'
            ]
        },
        'commitment-title': {
            en: 'Our Commitment',
            bn: 'আমাদের প্রতিশ্রুতি'
        },
        'commitment-description': {
            en: 'We are dedicated to fostering a dynamic learning environment that nurtures curiosity, creativity, and competence in every student. Our educators strive to support and challenge students, ensuring they reach their full potential.',
            bn: 'আমরা একটি গতিশীল শিক্ষার পরিবেশ গড়ে তোলার জন্য প্রতিশ্রুতিবদ্ধ যা প্রতিটি শিক্ষার্থীর মধ্যে কৌতূহল, সৃজনশীলতা এবং দক্ষতা লালন করে। আমাদের শিক্ষকেরা শিক্ষার্থীদের সমর্থন এবং চ্যালেঞ্জ করার জন্য প্রচেষ্টা করে, নিশ্চিত করে যে তারা তাদের পূর্ণ সম্ভাবনায় পৌঁছায়।'
        },
        'join-us-title': {
            en: 'Join Us on This Journey',
            bn: 'এই যাত্রায় আমাদের সাথে যোগ দিন'
        },
        'join-us-description': {
            en: 'If you believe in the power of education to shape a brighter future, we invite you to join us in this mission. Together, we can empower the next generation with knowledge, skills, and values that will serve them for life.',
            bn: 'যদি আপনি একটি উজ্জ্বল ভবিষ্যত গড়তে শিক্ষার শক্তিতে বিশ্বাস করেন, আমরা আপনাকে এই মিশনে আমাদের সাথে যোগ দেওয়ার জন্য আমন্ত্রণ জানাই। একসাথে, আমরা পরবর্তী প্রজন্মকে এমন জ্ঞান, দক্ষতা এবং মূল্যবোধ দিয়ে ক্ষমতায়িত করতে পারি যা তাদের জীবনের জন্য পরিবেশন করবে।'
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

    const moreBtn = document.getElementById("moreBtn");
    const moreContent = document.getElementById("moreContent");
    if (moreBtn && moreContent) {
        const isExpanded = window.getComputedStyle(moreContent).display !== "none";
        if (language === 'bn') {
            moreBtn.innerText = isExpanded ? "কম" : "আরও";
        } else {
            moreBtn.innerText = isExpanded ? "Less" : "More";
        }
    }
}

// Add event listeners for language buttons
document.addEventListener("DOMContentLoaded", () => {
    // Initial content update based on global language
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';
    updateVisionContent(currentLang);

    const moreContent = document.getElementById("moreContent");
    if (moreContent) {
        moreContent.style.display = "none";
    }
});

// Listen for global language change events
window.addEventListener('languageChange', (event) => {
    updateVisionContent(event.detail);
});
