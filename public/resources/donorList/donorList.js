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
        'donor-criteria-list': {
            en: [
                'Must reside abroad.',
                'Commit to donating monthly or annually.',
                'Be a well-wisher of our Madrasah and its mission.'
            ],
            bn: [
                'বিদেশে বসবাস করতে হবে।',
                'মাসিক বা বার্ষিক দান করতে প্রতিশ্রুতিবদ্ধ।',
                'আমাদের মাদ্রাসা এবং এর মিশনের শুভাকাঙ্ক্ষী হতে হবে।'
            ]
        },
        'esteemed-donors-title': {
            en: 'Our Esteemed Donors',
            bn: 'আমাদের সম্মানিত দাতারা'
        },
        'contact-us-title': {
            en: 'Contact Us to be an Honourable Donor',
            bn: 'সম্মানিত দাতা হতে আমাদের সাথে যোগাযোগ করুন'
        },
        'contact-us-description': {
            en: 'If you\'re interested in becoming a donor, please reach out to us through our contact page for more information on how you can help.',
            bn: 'আপনি যদি দাতা হতে আগ্রহী হন, অনুগ্রহ করে আমাদের যোগাযোগ পৃষ্ঠার মাধ্যমে আমাদের সাথে যোগাযোগ করুন কিভাবে আপনি সাহায্য করতে পারেন তার আরও তথ্যের জন্য।'
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
});
