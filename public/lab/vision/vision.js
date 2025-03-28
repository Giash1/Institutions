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

    // Check the actual computed style
    if (window.getComputedStyle(moreContent).display === "none") {
        moreContent.style.display = "block";
        moreBtn.innerText = "Less";
    } else {
        moreContent.style.display = "none";
        moreBtn.innerText = "More";
    }
}

// Function to set the language
function setLanguage(language) {
    const elements = {
        'vision-title': {
            en: 'Our Vision: Empowering Minds for a Bright Future',
            bn: 'আমাদের দৃষ্টি: উজ্জ্বল ভবিষ্যতের জন্য মেধা বিকাশ'
        },
        'why-opened-title': {
            en: 'Why We Opened This Lab',
            bn: 'আমরা কেন এই ল্যাবটি খুললাম'
        },
        'why-opened-description': {
            en: 'We envisioned a space where students could develop essential skills in Computer Science and English, ensuring they are well-prepared for modern educational and professional challenges. His goal was to provide young learners with the tools they need to succeed in a rapidly evolving digital world while maintaining a strong foundation in Islamic education.',
            bn: 'আমরা এমন একটি স্থান কল্পনা করেছি যেখানে শিক্ষার্থীরা কম্পিউটার বিজ্ঞান এবং ইংরেজিতে প্রয়োজনীয় দক্ষতা বিকাশ করতে পারে, নিশ্চিত করে যে তারা আধুনিক শিক্ষাগত এবং পেশাদার চ্যালেঞ্জগুলির জন্য ভালভাবে প্রস্তুত। তার লক্ষ্য ছিল তরুণ শিক্ষার্থীদের দ্রুত পরিবর্তিত ডিজিটাল বিশ্বে সফল হওয়ার জন্য প্রয়োজনীয় সরঞ্জামগুলি সরবরাহ করা, একই সাথে ইসলামী শিক্ষার একটি শক্ত ভিত্তি বজায় রাখা।'
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
}

// Add event listeners for language buttons
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('language-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('language-bn').addEventListener('click', () => setLanguage('bn'));

    const moreContent = document.getElementById("moreContent");
    if (moreContent) {
        moreContent.style.display = "none";
    }
});
