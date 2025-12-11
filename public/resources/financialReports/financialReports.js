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
            const element = document.getElementById(section);
            if (element) {
                element.innerHTML = data;
                console.log(`Loaded ${filePath} successfully`);

                // Load JavaScript if provided
                if (jsPath) {
                    const script = document.createElement('script');
                    script.src = jsPath;
                    document.body.appendChild(script);
                    console.log(`Loaded script ${jsPath}`);
                }
            } else {
                console.error(`Element with id '${section}' not found.`);
            }
        })
        .catch(err => console.error(`Error loading ${filePath}:`, err));
}

// Load sections dynamically with specific paths
loadHTML('heading', '../../heading/heading.html', '../../heading/heading.css', '../../heading/heading.js');
loadHTML('nav', '../../nav/nav.html', '../../nav/nav.css', '../../nav/nav.js');
loadHTML('footer', '../../footer/footer.html', '../../footer/footer.css', '../../footer/footer.js');

document.addEventListener("DOMContentLoaded", function () {
    // Language Switching Logic
    const translations = {
        en: {
            pageTitle: "Financial Reports",
            pageDescription: "Transparency is our core value. Here you can find our annual income and expense reports.",
            year2025: "2025 Report",
            year2024: "2024 Report",
            year2023: "2023 Report",
            year2022: "2022 Report",
            year2021: "2021 Report",
            year2020: "2020 Report",
            year2019: "2019 Report",
            year2018: "2018 Report",
            desc2025: "Annual income and expenses for the fiscal year 2025.",
            desc2024: "Annual income and expenses for the fiscal year 2024.",
            desc2023: "Annual income and expenses for the fiscal year 2023.",
            desc2022: "Annual income and expenses for the fiscal year 2022.",
            desc2021: "Annual income and expenses for the fiscal year 2021.",
            desc2020: "Annual income and expenses for the fiscal year 2020.",
            desc2019: "Annual income and expenses for the fiscal year 2019.",
            desc2018: "Annual income and expenses for the fiscal year 2018.",
            viewPdf: "View Report"
        },
        bn: {
            pageTitle: "আর্থিক প্রতিবেদন",
            pageDescription: "স্বচ্ছতা ও জবাবদিহিতা আমাদের প্রতিষ্ঠানের মূল ভিত্তি। এখানে আপনি আমাদের মাদ্রাসার বার্ষিক আয় এবং ব্যয়ের বিস্তারিত প্রতিবেদন পাবেন, যা আমাদের দাতা এবং শুভানুধ্যায়ীদের প্রতি আমাদের দায়বদ্ধতা প্রকাশ করে।",
            year2025: "২০২৫ প্রতিবেদন",
            year2024: "২০২৪ প্রতিবেদন",
            year2023: "২০২৩ প্রতিবেদন",
            year2022: "২০২২ প্রতিবেদন",
            year2021: "২০২১ প্রতিবেদন",
            year2020: "২০২০ প্রতিবেদন",
            year2019: "২০১৯ প্রতিবেদন",
            year2018: "২০১৮ প্রতিবেদন",
            desc2025: "২০২৫ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            desc2024: "২০২৪ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            desc2023: "২০২৩ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            desc2022: "২০২২ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            desc2021: "২০২১ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            desc2020: "২০২০ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            desc2019: "২০১৯ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            desc2018: "২০১৮ অর্থবছরের বার্ষিক আয় এবং ব্যয়।",
            viewPdf: "প্রতিবেদন দেখুন"
        }
    };

    // Function to update content based on language
    function updateContent(lang) {
        document.getElementById("financial-title").textContent = translations[lang].pageTitle;
        document.getElementById("financial-description").textContent = translations[lang].pageDescription;
        
        document.getElementById("title-2025").textContent = translations[lang].year2025;
        document.getElementById("desc-2025").textContent = translations[lang].desc2025;
        document.getElementById("btn-2025").textContent = translations[lang].viewPdf;

        document.getElementById("title-2024").textContent = translations[lang].year2024;
        document.getElementById("desc-2024").textContent = translations[lang].desc2024;
        document.getElementById("btn-2024").textContent = translations[lang].viewPdf;

        document.getElementById("title-2023").textContent = translations[lang].year2023;
        document.getElementById("desc-2023").textContent = translations[lang].desc2023;
        document.getElementById("btn-2023").textContent = translations[lang].viewPdf;

        document.getElementById("title-2022").textContent = translations[lang].year2022;
        document.getElementById("desc-2022").textContent = translations[lang].desc2022;
        document.getElementById("btn-2022").textContent = translations[lang].viewPdf;

        document.getElementById("title-2021").textContent = translations[lang].year2021;
        document.getElementById("desc-2021").textContent = translations[lang].desc2021;
        document.getElementById("btn-2021").textContent = translations[lang].viewPdf;

        document.getElementById("title-2020").textContent = translations[lang].year2020;
        document.getElementById("desc-2020").textContent = translations[lang].desc2020;
        document.getElementById("btn-2020").textContent = translations[lang].viewPdf;

        document.getElementById("title-2019").textContent = translations[lang].year2019;
        document.getElementById("desc-2019").textContent = translations[lang].desc2019;
        document.getElementById("btn-2019").textContent = translations[lang].viewPdf;

        document.getElementById("title-2018").textContent = translations[lang].year2018;
        document.getElementById("desc-2018").textContent = translations[lang].desc2018;
        document.getElementById("btn-2018").textContent = translations[lang].viewPdf;
    }

    // Listen for language change events from the nav
    window.addEventListener('languageChange', function(e) {
        updateContent(e.detail);
    });

    // Initial load (check localStorage or default to Bangla)
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'bn';
    updateContent(savedLanguage);
});
