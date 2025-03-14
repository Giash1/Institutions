function loadHTML(section, filePath, cssPath, jsPath) {
    if (cssPath) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = cssPath;
        document.head.appendChild(link);
    }

    fetch(filePath)
        .then(response => response.text())
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

// Load sections dynamically
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
        'exam-terms-title': {
            en: 'Exam Terms and Norms',
            bn: 'পরীক্ষার শর্ত এবং নিয়মাবলী'
        },
        'exam-terms': {
            en: '<strong>Terms of the Exams:</strong> Three terms',
            bn: '<strong>পরীক্ষার শর্ত:</strong> তিনটি পর্ব'
        },
        'exam-norms': {
            en: '<strong>Norms of the Exams:</strong> Written and Oral exams',
            bn: '<strong>পরীক্ষার নিয়মাবলী:</strong> লিখিত এবং মৌখিক পরীক্ষা'
        },
        'exam-timing': {
            en: '<strong>Exam Timing:</strong> Zilkod (زيلكاد), Safar (سفر), and Saban (سابان) (for all departments)',
            bn: '<strong>পরীক্ষার সময়:</strong> জিলকদ (زيلكاد), সফর (سفر), এবং সাবান (سابان) (সকল বিভাগের জন্য)'
        },
        'marking-system-title': {
            en: 'Marking System',
            bn: 'মার্কিং সিস্টেম'
        },
        'full-marks': {
            en: '🎯 **Full Marks**: 100',
            bn: '🎯 **পূর্ণ নম্বর**: ১০০'
        },
        'mumtaj': {
            en: '🏅 **Mumtaj (ممتاز)**: 80 and above',
            bn: '🏅 **মুমতাজ (ممتاز)**: ৮০ এবং তার উপরে'
        },
        'jayeed-jiddan': {
            en: '🥇 **Jayeed Jiddan (جيد جداً)**: 65 and above',
            bn: '🥇 **জায়েদ জিদ্দান (جيد جداً)**: ৬৫ এবং তার উপরে'
        },
        'jayeed': {
            en: '🏆 **Jayeed (جيد)**: 50 and above',
            bn: '🏆 **জায়েদ (جيد)**: ৫০ এবং তার উপরে'
        },
        'makbul': {
            en: '🎖️ **Makbul (مقبول)**: 33 and above',
            bn: '🎖️ **মাকবুল (مقبول)**: ৩৩ এবং তার উপরে'
        }
    };

    for (const id in elements) {
        document.getElementById(id).innerHTML = elements[id][language];
    }
}