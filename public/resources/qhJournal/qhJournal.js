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
            en: 'QH Journal',
            bn: 'কিউএইচ জার্নাল'
        },
        'journal-description': {
            en: 'Welcome to the QH Journal, where we publish insightful articles and research on various topics related to Islamic studies, education, and more.',
            bn: 'কিউএইচ জার্নালে স্বাগতম, যেখানে আমরা ইসলামী শিক্ষা, শিক্ষা এবং আরও অনেক বিষয়ে বিভিন্ন বিষয়ে অন্তর্দৃষ্টিপূর্ণ নিবন্ধ এবং গবেষণা প্রকাশ করি।'
        },
        'latest-articles-title': {
            en: 'Latest Articles',
            bn: 'সর্বশেষ নিবন্ধ'
        },
        'latest-articles-list': {
            en: [
                '<a href="../../articles/quranic-studies.html">The Importance of Quranic Studies in Modern Education</a>',
                '<a href="../../articles/technology-in-education.html">Integrating Technology in Islamic Education</a>',
                '<a href="../../articles/hadith-jurisprudence.html">The Role of Hadith in Shaping Islamic Jurisprudence</a>'
            ],
            bn: [
                '<a href="../../articles/quranic-studies.html">আধুনিক শিক্ষায় কুরআনিক স্টাডিজের গুরুত্ব</a>',
                '<a href="../../articles/technology-in-education.html">ইসলামী শিক্ষায় প্রযুক্তির সংমিশ্রণ</a>',
                '<a href="../../articles/hadith-jurisprudence.html">ইসলামী আইনশাস্ত্র গঠনে হাদিসের ভূমিকা</a>'
            ]
        },
        'research-papers-title': {
            en: 'Research Papers',
            bn: 'গবেষণা পত্র'
        },
        'research-papers-list': {
            en: [
                '<a href="../../papers/comparative-study.html">A Comparative Study of Islamic and Western Educational Systems</a>',
                '<a href="../../papers/islamic-teachings-impact.html">The Impact of Islamic Teachings on Modern Society</a>',
                '<a href="../../papers/evolution-of-fiqh.html">The Evolution of Fiqh: Historical Perspectives and Contemporary Issues</a>'
            ],
            bn: [
                '<a href="../../papers/comparative-study.html">ইসলামী এবং পশ্চিমা শিক্ষাব্যবস্থার তুলনামূলক অধ্যয়ন</a>',
                '<a href="../../papers/islamic-teachings-impact.html">আধুনিক সমাজে ইসলামী শিক্ষার প্রভাব</a>',
                '<a href="../../papers/evolution-of-fiqh.html">ফিকহের বিবর্তন: ঐতিহাসিক দৃষ্টিভঙ্গি এবং সমসাময়িক বিষয়</a>'
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
