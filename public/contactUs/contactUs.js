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
function updateContactUsContent(language) {
    const elements = {
        'contact-title': {
            en: 'Contact Us',
            bn: 'যোগাযোগ করুন'
        },
        'contact-description': {
            en: 'If you have questions about our educational programs, admissions, or general inquiries, we are here to assist you. Please reach out to our dedicated staff via phone or email.',
            bn: 'যদি আপনার আমাদের শিক্ষামূলক প্রোগ্রাম, ভর্তি বা সাধারণ অনুসন্ধান সম্পর্কে প্রশ্ন থাকে, আমরা আপনাকে সহায়তা করতে এখানে আছি। দয়া করে ফোন বা ইমেলের মাধ্যমে আমাদের নিবেদিত কর্মীদের সাথে যোগাযোগ করুন।'
        },
        'support-title': {
            en: 'Customer Support',
            bn: 'গ্রাহক সহায়তা'
        },
        'support-description': {
            en: 'For any questions regarding admissions, educational services, or assistance with the application process, please contact our customer support team. Most common questions and answers can also be found on our FAQ page.',
            bn: 'ভর্তি, শিক্ষামূলক পরিষেবা বা আবেদন প্রক্রিয়ার সাথে সম্পর্কিত যেকোন প্রশ্নের জন্য, দয়া করে আমাদের গ্রাহক সহায়তা দলের সাথে যোগাযোগ করুন। সবচেয়ে সাধারণ প্রশ্ন এবং উত্তরগুলি আমাদের FAQ পৃষ্ঠায়ও পাওয়া যাবে।'
        },
        'support-phone': {
            en: 'Phone: <strong>008801926174311</strong>',
            bn: 'ফোন: <strong>008801926174311</strong>'
        },
        'support-email': {
            en: 'Email: <strong>pgmadrasha@gmail.com</strong>',
            bn: 'ইমেল: <strong>pgmadrasha@gmail.com</strong>'
        },
        'weekend-title': {
            en: 'Need Assistance on Weekends?',
            bn: 'সপ্তাহান্তে সহায়তা প্রয়োজন?'
        },
        'weekend-description': {
            en: 'If you need immediate assistance regarding your inquiries during the weekend or on public holidays, please contact our weekend support line.',
            bn: 'যদি আপনি সপ্তাহান্তে বা সরকারি ছুটির দিনে আপনার অনুসন্ধানের বিষয়ে তাত্ক্ষণিক সহায়তা প্রয়োজন, দয়া করে আমাদের সপ্তাহান্তের সহায়তা লাইনের সাথে যোগাযোগ করুন।'
        },
        'weekend-phone': {
            en: 'Emergency Number: <strong>008801831889749</strong> (Available Sat-Sun: 9.00-17.00)',
            bn: 'জরুরী নম্বর: <strong>008801831889749</strong> (শনিবার-রবিবার: 9.00-17.00 উপলব্ধ)'
        },
        'inquiries-title': {
            en: 'General Inquiries',
            bn: 'সাধারণ অনুসন্ধান'
        },
        'inquiries-description': {
            en: 'For non-urgent questions related to educational programs, events, or general inquiries, please reach out to us during the weekdays using our regular contact details:',
            bn: 'শিক্ষামূলক প্রোগ্রাম, ইভেন্ট বা সাধারণ অনুসন্ধানের সাথে সম্পর্কিত অ-জরুরী প্রশ্নের জন্য, দয়া করে আমাদের নিয়মিত যোগাযোগের বিবরণ ব্যবহার করে সপ্তাহের দিনগুলিতে আমাদের সাথে যোগাযোগ করুন:'
        },
        'inquiries-phone': {
            en: 'Phone: <strong>008801632482306</strong>',
            bn: 'ফোন: <strong>008801632482306</strong>'
        },
        'inquiries-email': {
            en: 'Email: <strong>pgmadrasha@gmail.com</strong>',
            bn: 'ইমেল: <strong>pgmadrasha@gmail.com</strong>'
        },
        'contact-address': {
            en: '<strong>Address:</strong> Poschimgaon Madrasha, Poschimgaon, Demra 1320, Rupgonj, Narayangong, Dhaka, Bangladesh',
            bn: '<strong>ঠিকানা:</strong> পশ্চিমগাঁও মাদ্রাসা, পশ্চিমগাঁও, ডেমরা ১৩২০, রূপগঞ্জ, নারায়ণগঞ্জ, ঢাকা, বাংলাদেশ'
        },
        'additional-info-title': {
            en: 'Additional Information',
            bn: 'অতিরিক্ত তথ্য'
        },
        'additional-info-desc': {
            en: 'More about our mission, vision, and future goals...',
            bn: 'আমাদের লক্ষ্য, দৃষ্টি এবং ভবিষ্যতের লক্ষ্য সম্পর্কে আরও...'
        },
        'view-larger-map': {
            en: 'View Larger Map',
            bn: 'বড় মানচিত্র দেখুন'
        }
    };

    for (const id in elements) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = elements[id][language];
        }
    }

    // Update buttons based on state and language
    const moreBtn = document.getElementById("moreBtn");
    const moreContent = document.getElementById("moreContent");
    if (moreBtn && moreContent) {
        const isExpanded = window.getComputedStyle(moreContent).display !== "none";
        if (language === 'bn') {
            moreBtn.innerText = isExpanded ? "কম দেখুন" : "আরও দেখুন";
        } else {
            moreBtn.innerText = isExpanded ? "Less" : "More";
        }
    }

    const mapBtn = document.getElementById("mapBtn");
    const mapContainer = document.getElementById("mapContainer");
    if (mapBtn && mapContainer) {
        const isMapVisible = window.getComputedStyle(mapContainer).display !== "none";
        if (language === 'bn') {
            mapBtn.innerText = isMapVisible ? "মানচিত্র লুকান" : "মানচিত্র দেখুন";
        } else {
            mapBtn.innerText = isMapVisible ? "Hide Map" : "Show Map";
        }
    }
}

// Function to toggle the visibility of the map
function toggleMap() {
    const mapContainer = document.getElementById("mapContainer");
    const mapBtn = document.getElementById("mapBtn");
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';

    if (window.getComputedStyle(mapContainer).display === "none") {
        mapContainer.style.display = "block";
        mapBtn.innerText = currentLang === 'bn' ? "মানচিত্র লুকান" : "Hide Map";
    } else {
        mapContainer.style.display = "none";
        mapBtn.innerText = currentLang === 'bn' ? "মানচিত্র দেখুন" : "Show Map";
    }
}

// Function to toggle the visibility of the "More" content
function toggleMore() {
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    const currentLang = localStorage.getItem('preferredLanguage') || 'en';

    if (window.getComputedStyle(moreContent).display === "none") {
        moreContent.style.display = "block";
        moreBtn.innerText = currentLang === 'bn' ? "কম দেখুন" : "Less";
    } else {
        moreContent.style.display = "none";
        moreBtn.innerText = currentLang === 'bn' ? "আরও দেখুন" : "More";
    }
}

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateContactUsContent(event.detail);
});

document.addEventListener("DOMContentLoaded", () => {
    const moreContent = document.getElementById("moreContent");
    if (moreContent) {
        moreContent.style.display = "none"; // Ensure initial state is set
    }
    const mapContainer = document.getElementById("mapContainer");
    if (mapContainer) {
        mapContainer.style.display = "none"; // Ensure initial state is set
    }

    // Initialize language
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateContactUsContent(savedLanguage);
});