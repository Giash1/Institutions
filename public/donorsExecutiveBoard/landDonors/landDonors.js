function loadHTML(section, filePath, cssPath, jsPath) {
    const baseUrl = window.location.origin;
    
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = baseUrl + cssPath;
        document.head.appendChild(link);
    }

    fetch(baseUrl + filePath)
        .then(response => response.text())
        .then(data => {
            const element = document.getElementById(section);
            if (element) {
                element.innerHTML = data;
                if (jsPath) {
                    const script = document.createElement('script');
                    script.src = baseUrl + jsPath;
                    document.body.appendChild(script);
                }
            }
        })
        .catch(err => {
            console.error(`Error loading ${filePath}:`, err);
        });
}

loadHTML('heading', '/heading/heading.html', '/heading/heading.css', '/heading/heading.js');
loadHTML('nav', '/nav/nav.html', '/nav/nav.css', '/nav/nav.js');
loadHTML('footer', '/footer/footer.html', '/footer/footer.css', '/footer/footer.js');

// Make updateLandDonorsContent globally available
window.updateLandDonorsContent = function(language) {
    const elements = {
        'land-donors-title': {
            en: 'List of Land Donors of Poschimgaon Madrasha and Madrasha Mosque',
            bn: 'পশ্চিমগাঁও মাদ্রাসা ও মাদ্রাসা মসজিদের জমি দাতাদের তালিকা'
        },
        'intro-title': {
            en: '"Honoring Our Generous Land Donors"',
            bn: '"আমাদের উদার জমি দাতাদের সম্মান"'
        },
        'intro-description': {
            en: 'We are forever grateful to those who donated land for the establishment of our Madrasha and Mosque. Their generosity has laid the foundation for generations of Islamic education.',
            bn: 'আমরা চিরকাল কৃতজ্ঞ তাদের কাছে যারা আমাদের মাদ্রাসা এবং মসজিদ প্রতিষ্ঠার জন্য জমি দান করেছেন। তাদের উদারতা প্রজন্মের পর প্রজন্ম ইসলামী শিক্ষার ভিত্তি স্থাপন করেছে।'
        },
        'founder-title': {
            en: 'Founder of the Poschim Gaon Madrasha -E- Islamia Jameul Ulum',
            bn: 'পশ্চিমগাঁও মাদ্রাসা-ই-ইসলামিয়া জামেউল উলুমের প্রতিষ্ঠাতা'
        },
        'donor1-name': {
            en: 'Late Alhaj Abdul Motalib Saheb',
            bn: 'মরহুম আলহাজ্ব আব্দুল মোতালিব সাহেব'
        },
        'donor1-position': {
            en: 'Founder and Proprietor of Shohag Community Center, 91 New Eskaton Road, Dhaka-1000, Bangladesh',
            bn: 'শোহাগ কমিউনিটি সেন্টারের প্রতিষ্ঠাতা ও স্বত্বাধিকারী, ৯১ নিউ ইস্কাটন রোড, ঢাকা-১০০০, বাংলাদেশ'
        },
        'donor1-contribution': {
            en: 'Single Funding for Construction of Baitul Huda Jame Masjid (Madrasa Mosque)',
            bn: 'বাইতুল হুদা জামে মসজিদ (মাদ্রাসা মসজিদ) নির্মাণের জন্য একক অর্থায়ন'
        },
        'donor1-amount': {
            en: 'One Luxury Flat (2002 sq ft with parking)',
            bn: 'একটি লাক্সারি ফ্ল্যাট (২০০২ বর্গফুট পার্কিং সহ)'
        },
        'donor1-date': {
            en: 'Date: 10/03/2017 and 31/08/2022',
            bn: 'তারিখ: ১০/০৩/২০১৭ এবং ৩১/০৮/২০২২'
        },
        'donor2-name': {
            en: 'Late Amir Uddin Bhuiyan Saheb',
            bn: 'মরহুম আমির উদ্দিন ভূঁইয়া সাহেব'
        },
        'donor2-description': {
            en: 'Late Amir Uddin Bhuiyan Saheb was the first person who donated the land for Poschimgaon Madrasha, and we will always honor his generosity. His contribution laid the foundation for the institution’s growth, and his legacy continues to inspire our community. We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'মরহুম আমির উদ্দিন ভূঁইয়া সাহেব ছিলেন প্রথম ব্যক্তি যিনি পশ্চিমগাঁও মাদ্রাসার জন্য জমি দান করেছিলেন এবং আমরা সর্বদা তাঁর উদারতাকে সম্মান জানাব। তাঁর অবদান প্রতিষ্ঠানের প্রবৃদ্ধির ভিত্তি স্থাপন করেছিল এবং তাঁর উত্তরাধিকার আমাদের সম্প্রদায়কে অনুপ্রাণিত করে চলেছে। আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor2-amount': {
            en: 'Land Donated: 121 percent (along with the mosque)',
            bn: 'দানকৃত জমির পরিমাণ: ১২১ শতাংশ (মসজিদ সহ)'
        },
        'donor2-date': {
            en: 'Date: 26/02/1941',
            bn: 'তারিখ: ২৬/০২/১৯৪১'
        },
        'donor3-name': {
            en: 'Hajji A.Hannan Bhuiyan, A. Hashem Bhuiyan, Chetarabanu and Shamirun Nesa',
            bn: 'হাজী এ. হান্নান ভূঁইয়া, এ. হাশেম ভূঁইয়া, চেতারবানু এবং শমিরুন নেসা'
        },
        'donor3-description': {
            en: 'We remember them with deep respect and gratitude, as their vision and kindness will forever remain a guiding light for future generations. May Allah grant them Jannatul Ferdaous.',
            bn: 'আমরা তাদের গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তাদের দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাদের জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor3-amount': {
            en: 'Land Donated: 34 percent',
            bn: 'দানকৃত জমির পরিমাণ: ৩৪ শতাংশ'
        },
        'donor3-date': {
            en: 'Date: 05/11/1954',
            bn: 'তারিখ: ০৫/১১/১৯৫৪'
        },
        'donor4-name': {
            en: 'Morhum Munsur Ali, Matabbar Bari',
            bn: 'মরহুম মনসুর আলী, মাতব্বর বাড়ি'
        },
        'donor4-description': {
            en: 'We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor4-amount': {
            en: 'Land Donated: 15 percent',
            bn: 'দানকৃত জমির পরিমাণ: ১৫ শতাংশ'
        },
        'donor4-date': {
            en: 'Date: 20/12/1954',
            bn: 'তারিখ: ২০/১২/১৯৫৪'
        },
        'donor5-name': {
            en: 'Hajji Yahya Ahmad, owner of Bawani Mill',
            bn: 'হাজী ইয়াহিয়া আহমাদ, বাওয়ানী মিলের মালিক'
        },
        'donor5-description': {
            en: 'We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor5-amount': {
            en: 'Land Donated: 31 percent',
            bn: 'দানকৃত জমির পরিমাণ: ৩১ শতাংশ'
        },
        'donor5-date': {
            en: 'Date: 05/10/1966',
            bn: 'তারিখ: ০৫/১০/১৯৬৬'
        },
        'donor6-name': {
            en: 'Martyr Qari Ubaidullah Hafezzi (may Allah be pleased with him)',
            bn: 'শহীদ ক্বারী উবায়দুল্লাহ হাফেজ্জি রহ.'
        },
        'donor6-description': {
            en: 'We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor6-amount': {
            en: 'Land Donated: 15 percent',
            bn: 'দানকৃত জমির পরিমাণ: ১৫ শতাংশ'
        },
        'donor6-date': {
            en: 'Date: 22/08/1978',
            bn: 'তারিখ: ২২/০৮/১৯৭৮'
        },
        'donor7-name': {
            en: 'Hazrat Hafezzi Huzur (may Allah be pleased with him)',
            bn: 'হযরত হাফেজ্জি হুজুর রহ.'
        },
        'donor7-role': {
            en: 'Founder',
            bn: 'প্রতিষ্ঠাতা'
        },
        'donor7-description': {
            en: "Hazrat Hafezzi Huzur was a very famous figure in Bangladesh, known for his piety, honor, respect, good deeds, and significant role in the political field. His contributions to both education and politics have left a lasting impact. His vision continues to inspire us as we uphold the values he instilled in our madrasa. May Allah grant him Jannatul Ferdaous.",
            bn: "হযরত হাফেজ্জি হুজুর বাংলাদেশে তার তাকওয়া, সম্মান, শ্রদ্ধা, ভালো কাজ এবং রাজনৈতিক ক্ষেত্রে গুরুত্বপূর্ণ ভূমিকার জন্য অত্যন্ত বিখ্যাত ছিলেন। শিক্ষা ও রাজনীতি উভয় ক্ষেত্রেই তার অবদান দীর্ঘস্থায়ী প্রভাব ফেলেছে। তার দর্শন আমাদের অনুপ্রাণিত করে চলেছে কারণ আমরা আমাদের মাদ্রাসায় তিনি যে মূল্যবোধগুলি স্থাপন করেছিলেন তা সমুন্নত রাখি। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।"
        },
        'donor7-amount': {
            en: 'Land Donated: 41.5 percent',
            bn: 'দানকৃত জমির পরিমাণ: ৪১.৫ শতাংশ'
        },
        'donor7-date': {
            en: 'Date: 23/03/1981',
            bn: 'তারিখ: ২৩/০৩/১৯৮১'
        },
        'donor8-name': {
            en: 'Late Arjan Bepari, Memberbari',
            bn: 'মরহুম আরজান বেপারী, মেম্বার বাড়ি'
        },
        'donor8-description': {
            en: 'We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor8-amount': {
            en: 'Land Donated: 7.5 percent',
            bn: 'দানকৃত জমির পরিমাণ: ৭.৫ শতাংশ'
        },
        'donor8-date': {
            en: 'Date: 23/03/1981',
            bn: 'তারিখ: ২৩/০৩/১৯৮১'
        },
        'donor9-name': {
            en: 'Late Abdur Rahman, Munshibari',
            bn: 'মরহুম আব্দুর রহমান, মুন্সি বাড়ি'
        },
        'donor9-description': {
            en: 'We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor9-amount': {
            en: 'Land Donated: 15.66 percent',
            bn: 'দানকৃত জমির পরিমাণ: ১৫.৬৬ শতাংশ'
        },
        'donor9-date': {
            en: 'Date: 17/04/1958',
            bn: 'তারিখ: ১৭/০৪/১৯৫৮'
        },
        'donor10-name': {
            en: 'Late Jinnatun Nesa, Munshibari',
            bn: 'মরহুমা জিন্নাতুন নেসা, মুন্সি বাড়ি'
        },
        'donor10-description': {
            en: 'We remember her with deep respect and gratitude, as her vision and kindness will forever remain a guiding light for future generations. May Allah grant her Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor10-amount': {
            en: 'Land Donated: 15 percent',
            bn: 'দানকৃত জমির পরিমাণ: ১৫ শতাংশ'
        },
        'donor10-date': {
            en: 'Date: 16/09/1985',
            bn: 'তারিখ: ১৬/০৯/১৯৮৫'
        },
        'donor11-name': {
            en: 'Late Abdur Razzak, Munshibari',
            bn: 'মরহুম আব্দুর রাজ্জাক, মুন্সি বাড়ি'
        },
        'donor11-description': {
            en: 'We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor11-amount': {
            en: 'Land Donated: 26 percent',
            bn: 'দানকৃত জমির পরিমাণ: ২৬ শতাংশ'
        },
        'donor11-date': {
            en: 'Date: 02/04/1989',
            bn: 'তারিখ: ০২/০৪/১৯৮৯'
        },
        'donor12-name': {
            en: 'AKM Harunur Rashid, Chandpur',
            bn: 'এ কে এম হারুনুর রশীদ, চাঁদপুর'
        },
        'donor12-description': {
            en: 'We remember him with deep respect and gratitude, as his vision and kindness will forever remain a guiding light for future generations. May Allah grant him Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor12-amount': {
            en: 'Land Donated: 22 percent',
            bn: 'দানকৃত জমির পরিমাণ: ২২ শতাংশ'
        },
        'donor12-date': {
            en: 'Date: 06/11/1989',
            bn: 'তারিখ: ০৬/১১/১৯৮৯'
        },
        'donor13-name': {
            en: 'Late Samirun Nesa',
            bn: 'মরহুমা সমিরুন নেসা'
        },
        'donor13-description': {
            en: 'We remember her with deep respect and gratitude, as her vision and kindness will forever remain a guiding light for future generations. May Allah grant her Jannatul Ferdaous.',
            bn: 'আমরা তাকে গভীর শ্রদ্ধা ও কৃতজ্ঞতার সাথে স্মরণ করি, কারণ তার দূরদৃষ্টি এবং দয়া ভবিষ্যত প্রজন্মের জন্য চিরকাল পথপ্রদর্শক হয়ে থাকবে। আল্লাহ তাকে জান্নাতুল ফেরদৌস দান করুন।'
        },
        'donor13-amount': {
            en: 'Land Donated: 10.5 percent',
            bn: 'দানকৃত জমির পরিমাণ: ১০.৫ শতাংশ'
        },
        'donor13-date': {
            en: 'Date: 17/02/1999',
            bn: 'তারিখ: ১৭/০২/১৯৯৯'
        }
    };

    for (const [id, translations] of Object.entries(elements)) {
        const element = document.getElementById(id);
        if (element) {
            element.innerHTML = translations[language];
        }
    }
}

// Listen for global language change event
window.addEventListener('languageChange', function(event) {
    updateLandDonorsContent(event.detail);
});

document.addEventListener("DOMContentLoaded", () => {
    // Initialize with current stored language or default to English
    const currentLanguage = localStorage.getItem('preferredLanguage') || 'en';
    updateLandDonorsContent(currentLanguage);
});