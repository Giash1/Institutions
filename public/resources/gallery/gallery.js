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
function updateGalleryContent(language) {
    const elements = {
        'gallery-title': {
            en: 'Explore Our Vibrant Gallery',
            bn: 'আমাদের প্রাণবন্ত গ্যালারি অন্বেষণ করুন'
        },
        'gallery-description': {
            en: 'Dive into our vibrant gallery, showcasing the heart and soul of our madrasa. Each image captures the joy of learning, the dedication of our students, and the sense of community that defines our institution.',
            bn: 'আমাদের প্রাণবন্ত গ্যালারি অন্বেষণ করুন, যা আমাদের মাদ্রাসার হৃদয় এবং আত্মাকে প্রদর্শন করে। প্রতিটি ছবি শেখার আনন্দ, আমাদের শিক্ষার্থীদের উত্সর্গ এবং আমাদের প্রতিষ্ঠানের সংজ্ঞায়িত সম্প্রদায়ের অনুভূতি ধারণ করে।'
        },
        'celebrating-title': {
            en: 'Celebrating Our Students’ Achievements',
            bn: 'আমাদের শিক্ষার্থীদের অর্জন উদযাপন'
        },
        'celebrating-description': {
            en: 'Our gallery is a celebration of our students’ achievements, illustrating the dedication and hard work they put into their studies every day.',
            bn: 'আমাদের গ্যালারি আমাদের শিক্ষার্থীদের অর্জনের উদযাপন, প্রতিদিন তাদের অধ্যয়নে তারা যে উত্সর্গ এবং কঠোর পরিশ্রম করে তা চিত্রিত করে।'
        },
        'growth-title': {
            en: 'Capturing Moments of Growth',
            bn: 'বৃদ্ধির মুহূর্তগুলি ধারণ করা'
        },
        'growth-description': {
            en: 'From engaging classroom activities to cultural events, our gallery captures moments of growth, laughter, and discovery that enrich the lives of our students.',
            bn: 'শ্রেণীকক্ষের কার্যকলাপ থেকে সাংস্কৃতিক ইভেন্ট পর্যন্ত, আমাদের গ্যালারি বৃদ্ধির মুহূর্তগুলি, হাসি এবং আবিষ্কারগুলি ধারণ করে যা আমাদের শিক্ষার্থীদের জীবনকে সমৃদ্ধ করে।'
        },
        'community-title': {
            en: 'A Snapshot of Our Community Spirit',
            bn: 'আমাদের সম্প্রদায়ের আত্মার একটি স্ন্যাপশট'
        },
        'community-description': {
            en: 'Step into our gallery for a snapshot of our community spirit—where knowledge meets camaraderie, and every student is encouraged to thrive.',
            bn: 'আমাদের গ্যালারিতে প্রবেশ করুন আমাদের সম্প্রদায়ের আত্মার একটি স্ন্যাপশটের জন্য—যেখানে জ্ঞান বন্ধুত্বের সাথে মিলিত হয় এবং প্রতিটি শিক্ষার্থীকে উন্নতি করতে উত্সাহিত করা হয়।'
        },
        'journey-title': {
            en: 'Witness the Journey of Knowledge',
            bn: 'জ্ঞান যাত্রার সাক্ষী হন'
        },
        'journey-description': {
            en: 'Witness the journey of knowledge in action through our captivating images, each telling a story of perseverance, friendship, and enlightenment.',
            bn: 'আমাদের মন্ত্রমুগ্ধকর ছবির মাধ্যমে কর্মে জ্ঞান যাত্রার সাক্ষী হন, প্রতিটি অধ্যবসায়, বন্ধুত্ব এবং আলোকিতকরণের একটি গল্প বলে।'
        },
        'inspiring-title': {
            en: 'Inspiring Future Generations',
            bn: 'ভবিষ্যত প্রজন্মকে অনুপ্রাণিত করা'
        },
        'inspiring-description': {
            en: 'Every picture in our gallery serves as a reminder of our mission to inspire future generations, fostering a love for learning and a commitment to excellence.',
            bn: 'আমাদের গ্যালারির প্রতিটি ছবি আমাদের মিশনের একটি অনুস্মারক হিসাবে কাজ করে ভবিষ্যত প্রজন্মকে অনুপ্রাণিত করতে, শেখার প্রতি ভালবাসা এবং উৎকর্ষের প্রতি প্রতিশ্রুতি তৈরি করতে।'
        },
        'tapestry-title': {
            en: 'A Tapestry of Tradition and Innovation',
            bn: 'ঐতিহ্য এবং উদ্ভাবনের একটি ট্যাপেস্ট্রি'
        },
        'tapestry-description': {
            en: 'Our gallery weaves together a tapestry of tradition and innovation, showcasing how we honor our roots while embracing modern educational methods.',
            bn: 'আমাদের গ্যালারি ঐতিহ্য এবং উদ্ভাবনের একটি ট্যাপেস্ট্রি একসাথে বুনেছে, দেখায় যে আমরা কীভাবে আমাদের শিকড়কে সম্মান করি যখন আধুনিক শিক্ষামূলক পদ্ধতিগুলিকে গ্রহণ করি।'
        },
        'diversity-title': {
            en: 'Join Us in Celebrating Diversity',
            bn: 'বৈচিত্র্য উদযাপনে আমাদের সাথে যোগ দিন'
        },
        'diversity-description': {
            en: 'Join us in celebrating the diversity of our students and the unique perspectives they bring to our madrasa community, beautifully illustrated in our gallery.',
            bn: 'আমাদের শিক্ষার্থীদের বৈচিত্র্য এবং তারা আমাদের মাদ্রাসা সম্প্রদায়ে যে অনন্য দৃষ্টিভঙ্গি নিয়ে আসে তা উদযাপনে আমাদের সাথে যোগ দিন, যা আমাদের গ্যালারিতে সুন্দরভাবে চিত্রিত হয়েছে।'
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

    // Update More Button Text based on current state
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    if (moreContent && moreBtn) {
        if (moreContent.style.display === "none" || moreContent.style.display === "") {
             moreBtn.innerText = language === 'bn' ? "আরও" : "More";
        } else {
             moreBtn.innerText = language === 'bn' ? "কম" : "Less";
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    // Initially hide the "More" content and additional images
    document.getElementById("moreContent").style.display = "none";

    // Function to toggle visibility of extra content
    function toggleMore() {
        const moreContent = document.getElementById("moreContent");
        const moreBtn = document.getElementById("moreBtn");
        const currentLang = localStorage.getItem('preferredLanguage') || 'en';

        if (moreContent.style.display === "none" || moreContent.style.display === "") {
            moreContent.style.display = "block";
            moreBtn.innerText = currentLang === 'bn' ? "কম" : "Less";
        } else {
            moreContent.style.display = "none";
            moreBtn.innerText = currentLang === 'bn' ? "আরও" : "More";
        }
    }

    // Assign function to button
    document.getElementById("moreBtn").addEventListener("click", toggleMore);
});


// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateGalleryContent(event.detail);
});

// Load initial content
document.addEventListener('DOMContentLoaded', () => {
    const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateGalleryContent(currentLanguage);
});
