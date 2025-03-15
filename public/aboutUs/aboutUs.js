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
        'about-title': {
            en: 'About Us',
            bn: 'আমাদের সম্পর্কে'
        },
        'about-description': {
            en: 'Poschimgaon Madrasha -E- Islamia Jameul Ulum is dedicated to providing a comprehensive Islamic education along with modern academic subjects. Our mission is to nurture young minds and prepare them for a successful future.',
            bn: 'পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুম একটি বিস্তৃত ইসলামী শিক্ষা এবং আধুনিক একাডেমিক বিষয়গুলি প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের মিশন হল তরুণ মনকে লালন করা এবং তাদের একটি সফল ভবিষ্যতের জন্য প্রস্তুত করা।'
        },
        'mission-title': {
            en: 'Our Mission',
            bn: 'আমাদের মিশন'
        },
        'mission-description': {
            en: 'Our mission is to provide a balanced education that integrates Islamic teachings with modern academic subjects. We aim to develop well-rounded individuals who are knowledgeable, ethical, and capable of contributing positively to society.',
            bn: 'আমাদের মিশন হল একটি ভারসাম্যপূর্ণ শিক্ষা প্রদান করা যা ইসলামী শিক্ষার সাথে আধুনিক একাডেমিক বিষয়গুলিকে একত্রিত করে। আমরা এমন সু-গঠিত ব্যক্তিদের বিকাশ করতে চাই যারা জ্ঞানী, নৈতিক এবং সমাজে ইতিবাচক অবদান রাখতে সক্ষম।'
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
    if (moreContent && moreBtn) {
        moreContent.style.display = "none";
        moreBtn.innerText = "More";
    }

    // Set initial language based on document language or default to English
    setLanguage(document.documentElement.lang || 'en');
});