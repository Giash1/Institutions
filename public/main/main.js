document.addEventListener("DOMContentLoaded", () => {
    console.log("✅ DOM fully loaded and parsed");

    // Load navigation scripts
    loadNavScripts();

    // Select the language toggle button
    const languageToggleButton = document.getElementById("language-toggle-btn");

    // Ensure the button exists before adding event listeners
    if (languageToggleButton) {
        console.log("✅ Language toggle button found");

        languageToggleButton.addEventListener("click", () => {
            console.log("🖱️ Language toggle button clicked");

            // Select all elements with `data-en` and `data-bn`
            const elements = document.querySelectorAll("[data-en], [data-bn]");
            console.log(`📌 Found ${elements.length} translatable elements`);

            elements.forEach((element) => {
                const currentText = element.textContent.trim();
                console.log("🔄 Before:", currentText);

                // Toggle text based on the current language
                element.textContent =
                    currentText === element.dataset.en
                        ? element.dataset.bn
                        : element.dataset.en;

                console.log("✅ After:", element.textContent);
            });

            // Toggle the button text to indicate the current language state
            const buttonText = languageToggleButton.textContent.trim();
            console.log("📝 Button text before:", buttonText);

            languageToggleButton.textContent = buttonText.includes("Bengali")
                ? "Switch to English"
                : "Switch to Bengali";

            console.log("✅ Button text after:", languageToggleButton.textContent);
        });
    } else {
        console.warn("⚠️ Language toggle button not found! Check HTML ID.");
    }

    // Hover effect for .main-box
    const boxes = document.querySelectorAll(".main-box");

    boxes.forEach((box) => {
        box.addEventListener("mouseenter", () => {
            box.style.transform = "scale(1.05)"; // Add hover effect
            box.style.transition = "transform 0.3s ease"; // Smooth transition
        });

        box.addEventListener("mouseleave", () => {
            box.style.transform = "scale(1)"; // Revert back to normal
        });
    });

    console.log("✅ Hover effects added to main-box elements");
});

// Define `loadNavScripts` function
function loadNavScripts() {
    console.log("✅ Navigation scripts loaded!");
    // Add your navigation-related JavaScript here
}

// Function to set the language
function setLanguage(language) {
    const elements = {
        'islamic-institution-title': {
            en: 'Islamic Institution Overview',
            bn: 'ইসলামী প্রতিষ্ঠান ওভারভিউ'
        },
        'islamic-institution-description': {
            en: 'Poschim Gaon Madrasha-i-Islamia Jameul Ulom is an Islamic institution where students can deeply learn Islam and its teachings. Our divisions include:',
            bn: 'পশ্চিমগাঁও মাদ্রাসা-ই-ইসলামিয়া জামেউল উলুম একটি ইসলামী প্রতিষ্ঠান যেখানে শিক্ষার্থীরা ইসলাম এবং এর শিক্ষাগুলি গভীরভাবে শিখতে পারে। আমাদের বিভাগগুলি অন্তর্ভুক্ত:'
        },
        'divisions-list': {
            en: [
                'Ideal Nurani Department',
                'Nazera Department',
                'Hifz Department',
                'Hadith Department'
            ],
            bn: [
                'আদর্শ নুরানি বিভাগ',
                'নাজেরা বিভাগ',
                'হিফজ বিভাগ',
                'হাদিস বিভাগ'
            ]
        },
        'professional-staff-title': {
            en: 'Professional Staff',
            bn: 'পেশাদার কর্মী'
        },
        'professional-staff-description': {
            en: 'Our teachers are highly trained scholars who are dedicated to providing Islamic education at the highest level.',
            bn: 'আমাদের শিক্ষকরা উচ্চ প্রশিক্ষিত পণ্ডিত যারা সর্বোচ্চ স্তরের ইসলামী শিক্ষা প্রদানে নিবেদিত।'
        },
        'deep-knowledge-title': {
            en: 'Deep Knowledge',
            bn: 'গভীর জ্ঞান'
        },
        'deep-knowledge-description': {
            en: 'We emphasize deep knowledge and understanding of Islamic subjects including Quran, Hadith, Fiqh, and more.',
            bn: 'আমরা কুরআন, হাদিস, ফিকাহ এবং আরও অনেক ইসলামী বিষয়ের গভীর জ্ঞান এবং বোঝার উপর জোর দিই।'
        },
        'dedicated-curriculum-title': {
            en: 'Dedicated Curriculum',
            bn: 'নিবেদিত পাঠ্যক্রম'
        },
        'dedicated-curriculum-description': {
            en: 'Our curriculum is designed to cover all essential areas of Islamic learning, helping students grow intellectually and spiritually.',
            bn: 'আমাদের পাঠ্যক্রমটি ইসলামী শিক্ষার সমস্ত প্রয়োজনীয় ক্ষেত্রগুলি কভার করার জন্য ডিজাইন করা হয়েছে, যা শিক্ষার্থীদের বুদ্ধিবৃত্তিক এবং আধ্যাত্মিকভাবে বৃদ্ধি করতে সহায়তা করে।'
        },
        'community-focus-title': {
            en: 'Community Focus',
            bn: 'সম্প্রদায়ের উপর ফোকাস'
        },
        'community-focus-description': {
            en: 'Our institution plays an active role in the community by organizing events and services for all age groups.',
            bn: 'আমাদের প্রতিষ্ঠানটি সমস্ত বয়সের জন্য ইভেন্ট এবং পরিষেবা আয়োজন করে সম্প্রদায়ে সক্রিয় ভূমিকা পালন করে।'
        },
        'holistic-approach-title': {
            en: 'Holistic Approach',
            bn: 'সমগ্রিক পদ্ধতি'
        },
        'holistic-approach-description': {
            en: 'We believe in a holistic approach to Islamic education that combines both religious and moral teachings.',
            bn: 'আমরা বিশ্বাস করি যে ইসলামী শিক্ষার একটি সমগ্রিক পদ্ধতি যা উভয় ধর্মীয় এবং নৈতিক শিক্ষাকে একত্রিত করে।'
        },
        'future-leaders-title': {
            en: 'Future Leaders',
            bn: 'ভবিষ্যতের নেতা'
        },
        'future-leaders-description': {
            en: 'Our aim is to shape the future leaders of the Muslim community, well-versed in both religious knowledge and societal responsibilities.',
            bn: 'আমাদের লক্ষ্য হল মুসলিম সম্প্রদায়ের ভবিষ্যতের নেতাদের গঠন করা, যারা উভয় ধর্মীয় জ্ঞান এবং সামাজিক দায়িত্বে সুপরিচিত।'
        },
        'enroll-now-title': {
            en: 'Enroll Now to Learn and Grow',
            bn: 'শেখার এবং বৃদ্ধির জন্য এখনই ভর্তি হন'
        },
        'enroll-now-description': {
            en: 'Contact us to join one of the most prestigious Islamic educational institutions.',
            bn: 'সবচেয়ে মর্যাদাপূর্ণ ইসলামী শিক্ষামূলক প্রতিষ্ঠানগুলির মধ্যে একটিতে যোগ দিতে আমাদের সাথে যোগাযোগ করুন।'
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