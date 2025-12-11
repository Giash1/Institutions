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
function updateAjifaContent(language) {
    const elements = {
        'dua-title': {
            en: 'Duas and Supplications',
            bn: 'দোয়া ও প্রার্থনা'
        },
        'dua-yunus-translation-en': {
            en: 'No god but You the glory. I was among the wrongdoers. We responded and saved from the burden and so we save the believers.',
            bn: 'তুমি ব্যতীত কোন উপাস্য নেই, তুমি পবিত্র, আমি জালেমদের অন্তর্ভুক্ত ছিলাম। তাই আমরা তাকে সাড়া দিয়েছিলাম এবং তাকে বিপদ থেকে রক্ষা করেছি এবং এভাবেই আমরা মুমিনদেরকে রক্ষা করি।'
        },
        'durud-ibrahim-translation-en': {
            en: 'O God, bless Muhammad and the family of Muhammad as You bless Ibraham and the family of Ibraham, for You are Praiseworthy and Glorious. O God, bless Muhammad and the family of Muhammad as You blessed Ibraham and the family of Ibraham. You are Praiseworthy and Glorious.',
            bn: 'হে আল্লাহ, মুহাম্মাদ ও মুহাম্মাদের পরিবারকে বরকত দান করুন যেমন আপনি ইব্রাহীম ও ইব্রাহীমের পরিবারকে বরকত দান করেন, কারণ আপনি প্রশংসিত এবং মহিমান্বিত। হে আল্লাহ, মুহাম্মাদ ও মুহাম্মাদের পরিবারকে আশীর্বাদ করুন যেমন আপনি ইব্রাহীম ও ইব্রাহীমের পরিবারকে আশীর্বাদ করেছেন। কারণ আপনি প্রশংসিত এবং মহিমান্বিত।'
        },
        'dua-1-translation-en': {
            en: 'O Possessor of glory and honor.',
            bn: 'হে গৌরব ও সম্মানের অধিকারী।'
        },
        'dua-sayyid-translation-en': {
            en: 'O Allah, You are my Lord, there is none worthy of worship but You. You created me and I am your slave. I keep Your covenant, and my pledge to You so far as I am able. I seek refuge in You from the evil of what I have done. I admit to Your blessings upon me, and I admit to my misdeeds. Forgive me, for there is none who may forgive sins but You.',
            bn: 'হে আল্লাহ! তুমি আমার পালনকর্তা। তুমি ব্যতীত কোন উপাস্য নেই। তুমি আমাকে সৃষ্টি করেছ। আমি তোমার দাস। আমি আমার সাধ্যমত তোমার নিকটে দেওয়া অঙ্গীকারে ও প্রতিশ্রুতিতে দৃঢ় আছি। আমি আমার কৃতকর্মের অনিষ্ট হ’তে তোমার নিকটে আশ্রয় প্রার্থনা করছি। আমি আমার উপরে তোমার দেওয়া অনুগ্রহকে স্বীকার করছি এবং আমি আমার গোনাহের স্বীকৃতি দিচ্ছি। অতএব তুমি আমাকে ক্ষমা কর। কেননা তুমি ব্যতীত পাপসমূহ ক্ষমা করার কেউ নেই।'
        },
        'dua-ayah1-translation-en': {
            en: 'Allah suffices us, and He is the best disposer of affairs, He is the best Master, and He is the best Helper.',
            bn: 'আল্লাহই আমাদের জন্য যথেষ্ট, এবং তিনিই সর্বোত্তম কার্য সম্পাদনকারী, তিনিই সর্বোত্তম কর্তা এবং তিনিই সর্বোত্তম সাহায্যকারী।'
        },
        
        'dua-ayah285-translation-en': {
            en: 'The Messenger has believed in what was revealed to him from his Lord, and so have the believers. All of them have believed in Allah, His angels, His books, and His messengers, saying, “We make no distinction between any of His messengers.” And they say, “We hear and obey. Grant us Your forgiveness, our Lord. To You is the final return.” (2:285)\n\nAllah does not burden a soul beyond that it can bear. It will have [the consequence of] what [good] it has gained, and it will bear [the consequence of] what [evil] it has earned. Our Lord, do not impose blame upon us if we forget or make a mistake. Our Lord, do not place upon us a burden like that which You placed upon those before us. Our Lord, do not burden us with that which we have no ability to bear. And pardon us, and forgive us, and have mercy upon us. You are our protector, so give us victory over the disbelieving people. (2:286)',
            bn: 'রাসূল তার প্রতিপালকের নিকট অবতীর্ণ বিষয়ে ঈমান এনেছেন এবং মুমিনগণও। তারা সবাই আল্লাহ, তাঁর ফেরেশতাগণ, তাঁর গ্রন্থসমূহ এবং তাঁর রসূলগণের প্রতি ঈমান এনেছে, এবং তারা বলেছে: “আমরা তাঁর রসূলগণের মধ্যে পার্থক্য করি না।” এবং তারা বলে: “আমরা শুনলাম এবং মেনে নিলাম। হে আমাদের প্রতিপালক, আমাদের ক্ষমা করুন। আপনার দিকেই প্রত্যাবর্তন।” (২:২৮৫)\n\nআল্লাহ কোনো প্রাণীর উপর তার সাধ্যের বাইরে বোঝা চাপান না। সে যা অর্জন করে তা তার জন্য এবং যা সে কামাই করে তা তার উপর। হে আমাদের প্রতিপালক, যদি আমরা ভুলে যাই বা ভুল করি তবে আমাদের অপরাধী করবেন না। হে আমাদের প্রতিপালক, আমাদের উপর বোঝা চাপিয়ে দেবেন না, যেমন আপনি আমাদের পূর্ববর্তীদের উপর চাপিয়েছিলেন। হে আমাদের প্রতিপালক, আমাদের এমন বোঝা বহন করতে বলবেন না যা আমরা সহ্য করতে পারি না। আমাদের ক্ষমা করুন, আমাদের ক্ষমা করুন এবং আমাদের প্রতি অনুগ্রহ করুন। আপনি আমাদের অভিভাবক, তাই আমাদের অবিশ্বাসীদের বিরুদ্ধে বিজয় দিন। (২:২৮৬)'
        },
        'dua-ayah89-translation-en': {
            en: 'O reassured soul, return to your Lord, well-pleased and pleasing [to Him], And enter among My [righteous] servants, And enter My Paradise. (89:27-30)',
            bn: 'হে প্রশান্ত আত্মা, তোমার প্রতিপালকের দিকে ফিরে এসো, সন্তুষ্ট ও সন্তোষজনকভাবে। আমার বান্দাদের অন্তর্ভুক্ত হও, এবং আমার জান্নাতে প্রবেশ করো। (৮৯:২৭-৩০)'
        },
        'dua-ayah3-translation-en': {
            en: 'In the name of Allah, with whose name nothing on earth or in the sky can cause harm, and He is the All-Hearing, All-Knowing.',
            bn: 'আল্লাহর নামে, যাঁর নামে পৃথিবীতে বা আসমানে কোন কিছুরই ক্ষতি হয় না এবং তিনি সর্বশ্রোতা, সর্বজ্ঞ।'
        },
        'dua-ayah4-translation-en': {
            en: ' My Lord, indeed distress has seized me, and You are the Most Merciful of the merciful.',
            bn: 'হে আমার পালনকর্তা, আমি দুঃখ-কষ্টে আক্রান্ত হয়েছি, আর তুমি তো দয়ালুদের মধ্যে সর্বশ্রেষ্ঠ দয়ালু।'
        },
        'dua-ayah5-translation-en': {
            en: 'Indeed, Allah makes hear whom He wills',
            bn: '  নিশ্চয়ই আল্লাহ যাকে ইচ্ছা শোনান।'
        },
        'dua-ayah6-translation-en': {
            en: 'God bears witness that there is no god but Him, and the angels and those with knowledge, standing by justice. There is no god but Him The Mighty, the Wise.',
            bn: ' আমি সাক্ষ্য দিচ্ছেন যে, আল্লাহ ছাড়া কোন ইলাহ নেই এবং ফেরেশতাগণ এবং জ্ঞানীগণ ন্যায়বিচারের উপর দাঁড়িয়ে আছেন।  তিনি ব্যতীত কোন উপাস্য নেই যিনি পরাক্রমশালী, প্রজ্ঞাময় ।'
        },
        'dua-ayah7-translation-en': {
            en: 'I seek refuge in the perfect words of God, from every devil and monster, and from every evil eye.',
            bn: '  আমি আল্লাহর নিখুঁত বাণীতে আশ্রয় চাই, প্রতিটি শয়তান এবং দানব এবং প্রতিটি মন্দ চোখ থেকে।'
        },
        'dua-ayah8-translation-en': {
            en: 'In the name of God, the Most Gracious, the Most Merciful. Speak, O unbelievers.  I do not worship what you worship.  Nor do you worship what I worship. Nor do I worship what you worshiped.  Nor do you worship what I worship.  To you is your religion and to me is my religion',
            bn: ' পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু।হে অবিশ্বাসীরা।  তোমরা যার পূজা কর আমি তা করি না।  আর তোমরা ইবাদত কর না যার ইবাদত আমি করি এবং আমিও ইবাদত করি না যার ইবাদত তোমরা করতে।  আর তোমরা ইবাদত করো না আমি যার ইবাদত করি।  তোমাদের কাছে তোমাদের ধর্ম আর আমার কাছে আমার ধর্ম।'
        },
        'dua-ayah9-translation-en': {
            en: 'Beginning in the name of Allah, the Most Merciful, the Infinitely Merciful.He is God, there is no god but Him. He knows the unseen and the witnessed. He is the Most Merciful, the Most Merciful. 22  He is God, there is no god but Him, the King, the Holy, the Peaceful, the Faithful, the Master of the Mighty, the Mighty, the Arrogant. God is compassionate toward what they associate with you 23He is God, the Creator, the Creator, the Creator, the One who forms the beautiful heavens. Whatever is in the heavens and the earth glorifies Him, and He is the All-Mighty. Zal Al-Hakim ﻿﻿  ',
            bn: ' পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু।হে অবিশ্বাসীরা।  তোমরা যার পূজা কর আমি তা করি না।  আর তোমরা ইবাদত কর না যার ইবাদত আমি করি এবং আমিও ইবাদত করি না যার ইবাদত তোমরা করতে।  আর তোমরা ইবাদত করো না আমি যার ইবাদত করি।  তোমাদের কাছে তোমাদের ধর্ম আর আমার কাছে আমার ধর্ম।'
        },
        'dua-ayah10-translation-en': {
            en: 'Beginning in the name of Allah, the Most Merciful, the Infinitely Merciful.Allah, there is no god but Him. The Ever-Living, the Ever-Subsisting. Neither slumber nor sleep can overtake you. To Him belongs whatever is in the heavens and whatever is on the earth .  ۗ Who is there to intercede with Him except by His permission? He knows what is before them and what is behind them. And they do not comprehend anything of His knowledge except Him He does as He wills. His Throne extends over the heavens and the earth, but He does not wish to preserve them. He is the Most High, the Great. ',
            bn: ' পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু।হে অবিশ্বাসীরা।  তোমরা যার পূজা কর আমি তা করি না।  আর তোমরা ইবাদত কর না যার ইবাদত আমি করি এবং আমিও ইবাদত করি না যার ইবাদত তোমরা করতে।  আর তোমরা ইবাদত করো না আমি যার ইবাদত করি।  তোমাদের কাছে তোমাদের ধর্ম আর আমার কাছে আমার ধর্ম।'
        },
        'dua-ayah11-translation-en': {
            en: 'In the name of God, the Most Gracious, the Most Merciful. Speak, O unbelievers.  I do not worship what you worship.  Nor do you worship what I worship. Nor do I worship what you worshiped.  Nor do you worship what I worship.  To you is your religion and to me is my religion',
            bn: ' পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু।হে অবিশ্বাসীরা।  তোমরা যার পূজা কর আমি তা করি না।  আর তোমরা ইবাদত কর না যার ইবাদত আমি করি এবং আমিও ইবাদত করি না যার ইবাদত তোমরা করতে।  আর তোমরা ইবাদত করো না আমি যার ইবাদত করি।  তোমাদের কাছে তোমাদের ধর্ম আর আমার কাছে আমার ধর্ম।।'
        },
        'dua-ayah12-translation-en': {
            en: 'With the Name of Allah, the Most Gracious, the Most Merciful . Say : He is Allah (the) One . The Self-Sufficient Master, Whom all creatures need, He begets not nor was He begotten , and none is equal to Him ',
            bn: ' পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু।বলুনঃ তিনি আল্লাহ এক।  স্বয়ংসম্পূর্ণ প্রভু, তিনি জন্ম দেননি এবং তিনি জন্মগ্রহণ করেননি এবং কেউ তাঁর সমকক্ষ নয়।'
        },
        'dua-ayah13-translation-en': {
            en: 'With the Name of Allah, the Most Gracious, the Most Merciful. Say: I seek refuge with (Allah) the Lord of the daybreak, from the evil of what He has created, and from the evil of the darkening (night) as it comes with its darkness, and from the evil of those who practice witchcraft when they blow in the knots, and from the evil of the envier when he envies.',
            bn: ' পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু।  বলুনঃ আমি প্রভাতের রব (আল্লাহর) কাছে আশ্রয় প্রার্থনা করছি, তিনি যা সৃষ্টি করেছেন তার অনিষ্ট থেকে এবং অন্ধকারের (রাত্রির) অনিষ্ট থেকে যেমন তা তার অন্ধকারের সাথে আসে এবং যারা জাদুবিদ্যা করে তাদের অনিষ্ট থেকে।  যখন তারা গিঁটে ফুঁ দেয়, এবং হিংসুকের অনিষ্ট থেকে যখন সে হিংসা করে।'
        },
        'dua-ayah14-translation-en': {
            en: 'With the Name of Allah , the Most Gracious , the Most Merciful. Say: I seek refuge with (Allah) the Lord of mankind, the King of mankind , the God of mankind , from the evil of the whisperer who withdraws , who whispers in the breasts of mankind, of jinns and men .',
            bn: ' পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু।বলুন: আমি (আল্লাহর) আশ্রয় প্রার্থনা করছি মানবজাতির পালনকর্তা, মানবজাতির বাদশাহ, মানবজাতির রব, জাদুকারীর অনিষ্ট থেকে, যে পিছু হটে, যে মানবজাতির বুকে জাদু করে, জিন ও মানুষের।'
        },
        'dua-ayah15-translation-en': {
            en: ' In the name of Allah, the Most Gracious, the Most Merciful.1. All praise is due to Allah, the Lord of all the worlds. 2.The Most Gracious, the Most Merciful. 3. Master of the Day of Judgment 4. You alone we worship, and You alone we ask for help. 5. Guide us on the Straight Path,6. the path of those who have received Your grace; 7.not the path of those who have brought down wrath upon themselves, nor of those who have gone astray.',
        bn: ' পরম করুণাময়, পরম করুণাময় আল্লাহর নামে।১. সকল প্রশংসা আল্লাহর জন্য, যিনি সকল জগতের প্রতিপালক।২. পরম করুণাময়, পরম করুণাময়।৩. বিচার দিনের মালিক। ৪.আমরা একমাত্র তোমারই ইবাদত করি এবং একমাত্র তোমারই কাছে সাহায্য প্রার্থনা করি। ৫. আমাদের সরল পথে পরিচালিত করো; ৬. তাদের পথ যারা তোমার অনুগ্রহ পেয়েছে;৭. তাদের পথ নয় যারা নিজেদের উপর গজব নাযিল করেছে, না যারা পথভ্রষ্ট হয়েছে।'
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
    // Initial content update based on global language
    const currentLang = localStorage.getItem('preferredLanguage') || 'bn';
    updateAjifaContent(currentLang);

    // Set initial state for "More" content and button text
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    if (moreContent && moreBtn) {
        moreContent.style.display = "none";
        moreBtn.innerText = "More";
    }
});

// Listen for global language change events
window.addEventListener('languageChange', (event) => {
    updateAjifaContent(event.detail);
});
