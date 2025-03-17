function setLanguage(language) {
    const elements = {
        'lab-services-title': {
            en: 'Madrasah Services',
            bn: 'মাদ্রাসা সেবা'
        },
        'lab-services-description': {
            en: 'At our Madrasha, we are committed to providing high-quality Islamic education to our students. Our experienced educators are dedicated to fostering a deep understanding of Islamic principles and teachings.',
            bn: 'আমাদের মাদ্রাসায়, আমরা শিক্ষার্থীদের উচ্চ-মানের ইসলামী শিক্ষা প্রদান করতে প্রতিশ্রুতিবদ্ধ। আমাদের শিক্ষকরা ইসলামী নীতিমালার গভীর বোঝাপড়া গড়ে তুলতে সাহায্য করেন।'
        },
        'intro-title': {
            en: '"Meet Our Dedicated Educators and Staff"',
            bn: '"আমাদের নিবেদিত শিক্ষকদের সাথে পরিচিত হন"'
        },
        'intro-description': {
            en: 'Our teaching staff are experts in their fields, guiding students through their Islamic education journey.',
            bn: 'আমাদের শিক্ষকরা তাদের ক্ষেত্রে বিশেষজ্ঞ, শিক্ষার্থীদের ইসলামী শিক্ষা যাত্রায় গাইড করেন।'
        },
        'teacher1-name': {
            en: 'Hafej Mawlana Mufti Anamul Haque Sharif',
            bn: 'হাফেজ মাওলানা মুফতি আনামুল হক শরীফ'
        },
        'teacher1-designation': {
            en: 'Designation: Principle',
            bn: 'পদবী: প্রিন্সিপাল'
        },
        'teacher1-subjects': {
            en: 'Subjects: Hadith Department',
            bn: 'বিষয়: হাদিস বিভাগ'
        },
        'teacher2-name': {
            en: 'Hafej Mawlana Mufassir Hossain Ahmed',
            bn: 'হাফেজ মাওলানা মুফাসসির হুসাইন আহমেদ'
        },
        'teacher2-designation': {
            en: 'Designation: Education Secretary',
            bn: 'পদবী: শিক্ষা সচিব'
        },
        'teacher2-subjects': {
            en: 'Subjects: Hadith Department',
            bn: 'বিষয়: হাদিস বিভাগ'
        },
        'teacher3-name': {
            en: 'Hafej Mawlana Mufti Abu Raihan',
            bn: 'হাফেজ মাওলানা মুফতি আবু রাইহান'
        },
        'teacher3-designation': {
            en: 'Designation: Assistant Education Secretary',
            bn: 'পদবী: সহকারী শিক্ষা সচিব'
        },
        'teacher3-subjects': {
            en: 'Subjects: Hadith Department',
            bn: 'বিষয়: হাদিস বিভাগ'
        },
        'teacher4-name': {
            en: 'Hafej Mawlana Mufti Shoaib Ahmed',
            bn: 'হাফেজ মাওলানা মুফতি শোয়েব আহমেদ'
        },
        'teacher4-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher4-subjects': {
            en: 'Subjects: Hadith Department',
            bn: 'বিষয়: হাদিস বিভাগ'
        },
        'teacher5-name': {
            en: 'Hafej Mawlana Mufti Sayad Bin Bashir',
            bn: 'হাফেজ মাওলানা মুফতি সায়াদ বিন বশির'
        },
        'teacher5-designation': {
            en: 'Designation: Assistant Resident In-charge',
            bn: 'পদবী: সহকারী আবাসিক ইনচার্জ'
        },
        'teacher5-subjects': {
            en: 'Subjects: Hadith Department',
            bn: 'বিষয়: হাদিস বিভাগ'
        },
        'teacher6-name': {
            en: 'Mawlana Mufti Monir Hossain',
            bn: 'মাওলানা মুফতি মোনির হোসেন'
        },
        'teacher6-designation': {
            en: 'Designation: Resident In-charge',
            bn: 'পদবী: আবাসিক ইনচার্জ'
        },
        'teacher6-subjects': {
            en: 'Subjects: Islamic Jurisprudence, Alim',
            bn: 'বিষয়: ইসলামিক জুরিসপ্রুডেন্স, আলিম'
        },
        'teacher7-name': {
            en: 'Mawlana Mufti Ariful Islam',
            bn: 'মাওলানা মুফতি আরিফুল ইসলাম'
        },
        'teacher7-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher7-subjects': {
            en: 'Subjects: Hadith Department',
            bn: 'বিষয়: হাদিস বিভাগ'
        },
        'teacher8-name': {
            en: 'Hafej Mawlana Abu Yusuf',
            bn: 'হাফেজ মাওলানা আবু ইউসুফ'
        },
        'teacher8-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher8-subjects': {
            en: 'Subjects: Hifz Department',
            bn: 'বিষয়: হিফজ বিভাগ'
        },
        'teacher9-name': {
            en: 'Hafej Mawlana Irfan Hossain',
            bn: 'হাফেজ মাওলানা ইরফান হোসেন'
        },
        'teacher9-designation': {
            en: 'Designation: Head of the department',
            bn: 'পদবী: বিভাগের প্রধান'
        },
        'teacher9-subjects': {
            en: 'Subjects: Nazera Department',
            bn: 'বিষয়: নজেরা বিভাগ'
        },
        'teacher10-name': {
            en: 'Hafej Mawlana Shibbir Ahmed',
            bn: 'হাফেজ মাওলানা শিব্বির আহমেদ'
        },
        'teacher10-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher10-subjects': {
            en: 'Subjects: Nazera Department',
            bn: 'বিষয়: নজেরা বিভাগ'
        },
        'teacher11-name': {
            en: 'Hafej Kari Habibur Rahman',
            bn: 'হাফেজ কারী হাবিবুর রহমান'
        },
        'teacher11-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher11-subjects': {
            en: 'Subjects: Nurani Department',
            bn: 'বিষয়: নূরানী বিভাগ'
        },
        'teacher12-name': {
            en: 'Hafej Mohammad Yakub Ali',
            bn: 'হাফেজ মোহাম্মদ ইয়াকুব আলী'
        },
        'teacher12-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher12-subjects': {
            en: 'Subjects: Hifz Department',
            bn: 'বিষয়: হিফজ বিভাগ'
        },
        'teacher13-name': {
            en: 'Kari Mawlana Rois Uddin',
            bn: 'কারী মাওলানা রইস উদ্দিন'
        },
        'teacher13-designation': {
            en: 'Designation: Head of the department',
            bn: 'পদবী: বিভাগের প্রধান'
        },
        'teacher13-subjects': {
            en: 'Subjects: Nurani Department',
            bn: 'বিষয়: নূরানী বিভাগ'
        },
        'teacher14-name': {
            en: 'Hafej Kari Tufayel Alam',
            bn: 'হাফেজ কারী তুফায়েল আলম'
        },
        'teacher14-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher14-subjects': {
            en: 'Subjects: Nurani Department',
            bn: 'বিষয়: নূরানী বিভাগ'
        },
        'teacher15-name': {
            en: 'Hafej Mawlana Yousuf',
            bn: 'হাফেজ মাওলানা ইউসুফ'
        },
        'teacher15-designation': {
            en: 'Designation: General Teacher',
            bn: 'পদবী: সাধারণ শিক্ষক'
        },
        'teacher15-subjects': {
            en: 'Subjects: Hadith Department',
            bn: 'বিষয়: হাদিস বিভাগ'
        },
        'teacher16-name': {
            en: 'Hafej Shafiqul Islam',
            bn: 'হাফেজ শফিকুল ইসলাম'
        },
        'teacher16-designation': {
            en: 'Designation: Accountant and Boarding Superintendent',
            bn: 'পদবী: হিসাবরক্ষক এবং বোর্ডিং সুপারিনটেনডেন্ট'
        },
        'teacher16-subjects': {
            en: 'Subjects: Hifz Department',
            bn: 'বিষয়: হিফজ বিভাগ'
        },
        'teacher17-name': {
            en: 'Mohammad Rafiqul Islam Altaf, Bcom',
            bn: 'মোহাম্মদ রফিকুল ইসলাম আলতাফ, বি.কম'
        },
        'teacher17-designation': {
            en: 'Designation: Teacher',
            bn: 'পদবী: শিক্ষক'
        },
        'teacher17-subjects': {
            en: 'Subjects: General Education',
            bn: 'বিষয়: সাধারণ শিক্ষা'
        },
        'teacher18-name': {
            en: 'Mohammad Rayhan',
            bn: 'মোহাম্মদ রায়হান'
        },
        'teacher18-designation': {
            en: 'Designation: Head Chef',
            bn: 'পদবী: প্রধান রাঁধুনি'
        },
        'teacher19-name': {
            en: 'Mohammad Faizul Haque',
            bn: 'মোহাম্মদ ফয়জুল হক'
        },
        'teacher19-designation': {
            en: 'Designation: Assistant Chef',
            bn: 'পদবী: সহকারী রাঁধুনি'
        }
    };

    // Loop through the elements and update their text content
    for (let key in elements) {
        if (document.getElementById(key)) {
            document.getElementById(key).innerText = elements[key][language];
        }
    }
}

// Function to dynamically load HTML components
function loadHTML(section, filePath, cssPath, jsPath) {
    console.log(`Loading ${filePath} into #${section}`);

    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then(data => {
            document.getElementById(section).innerHTML = data;
            if (jsPath) {
                const script = document.createElement('script');
                script.src = jsPath;
                document.body.appendChild(script);
            }
        })
        .catch(err => console.error(`Error loading ${filePath}:`, err));
}

// Function to toggle the visibility of the "More" content
function toggleMore() {
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    const lessBtn = document.getElementById("lessBtn");

    if (moreContent.style.display === "none" || moreContent.style.display === "") {
        moreContent.style.display = "flex";
        moreContent.style.flexWrap = "wrap";
        moreBtn.style.display = "none";
        lessBtn.style.display = "inline-block";
        moreBtn.innerText = "Less"; // Change button text to "Less"
    } else {
        moreContent.style.display = "none";
        moreBtn.style.display = "inline-block";
        lessBtn.style.display = "none";
        moreBtn.innerText = "More"; // Change button text to "More"
    }
}

// Initially hide the "More" content and "Less" button
document.addEventListener("DOMContentLoaded", () => {
    const moreContent = document.getElementById("moreContent");
    const moreBtn = document.getElementById("moreBtn");
    const lessBtn = document.getElementById("lessBtn");

    moreContent.style.display = "none";
    if (moreBtn) {
        moreBtn.style.display = "inline-block";
    }
    if (lessBtn) {
        lessBtn.style.display = "none";
    }
});

// Load components
loadHTML('heading', '../../heading/heading.html', '../../heading/heading.css', '../../heading/heading.js');
loadHTML('nav', '../../nav/nav.html', '../../nav/nav.css', '../../nav/nav.js');
loadHTML('footer', '../../footer/footer.html', '../../footer/footer.css', '../../footer/footer.js');
