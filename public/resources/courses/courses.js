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
        'departments-title': {
            en: 'Our Departments',
            bn: 'আমাদের বিভাগ'
        },
        'ideal-nurani-title': {
            en: '1. Ideal Nurani Department',
            bn: '১. আদর্শ নুরানি বিভাগ'
        },
        'ideal-nurani-subjects': {
            en: '<strong>Subjects:</strong> Kayda, Ampara, Hadith, Masnun Dua, Masayel, Bangla, English, Mathematics.',
            bn: '<strong>বিষয়সমূহ:</strong> কায়দা, আমপারা, হাদিস, মাসনুন দোয়া, মাসায়েল, বাংলা, ইংরেজি, গণিত।'
        },
        'nazera-title': {
            en: '2. Nazera Department',
            bn: '২. নাজেরা বিভাগ'
        },
        'nazera-subjects': {
            en: '<strong>Subjects:</strong> Quran, Hadith, Masnun Sura, Masayel, Bangla, English, Mathematics.',
            bn: '<strong>বিষয়সমূহ:</strong> কুরআন, হাদিস, মাসনুন সুরা, মাসায়েল, বাংলা, ইংরেজি, গণিত।'
        },
        'hifz-title': {
            en: '3. Hifz Department',
            bn: '৩. হিফজ বিভাগ'
        },
        'hifz-subjects': {
            en: '<strong>Subjects:</strong> Hifzul Quran, Tajbid, Masayel.',
            bn: '<strong>বিষয়সমূহ:</strong> হিফজুল কুরআন, তাজবিদ, মাসায়েল।'
        },
        'hadith-title': {
            en: '4. Hadith Department',
            bn: '৪. হাদিস বিভাগ'
        },
        'hadith-subjects': {
            en: '<strong>Subjects:</strong> Quran, Hadith, Fiqah, Mantek, Tafseer, Balagat, Usul, Sorof, Nahw, Arabic Literature, Ilmol Farayez, Bangla, English, Mathematics, Computer, Arabic/Bangla/English Speaking, and more.',
            bn: '<strong>বিষয়সমূহ:</strong> কুরআন, হাদিস, ফিকাহ, মানতিক, তাফসির, বালাগাত, উসুল, সরফ, নাহু, আরবি সাহিত্য, ইলমুল ফারায়েজ, বাংলা, ইংরেজি, গণিত, কম্পিউটার, আরবি/বাংলা/ইংরেজি বক্তৃতা, এবং আরও অনেক কিছু।'
        },
        'why-choose-title': {
            en: 'Why Choose Our Madrasha?',
            bn: 'আমাদের মাদ্রাসা কেন বেছে নেবেন?'
        },
        'why-choose-list': {
            en: [
                '<strong>Comprehensive Islamic Education:</strong> Our curriculum includes Quranic studies, Hadith, Fiqh, and Arabic language courses to build a strong foundation in Islamic knowledge.',
                '<strong>Modern Academic Subjects:</strong> In addition to Islamic studies, we offer courses in Mathematics, Science, English, and Computer Science to prepare students for the modern world.',
                '<strong>Qualified Instructors:</strong> Our experienced and dedicated teachers ensure a high standard of education and personal guidance for students.',
                '<strong>Conducive Learning Environment:</strong> We provide a safe, disciplined, and nurturing atmosphere where students can focus on their studies.',
                '<strong>Scholarships and Financial Aid:</strong> We support students from diverse backgrounds by offering scholarships and financial assistance based on merit and need.'
            ],
            bn: [
                '<strong>বিস্তৃত ইসলামী শিক্ষা:</strong> আমাদের পাঠ্যক্রমে কুরআনিক স্টাডিজ, হাদিস, ফিকাহ এবং আরবি ভাষার কোর্স অন্তর্ভুক্ত রয়েছে যাতে ইসলামী জ্ঞানের একটি শক্ত ভিত্তি তৈরি হয়।',
                '<strong>আধুনিক একাডেমিক বিষয়:</strong> ইসলামী শিক্ষার পাশাপাশি, আমরা গণিত, বিজ্ঞান, ইংরেজি এবং কম্পিউটার বিজ্ঞানের কোর্স অফার করি যাতে শিক্ষার্থীরা আধুনিক বিশ্বের জন্য প্রস্তুত হয়।',
                '<strong>যোগ্য প্রশিক্ষক:</strong> আমাদের অভিজ্ঞ এবং নিবেদিত শিক্ষকরা শিক্ষার্থীদের জন্য উচ্চ মানের শিক্ষা এবং ব্যক্তিগত নির্দেশনা নিশ্চিত করেন।',
                '<strong>শিক্ষার অনুকূল পরিবেশ:</strong> আমরা একটি নিরাপদ, শৃঙ্খলাবদ্ধ এবং লালনপালনকারী পরিবেশ প্রদান করি যেখানে শিক্ষার্থীরা তাদের পড়াশোনায় মনোনিবেশ করতে পারে।',
                '<strong>বৃত্তি এবং আর্থিক সহায়তা:</strong> আমরা মেধা এবং প্রয়োজনের উপর ভিত্তি করে বৃত্তি এবং আর্থিক সহায়তা প্রদান করে বিভিন্ন পটভূমির শিক্ষার্থীদের সমর্থন করি।'
            ]
        },
        'extracurricular-title': {
            en: 'Extracurricular Activities',
            bn: 'বহির্গামী কার্যক্রম'
        },
        'extracurricular-description': {
            en: 'We participate in various debates organized by the Befabol Madarisil Arabia Bangladesh Board to enhance students\' intellectual and communication skills.',
            bn: 'আমরা শিক্ষার্থীদের বুদ্ধিবৃত্তিক এবং যোগাযোগ দক্ষতা বাড়ানোর জন্য বেফাকুল মাদারিসিল আরাবিয়া বাংলাদেশ বোর্ড দ্বারা আয়োজিত বিভিন্ন বিতর্কে অংশগ্রহণ করি।'
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
