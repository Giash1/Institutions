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

    if (moreContent.style.display === "none") {
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
        'history-title': {
            en: 'History of Our Madrasa',
            bn: 'আমাদের মাদ্রাসার ইতিহাস'
        },
        'history-description': {
            en: 'Our madrasa was established in 1954 by <strong>Muḥammadullāh ibn Idrīs ibn Akram ad-Dīn al-Miyānjī</strong>, commonly known as <strong>Hafezzī Huzūr</strong>. A prominent Islamic leader and politician, Hafezzī Huzūr laid the foundation for a nurturing environment where students could grow academically and spiritually.',
            bn: 'আমাদের মাদ্রাসা ১৯৫৪ সালে <strong>মুহাম্মদুল্লাহ ইবনে ইদ্রিস ইবনে আকরাম আদ-দীন আল-মিয়াঞ্জী</strong> দ্বারা প্রতিষ্ঠিত হয়েছিল, যিনি সাধারণত <strong>হাফেজ্জী হুজুর</strong> নামে পরিচিত। একজন বিশিষ্ট ইসলামী নেতা এবং রাজনীতিবিদ, হাফেজ্জী হুজুর একটি লালনপালন পরিবেশের ভিত্তি স্থাপন করেছিলেন যেখানে শিক্ষার্থীরা একাডেমিক এবং আধ্যাত্মিকভাবে বৃদ্ধি পেতে পারে।'
        },
        'establishment-details': {
            en: [
                '🕌 Mosque Established (1941) |',
                '📖 Madrasa Established (1954) | ',
                '👳‍♂️ Arrival of Hafizji Huzur (Rah.) (1981) |'
     ],
            bn: ['🕌 মসজিদ প্রতিষ্ঠা (১৯৪১) |',
                '📖 মাদ্রাসা প্রতিষ্ঠা (১৯৫৪) |  ',
                '👳‍♂️ হাফিজজি হুজুর (রাহ.) আগমন (১৯৮১) | '
     ],
        },
        'early-life-title': {
            en: 'Early Life and Education',
            bn: 'প্রারম্ভিক জীবন এবং শিক্ষা'
        },
        'early-life-description': {
            en: 'Born in 1895 in Ludhua, Bangladesh, Muhammadullah\'s education began at Fatehpur Primary School and continued at various madrasas, including Mazahir Uloom in Saharanpur. He completed his studies at Darul Uloom Deoband in 1923, earning a high-class certificate.',
            bn: '১৮৯৫ সালে লুধুয়া, বাংলাদেশে জন্মগ্রহণ করেন, মুহাম্মদুল্লাহর শিক্ষা ফতেহপুর প্রাথমিক বিদ্যালয়ে শুরু হয় এবং সাহারানপুরের মাজাহির উলুম সহ বিভিন্ন মাদ্রাসায় অব্যাহত থাকে। তিনি ১৯২৩ সালে দারুল উলুম দেওবন্দ থেকে তার পড়াশোনা শেষ করেন এবং একটি উচ্চ-শ্রেণীর সার্টিফিকেট অর্জন করেন।'
        },
        'political-career-title': {
            en: 'Political Career',
            bn: 'রাজনৈতিক জীবন'
        },
        'political-career-description': {
            en: 'Hafezzī Huzūr founded the Nizam-e-Islam Party in 1952, advocating for the incorporation of Islamic principles in governance. He also established the Bangladesh Khilafat Andolan in 1981, striving for a political landscape rooted in Islamic values.',
            bn: 'হাফেজ্জী হুজুর ১৯৫২ সালে নিজাম-ই-ইসলাম পার্টি প্রতিষ্ঠা করেন, শাসন ব্যবস্থায় ইসলামী নীতির অন্তর্ভুক্তির পক্ষে সমর্থন করেন। তিনি ১৯৮১ সালে বাংলাদেশ খিলাফত আন্দোলনও প্রতিষ্ঠা করেন, যা ইসলামী মূল্যবোধের ভিত্তিতে একটি রাজনৈতিক প্রেক্ষাপটের জন্য প্রচেষ্টা করে।'
        },
        'legacy-title': {
            en: 'Legacy',
            bn: 'উত্তরাধিকার'
        },
        'legacy-description': {
            en: 'Hafezzī Huzūr\'s contributions to both education and politics have left a lasting impact. His vision continues to inspire us as we uphold the values he instilled in our madrasa.',
            bn: 'শিক্ষা এবং রাজনীতিতে হাফেজ্জী হুজুরের অবদান একটি স্থায়ী প্রভাব ফেলেছে। তার দৃষ্টি আমাদের অনুপ্রাণিত করতে থাকে কারণ আমরা আমাদের মাদ্রাসায় তিনি যে মূল্যবোধগুলি প্রবর্তন করেছিলেন তা বজায় রাখি।'
        },
        'land-donation-title': {
            en: 'Land Donation',
            bn: 'জমি দান'
        },
        'land-donation-description': {
            en: 'The land for our madrasa was generously donated by <span style="color: #FF4500;"> Late Amir Ali Bhuiyan</span>, whose legacy remains a vital part of our history.',
            bn: 'আমাদের মাদ্রাসার জন্য জমির বেশিরভাগই উদারভাবে দান করেছিলেন  <span style="color: #FF4500;"> মরহুম আমির আলী ভূঁইয়া</span>, যার অবদান আমাদের ইতিহাসের একটি গুরুত্বপূর্ণ অংশ রয়ে গেছে।'
        },
        
        'remembering-efforts-title': {
            en: 'Contributions Remembered',
            bn: 'স্মরণীয় অবদানসমূহ'
        },
        'remembering-efforts-description': {
            en: 'Some other residents of Poschimgaon were also vitally involved in establishing the madrasa. Their contributions, both in resources and efforts, deserve recognition."', 
            bn: 'পশ্চিমগাঁওয়ের আরও কিছু বাসিন্দা মাদ্রাসা প্রতিষ্ঠায় গুরুত্বপূর্ণ ভূমিকা রেখেছেন। তাদের সম্পদ ও পরিশ্রমের অবদান স্বীকৃতি পাওয়া উচিত।'
    },
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
});
