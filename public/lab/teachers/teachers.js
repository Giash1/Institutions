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
function setLanguage(language) {
    const elements = {
        'lab-services-title': {
            en: 'Lab Services',
            bn: 'ল্যাব সেবা'
        },
        'lab-services-description': {
            en: 'At our Madrasha, we are committed to providing high-quality Islamic education along with Computer Science, English and Mathematics to our students. Our experienced educators are dedicated to fostering a deep understanding of Islamic principles and teachings, ensuring that our students are well-prepared to live by these values in their daily lives.',
            bn: 'আমাদের মাদ্রাসায়, আমরা আমাদের শিক্ষার্থীদের উচ্চ-মানের ইসলামী শিক্ষা সহ কম্পিউটার বিজ্ঞান, ইংরেজি এবং গণিত প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের অভিজ্ঞ শিক্ষকেরা ইসলামী নীতিমালা এবং শিক্ষার গভীর বোঝাপড়া গড়ে তোলার জন্য নিবেদিত, নিশ্চিত করে যে আমাদের শিক্ষার্থীরা তাদের দৈনন্দিন জীবনে এই মূল্যবোধগুলি মেনে চলার জন্য ভালভাবে প্রস্তুত।'
        },
        'intro-title': {
            en: '"Meet Our Dedicated Educators and Managing Committee of Poschimgaon Madrasha Computer Lab"',
            bn: '"আমাদের নিবেদিতপ্রাণ শিক্ষক এবং পছিমগাঁও মাদ্রাসা কম্পিউটার ল্যাবের ব্যবস্থাপনা কমিটির সাথে দেখা করুন"'
        },
        'intro-description': {
            en: 'Our dedicated and highly qualified teaching staff are experts in their fields, bringing a wealth of knowledge and experience to guide students through their journey of Islamic education.',
            bn: 'আমাদের নিবেদিত এবং উচ্চ যোগ্যতাসম্পন্ন শিক্ষকেরা তাদের ক্ষেত্রে বিশেষজ্ঞ, ইসলামী শিক্ষার যাত্রায় শিক্ষার্থীদের গাইড করার জন্য প্রচুর জ্ঞান এবং অভিজ্ঞতা নিয়ে আসেন।'
        },
        'teacher1-name': {
            en: 'Mohammad Giash Uddin Bhuiyan, MSc (Triple MSc)',
            bn: 'মোহাম্মদ গিয়াস উদ্দিন ভূঁইয়া, এমএসসি (ট্রিপল এমএসসি)'
        },
        'teacher1-designation': {
            en: [
                'JavaScript FullStack Developer',
                'Founder of the Poschimgaon Madrasha Computer Lab',
                'Developer of the Poschimgaon Madrasha Website',
                'Social Counsellor, Stockholm Commune and Upplands Väsby Commune, Sweden'
            ],
            bn: [
                'জাভাস্ক্রিপ্ট ফুলস্ট্যাক ডেভেলপার',
                'পশ্চিমগাঁও মাদ্রাসা কম্পিউটার ল্যাবের প্রতিষ্ঠাতা',
                'পশ্চিমগাঁও মাদ্রাসা ওয়েবসাইটের ডেভেলপার',
                'সোশ্যাল কাউন্সেলর, স্টকহোম কমিউন এবং উপল্যান্ডস ভাসবি কমিউন, সুইডেন'
            ]
        },
        'teacher2-name': {
            en: 'Mohammad Tawhidul Islam Totul, MSc (Mathematics)',
            bn: 'মোহাম্মদ তাওহিদুল ইসলাম টুটুল, এমএসসি (গণিত)'
        },
        'teacher2-designation': {
            en: [
                'First Assistant Vice President & Sub Manager, Jamuna Bank PLC, Madhabdi Br,',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office, English Language and Mathematics'
            ],
            bn: [
                'প্রথম সহকারী ভাইস প্রেসিডেন্ট এবং সাব ম্যানেজার, যমুনা ব্যাংক পিএলসি, মাধবদী ব্রাঞ্চ,',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'মাইক্রোসফট অফিস, ইংরেজি ভাষা এবং গণিতের বিশেষজ্ঞ'
            ]
        },
        'teacher9-name': {
            en: 'Hafej Mawlana Mufti Anamul Haque Sharif',
            bn: 'হাফেজ মাওলানা মুফতি আনামুল হক শরীফ'
        },
        'teacher9-designation': {
            en: [
                'Principle, Poschimgaon Madrasha',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office, Arabic and English Language'
            ],
            bn: [
                'প্রিন্সিপাল, পশ্চিমগাঁও মাদ্রাসা',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'মাইক্রোসফট অফিস, আরবি এবং ইংরেজি ভাষা বিশেষজ্ঞ'
            ]
        },
        'teacher9-name': {
            en: 'Md Saiful Islam',
         bn: 'মোঃ সাইফুল ইসলাম'
        },
        'teacher10-designation': {
            en: [
                'Director, Bangladesh Railway, Dhaka Division',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office, Mathematics and English Language'
            ],
            bn: [
               'পরিচালক, বাংলাদেশ রেলওয়ে, ঢাকা বিভাগ',

'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব, পছিম গাঁও মাদ্রাসা',

'মাইক্রোসফট অফিস, গণিত এবং ইংরেজি ভাষা বিশেষজ্ঞ'
            ]
        },
        'teacher3-name': {
            en: 'Engr. Mohammad Asraful Islam Nazim',
            bn: 'ইঞ্জিনিয়ার মোহাম্মদ আসরাফুল ইসলাম নাজিম'
        },
        'teacher3-designation': {
            en: [
                'Director, Waterline ship design and consultant',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office and AutoCAD'
            ],
            bn: [
                'পরিচালক, ওয়াটারলাইন শিপ ডিজাইন এবং কনসালটেন্ট',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'মাইক্রোসফট অফিস এবং অটোক্যাডের বিশেষজ্ঞ'
            ]
        },
        'teacher4-name': {
            en: 'Md. Zahidul Haque',
            bn: 'মোঃ জাহিদুল হক'
        },
        'teacher4-designation': {
            en: [
                'Former Accountant, Duncan brothers, Bangladesh.',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office, Power Point, Excell and etc'
            ],
            bn: [
                'সাবেক হিসাবরক্ষক, ডানকান ব্রাদার্স, বাংলাদেশ।',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'মাইক্রোসফট অফিস, পাওয়ার পয়েন্ট, এক্সেল ইত্যাদির বিশেষজ্ঞ'
            ]
        },
        'teacher5-name': {
            en: 'Md. Mansur Rahman Sobuj',
            bn: 'মোঃ মনসুর রহমান সবুজ'
        },
        'teacher5-designation': {
            en: [
                'Senior Officer, Purbanchal Army Camp, Bangladesh Army',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office, Power Point, Excell, English Language'
            ],
            bn: [
                'সিনিয়র অফিসার, পূর্বাঞ্চল আর্মি ক্যাম্প, বাংলাদেশ আর্মি',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'মাইক্রোসফট অফিস, পাওয়ার পয়েন্ট, এক্সেল, ইংরেজি ভাষার বিশেষজ্ঞ'
            ]
        },
        'teacher6-name': {
            en: 'Rahatul Islam',
            bn: 'রাহাতুল ইসলাম'
        },
        'teacher6-designation': {
            en: [
                'Homeopath, Private Farmacy',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in English Language'
            ],
            bn: [
                'হোহোমিওপ্যাথ, বেসরকারি ফার্মেসি',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'ইংরেজি ভাষার বিশেষজ্ঞ'
            ]
        },
        'teacher7-name': {
            en: 'Mohammad Rafiqul Islam Altaf, Bcom',
            bn: 'মোহাম্মদ রফিকুল ইসলাম আলতাফ, বি.কম'
        },
        'teacher7-designation': {
            en: [
                'Teacher, General Education, Poschimgaon Madrasa',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office, Power Point, Excell and English Language'
            ],
            bn: [
                'শিক্ষক, সাধারণ শিক্ষা, পশ্চিমগাঁও মাদ্রাসা',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'মাইক্রোসফট অফিস, পাওয়ার পয়েন্ট, এক্সেল এবং ইংরেজি ভাষার বিশেষজ্ঞ'
            ]
        },
        'teacher8-name': {
            en: 'Hafej Mawlana Mufti Abu Raihan',
            bn: 'হাফেজ মাওলানা মুফতি আবু রাইহান'
        },
        'teacher8-designation': {
            en: [
                'Teacher, Hadith Department, Poschimgaon Madrasa',
                'Part time instructor, Computer Lab Poschim Gaon Madrasa',
                'Expert in Microsoft Office, Power Point, Excell and etc'
            ],
            bn: [
                'শিক্ষক, হাদিস বিভাগ, পশ্চিমগাঁও মাদ্রাসা',
                'খন্ডকালীন প্রশিক্ষক, কম্পিউটার ল্যাব পশ্চিমগাঁও মাদ্রাসা',
                'মাইক্রোসফট অফিস, পাওয়ার পয়েন্ট, এক্সেল ইত্যাদির বিশেষজ্ঞ'
            ]
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