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

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "block";
        moreBtn.innerText = "Less"; // Change button text to "Less"
    } else {
        moreContent.style.display = "none";
        moreBtn.innerText = "More"; // Change button text to "More"
    }
}

// Function to set the language
function setLanguage(language) {
    const elements = {
        'journal-title': {
            en: 'QH Research',
            bn: 'কিউএইচ গবেষণা'
        },
        'journal-description': {
            en: 'Welcome to Quran and Hadith Research, where we publish insightful articles and research on various topics related to Islamic studies, education, and more.',
            bn: 'কুরআন ও হাদিস গবেষণায় আপনাকে স্বাগতম, যেখানে আমরা ইসলামিক স্টাডিজ, শিক্ষা এবং আরও অনেক কিছু সম্পর্কিত বিভিন্ন বিষয়ের উপর অন্তর্দৃষ্টিপূর্ণ নিবন্ধ এবং গবেষণা প্রকাশ করি।।'
        },
        'latest-articles-title': {
            en: 'Latest Articles',
            bn: 'সর্বশেষ নিবন্ধ'
        },
        'latest-articles-list': {
            en: [
                'The Importance of Quranic Studies in Modern Education',
                'Integrating Technology in Islamic Education',
                'The Role of Hadith in Shaping Islamic Jurisprudence'
            ],
            bn: [
                'আধুনিক শিক্ষায় কুরআনিক স্টাডিজের গুরুত্ব',
                'ইসলামী শিক্ষায় প্রযুক্তির সংমিশ্রণ',
                'ইসলামী আইনশাস্ত্র গঠনে হাদিসের ভূমিকা'
            ]
        },
        'research-papers-title': {
            en: 'Research Papers',
            bn: 'গবেষণা পত্র'
        },
        'research-papers-list': {
            en: [
                'A Comparative Study of Islamic and Western Educational Systems',
                'The Impact of Islamic Teachings on Modern Society',
                'The Evolution of Fiqh: Historical Perspectives and Contemporary Issues'
            ],
            bn: [
                'ইসলামী এবং পশ্চিমা শিক্ষাব্যবস্থার তুলনামূলক অধ্যয়ন',
                'আধুনিক সমাজে ইসলামী শিক্ষার প্রভাব',
                'ফিকহের বিবর্তন: ঐতিহাসিক দৃষ্টিভঙ্গি এবং সমসাময়িক বিষয়'
            ]
        },
        'research-topics-title': {
            en: 'Research Topics for Hadith Department Students',
            bn: 'হাদিস বিভাগের শিক্ষার্থীদের জন্য গবেষণার বিষয়'
        },
        'research-topics-list': {
            en: [
                'The Historical Context of Quranic Revelations',
                'The Compilation and Preservation of Hadith',
                'The Role of Women in Early Islamic History',
                'Comparative Analysis of Islamic and Western Legal Systems',
                'The Influence of Islamic Philosophy on Modern Thought'
            ],
            bn: [
                'কুরআনিক প্রকাশনার ঐতিহাসিক প্রেক্ষাপট',
                'হাদিসের সংকলন এবং সংরক্ষণ',
                'প্রাথমিক ইসলামী ইতিহাসে নারীদের ভূমিকা',
                'ইসলামী এবং পশ্চিমা আইনি ব্যবস্থার তুলনামূলক বিশ্লেষণ',
                'আধুনিক চিন্তায় ইসলামী দর্শনের প্রভাব'
            ]
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
}

// Add event listeners for language buttons
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('language-en').addEventListener('click', () => setLanguage('en'));
    document.getElementById('language-bn').addEventListener('click', () => setLanguage('bn'));

    // Set initial state for "More" content and button text
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    moreContent.style.display = "none";
    moreBtn.innerText = "More";
});
