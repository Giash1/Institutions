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
        'vision-title': {
            en: 'Our Vision: Empowering Minds for a Bright Future',
            bn: 'আমাদের দৃষ্টি: উজ্জ্বল ভবিষ্যতের জন্য মেধা বিকাশ'
        },
        'vision-description': {
            en: 'At our madrasa, we believe that a strong foundation in Computer Science, English, and Mathematics is crucial for success in today\'s fast-paced and technology-driven world. Our vision is to equip students with the skills and knowledge they need to thrive in a modern society while nurturing their spiritual growth through Hadith and Quran education.',
            bn: 'আমাদের মাদ্রাসায়, আমরা বিশ্বাস করি যে কম্পিউটার বিজ্ঞান, ইংরেজি এবং গণিতে একটি শক্তিশালী ভিত্তি আজকের দ্রুত-গতির এবং প্রযুক্তি-চালিত বিশ্বে সাফল্যের জন্য অত্যন্ত গুরুত্বপূর্ণ। আমাদের দৃষ্টি হল শিক্ষার্থীদের আধুনিক সমাজে উন্নতি করার জন্য প্রয়োজনীয় দক্ষতা এবং জ্ঞান দিয়ে সজ্জিত করা, একই সাথে হাদিস এবং কুরআন শিক্ষার মাধ্যমে তাদের আধ্যাত্মিক বৃদ্ধির যত্ন নেওয়া।'
        },
        'importance-title': {
            en: 'The Importance of Education in the Modern World',
            bn: 'আধুনিক বিশ্বে শিক্ষার গুরুত্ব'
        },
        'importance-description': {
            en: 'As we navigate the complexities of the 21st century, the ability to understand and leverage technology is more important than ever. Our curriculum emphasizes:',
            bn: '২১শ শতাব্দীর জটিলতাগুলি নেভিগেট করার সাথে সাথে, প্রযুক্তি বোঝার এবং কাজে লাগানোর ক্ষমতা আগের চেয়ে বেশি গুরুত্বপূর্ণ। আমাদের পাঠ্যক্রম জোর দেয়:'
        },
        'focus-areas': {
            en: [
                '<strong>Computer Science:</strong> Preparing students to confidently engage with technology, develop different in IT, and utilize digital tools for learning and communication.',
                '<strong>English Language Proficiency:</strong> Enhancing communication skills that are essential in both personal and professional spheres, enabling students to connect with the global community.',
                '<strong>Mathematics Mastery:</strong> Fostering critical thinking and problem-solving abilities that are foundational to various fields of study and career paths.',
                '<strong>Islamic Studies:</strong> Integrating Hadith and Quran studies to instill moral values and a deeper understanding of faith in students\' lives.'
            ],
            bn: [
                '<strong>কম্পিউটার বিজ্ঞান:</strong> শিক্ষার্থীদের আত্মবিশ্বাসের সাথে প্রযুক্তির সাথে জড়িত হতে, আইটিতে বিভিন্ন দক্ষতা বিকাশ করতে এবং শেখার এবং যোগাযোগের জন্য ডিজিটাল সরঞ্জামগুলি ব্যবহার করতে প্রস্তুত করা।',
                '<strong>ইংরেজি ভাষার দক্ষতা:</strong> ব্যক্তিগত এবং পেশাদার উভয় ক্ষেত্রে প্রয়োজনীয় যোগাযোগ দক্ষতা বাড়ানো, শিক্ষার্থীদের বৈশ্বিক সম্প্রদায়ের সাথে সংযোগ করতে সক্ষম করা।',
                '<strong>গণিত দক্ষতা:</strong> বিভিন্ন অধ্যয়নের ক্ষেত্র এবং ক্যারিয়ারের পথে প্রয়োজনীয় সমালোচনামূলক চিন্তাভাবনা এবং সমস্যা সমাধানের ক্ষমতা বাড়ানো।',
                '<strong>ইসলামী শিক্ষা:</strong> শিক্ষার্থীদের জীবনে নৈতিক মূল্যবোধ এবং বিশ্বাসের গভীর বোঝা প্রবর্তনের জন্য হাদিস এবং কুরআন শিক্ষার সংহতকরণ।'
            ]
        },
        'commitment-title': {
            en: 'Our Commitment',
            bn: 'আমাদের প্রতিশ্রুতি'
        },
        'commitment-description': {
            en: 'We are committed to creating a learning environment that is both supportive and challenging, allowing students to explore their interests while developing essential skills for their future. Our dedicated educators are passionate about fostering curiosity and creativity in every student.',
            bn: 'আমরা একটি শিক্ষার পরিবেশ তৈরি করতে প্রতিশ্রুতিবদ্ধ যা সহায়ক এবং চ্যালেঞ্জিং উভয়ই, শিক্ষার্থীদের তাদের আগ্রহগুলি অন্বেষণ করার অনুমতি দেয় যখন তাদের ভবিষ্যতের জন্য প্রয়োজনীয় দক্ষতা বিকাশ করে। আমাদের নিবেদিত শিক্ষকরা প্রতিটি শিক্ষার্থীর মধ্যে কৌতূহল এবং সৃজনশীলতা লালন করার জন্য উত্সাহী।'
        },
        'join-us-title': {
            en: 'Join Us on This Journey',
            bn: 'এই যাত্রায় আমাদের সাথে যোগ দিন'
        },
        'join-us-description': {
            en: 'If you share our vision of empowering the next generation through education, we invite you to join us. Together, we can build a brighter future for our students, one that balances academic excellence with spiritual growth.',
            bn: 'আপনি যদি শিক্ষার মাধ্যমে পরবর্তী প্রজন্মকে ক্ষমতায়নের আমাদের দৃষ্টি ভাগ করেন, আমরা আপনাকে আমাদের সাথে যোগ দেওয়ার জন্য আমন্ত্রণ জানাই। একসাথে, আমরা আমাদের শিক্ষার্থীদের জন্য একটি উজ্জ্বল ভবিষ্যত গড়ে তুলতে পারি, যা একাডেমিক উৎকর্ষতার সাথে আধ্যাত্মিক বৃদ্ধির ভারসাম্য বজায় রাখে।'
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
