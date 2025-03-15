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

// Function to set the language
function setLanguage(language) {
    const elements = {
        'page-title': {
            en: 'Join Our Team at Poschim Gaon Madrasha -E- Islamia Jameul Ulum!',
            bn: 'পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুম-এ আমাদের টিমে যোগ দিন!'
        },
        'intro-paragraph': {
            en: 'At Poschim Gaon Madrasha, we are dedicated to nurturing young minds through qualified education and innovative teaching methods. We are actively seeking passionate educators and support staff to join our dynamic team!',
            bn: 'পশ্চিমগাঁও মাদ্রাসা-এ, আমরা যোগ্য শিক্ষার মাধ্যমে তরুণ মনকে লালন-পালন করতে এবং উদ্ভাবনী শিক্ষণ পদ্ধতির মাধ্যমে নিবেদিত। আমরা সক্রিয়ভাবে আমাদের গতিশীল দলে যোগদানের জন্য উত্সাহী শিক্ষাবিদ এবং সহায়তা কর্মীদের সন্ধান করছি!'
        },
        'working-title': {
            en: 'Working at Poschim Gaon Madrasha',
            bn: 'পশ্চিমগাঁও মাদ্রাসায় কাজ করা'
        },
        'working-paragraph': {
            en: 'We believe in creating a supportive environment for our educators, ensuring they have the resources they need to succeed. Our teachers are essential to our mission of delivering quality education, and we strive to provide a positive work culture.',
            bn: 'আমরা আমাদের শিক্ষাবিদদের জন্য একটি সহায়ক পরিবেশ তৈরি করতে বিশ্বাস করি, নিশ্চিত করে যে তাদের সফল হওয়ার জন্য প্রয়োজনীয় সংস্থানগুলি রয়েছে। আমাদের শিক্ষকেরা মানসম্পন্ন শিক্ষা প্রদানের আমাদের মিশনের জন্য অপরিহার্য, এবং আমরা একটি ইতিবাচক কাজের সংস্কৃতি প্রদানের জন্য প্রচেষ্টা করি।'
        },
        'offer-title': {
            en: 'What We Offer',
            bn: 'আমরা কি অফার করি'
        },
        'offer-list': {
            en: [
                'A collaborative atmosphere with a focus on innovative teaching methods',
                'Support for language development and integration for our staff'
            ],
            bn: [
                'উদ্ভাবনী শিক্ষণ পদ্ধতির উপর ফোকাস সহ একটি সহযোগী পরিবেশ',
                'আমাদের কর্মীদের জন্য ভাষা উন্নয়ন এবং একীকরণের জন্য সহায়তা'
            ]
        },
        'more-paragraph': {
            en: 'At Poschim Gaon Madrasha, you’ll find a community that values every staff member’s contribution. We are committed to providing full schedules while ensuring that each educator feels supported and appreciated.',
            bn: 'পশ্চিমগাঁও মাদ্রাসা-এ, আপনি এমন একটি সম্প্রদায় পাবেন যা প্রতিটি কর্মীর অবদানকে মূল্য দেয়। আমরা পূর্ণ সময়সূচী প্রদান করতে প্রতিশ্রুতিবদ্ধ, নিশ্চিত করে যে প্রতিটি শিক্ষক সমর্থিত এবং প্রশংসিত বোধ করেন।'
        },
        'why-title': {
            en: 'Why Work with Us?',
            bn: 'কেন আমাদের সাথে কাজ করবেন?'
        },
        'why-list': {
            en: [
                'A respectful and encouraging work environment',
                'Opportunities for personal and professional growth',
                'Access to training and development programs'
            ],
            bn: [
                'একটি সম্মানজনক এবং উত্সাহজনক কাজের পরিবেশ',
                'ব্যক্তিগত এবং পেশাদার বৃদ্ধির সুযোগ',
                'প্রশিক্ষণ এবং উন্নয়ন প্রোগ্রামগুলিতে অ্যাক্সেস'
            ]
        },
        'apply-paragraph': {
            en: 'Ready to make a difference in the lives of students? Join us at Poschim Gaon Madrasha -i- Islamia Jameul Ulom and become part of a team that prioritizes quality education and community values. Apply today and embark on your educational journey with us!',
            bn: 'শিক্ষার্থীদের জীবনে পরিবর্তন আনতে প্রস্তুত? পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুম-এ আমাদের সাথে যোগ দিন এবং এমন একটি দলের অংশ হয়ে উঠুন যা মানসম্পন্ন শিক্ষা এবং সম্প্রদায়ের মূল্যবোধকে অগ্রাধিকার দেয়। আজই আবেদন করুন এবং আমাদের সাথে আপনার শিক্ষামূলক যাত্রা শুরু করুন!'
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

// Load initial content
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(document.documentElement.lang || 'en');

    // Set initial state for "More" content and button text
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    moreContent.style.display = "none";
    moreBtn.innerText = "More";
});
