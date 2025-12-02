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
            en: 'Morhum Amir Uddin Bhuiyan Sahib',
            bn: 'মরহুম আমির উদ্দিন ভূঁইয়া সাহেব'
        },
        'donor2-amount': {
            en: 'Amount: 121 percent (along with the mosque)',
            bn: 'পরিমাণ: ১২১ শতাংশ (মসজিদ সহ)'
        },
        'donor2-date': {
            en: 'Date: 26/02/1941',
            bn: 'তারিখ: ২৬/০২/১৯৪১'
        },
        'donor3-name': {
            en: 'Hajji A.Hannan Bhuiyan, A. Hashem Bhuiyan, Chetarabanu and Shamirun Nesa',
            bn: 'হাজী এ. হান্নান ভূঁইয়া, এ. হাশেম ভূঁইয়া, চেতারবানু এবং শমিরুন নেসা'
        },
        'donor3-amount': {
            en: 'Amount: 34 percent',
            bn: 'পরিমাণ: ৩৪ শতাংশ'
        },
        'donor3-date': {
            en: 'Date: 05/11/1954',
            bn: 'তারিখ: ০৫/১১/১৯৫৪'
        },
        'donor4-name': {
            en: 'Morhum Munsur Ali, Matabbar Bari',
            bn: 'মরহুম মনসুর আলী, মাতব্বর বাড়ি'
        },
        'donor4-amount': {
            en: 'Amount: 15 percent',
            bn: 'পরিমাণ: ১৫ শতাংশ'
        },
        'donor4-date': {
            en: 'Date: 20/12/1954',
            bn: 'তারিখ: ২০/১২/১৯৫৪'
        },
        'donor5-name': {
            en: 'Hajji Yahya Ahmad, owner of Bawani Mill',
            bn: 'হাজী ইয়াহিয়া আহমাদ, বাওয়ানী মিলের মালিক'
        },
        'donor5-amount': {
            en: 'Amount: 31 percent',
            bn: 'পরিমাণ: ৩১ শতাংশ'
        },
        'donor5-date': {
            en: 'Date: 05/10/1966',
            bn: 'তারিখ: ০৫/১০/১৯৬৬'
        },
        'donor6-name': {
            en: 'Martyr Qari Ubaidullah Hafezzi (may Allah be pleased with him)',
            bn: 'শহীদ ক্বারী উবায়দুল্লাহ হাফেজ্জি রহ.'
        },
        'donor6-amount': {
            en: 'Amount: 15 percent',
            bn: 'পরিমাণ: ১৫ শতাংশ'
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
            en: "Hafezzī Huzūr's contributions to both education and politics have left a lasting impact. His vision continues to inspire us as we uphold the values he instilled in our madrasa.",
            bn: "শিক্ষা ও রাজনীতি উভয় ক্ষেত্রেই হাফেজ্জি হুজুরের অবদান দীর্ঘস্থায়ী প্রভাব ফেলেছে। তাঁর দর্শন আমাদের অনুপ্রাণিত করে চলেছে কারণ আমরা আমাদের মাদ্রাসায় তিনি যে মূল্যবোধগুলি স্থাপন করেছিলেন তা সমুন্নত রাখি।"
        },
        'donor7-amount': {
            en: 'Amount: 41.5 percent',
            bn: 'পরিমাণ: ৪১.৫ শতাংশ'
        },
        'donor7-date': {
            en: 'Date: 23/03/1981',
            bn: 'তারিখ: ২৩/০৩/১৯৮১'
        },
        'donor8-name': {
            en: 'Late Arjan Bepari, Memberbari',
            bn: 'মরহুম আরজান বেপারী, মেম্বার বাড়ি'
        },
        'donor8-amount': {
            en: 'Amount: 7.5 percent',
            bn: 'পরিমাণ: ৭.৫ শতাংশ'
        },
        'donor8-date': {
            en: 'Date: 23/03/1981',
            bn: 'তারিখ: ২৩/০৩/১৯৮১'
        },
        'donor9-name': {
            en: 'Late Abdur Rahman, Munshibari',
            bn: 'মরহুম আব্দুর রহমান, মুন্সি বাড়ি'
        },
        'donor9-amount': {
            en: 'Amount: 15.66 percent',
            bn: 'পরিমাণ: ১৫.৬৬ শতাংশ'
        },
        'donor9-date': {
            en: 'Date: 17/04/1958',
            bn: 'তারিখ: ১৭/০৪/১৯৫৮'
        },
        'donor10-name': {
            en: 'Late Jinnatun Nesa, Munshibari',
            bn: 'মরহুমা জিন্নাতুন নেসা, মুন্সি বাড়ি'
        },
        'donor10-amount': {
            en: 'Amount: 15 percent',
            bn: 'পরিমাণ: ১৫ শতাংশ'
        },
        'donor10-date': {
            en: 'Date: 16/09/1985',
            bn: 'তারিখ: ১৬/০৯/১৯৮৫'
        },
        'donor11-name': {
            en: 'Late Abdur Razzak, Munshibari',
            bn: 'মরহুম আব্দুর রাজ্জাক, মুন্সি বাড়ি'
        },
        'donor11-amount': {
            en: 'Amount: 26 percent',
            bn: 'পরিমাণ: ২৬ শতাংশ'
        },
        'donor11-date': {
            en: 'Date: 02/04/1989',
            bn: 'তারিখ: ০২/০৪/১৯৮৯'
        },
        'donor12-name': {
            en: 'AKM Harunur Rashid, Chandpur',
            bn: 'এ কে এম হারুনুর রশীদ, চাঁদপুর'
        },
        'donor12-amount': {
            en: 'Amount: 22 percent',
            bn: 'পরিমাণ: ২২ শতাংশ'
        },
        'donor12-date': {
            en: 'Date: 06/11/1989',
            bn: 'তারিখ: ০৬/১১/১৯৮৯'
        },
        'donor13-name': {
            en: 'Late Samirun Nesa',
            bn: 'মরহুমা সমিরুন নেসা'
        },
        'donor13-amount': {
            en: 'Amount: 10.5 percent',
            bn: 'পরিমাণ: ১০.৫ শতাংশ'
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

// Global function to handle language switch for both page and nav
window.changeLanguage = function(language) {
    updateLandDonorsContent(language);
    // Update nav if the function is available from nav.js
    if (typeof window.setLanguage === 'function') {
        window.setLanguage(language);
    }
};

document.addEventListener("DOMContentLoaded", () => {
    changeLanguage('en');
});