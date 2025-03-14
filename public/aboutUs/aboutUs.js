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
loadHTML('heading', '../heading/heading.html', '../heading/heading.css', '../heading/heading.js');
loadHTML('nav', '../nav/nav.html', '../nav/nav.css', '../nav/nav.js');
loadHTML('footer', '../footer/footer.html', '../footer/footer.css', '../footer/footer.js');

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
        'about-title': {
            en: 'About Poschim Gaon Madrasha -i- Islamia Jameul Ulum',
            bn: 'পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুম সম্পর্কে'
        },
        'education-title': {
            en: 'Elevating Education Through Excellence and Innovation',
            bn: 'উৎকর্ষতা এবং উদ্ভাবনের মাধ্যমে শিক্ষার উন্নয়ন'
        },
        'mission-statement': {
            en: 'At Poschim Gaon Madrasha -i- Islamia Jameul Ulom, we are dedicated to providing a holistic and modern educational experience. Our mission is to cultivate a generation of learners equipped with both traditional values and contemporary knowledge, preparing them for success in a rapidly evolving world.',
            bn: 'পশ্চিমগাঁও মাদ্রাসা -ই- ইসলামিয়া জামেউল উলুমে, আমরা একটি সামগ্রিক এবং আধুনিক শিক্ষামূলক অভিজ্ঞতা প্রদানে প্রতিশ্রুতিবদ্ধ। আমাদের লক্ষ্য হল একটি প্রজন্মের শিক্ষার্থীদের গড়ে তোলা যারা ঐতিহ্যবাহী মূল্যবোধ এবং সমসাময়িক জ্ঞানে সজ্জিত, দ্রুত পরিবর্তনশীল বিশ্বে সাফল্যের জন্য প্রস্তুত।'
        },
        'commitment-title': {
            en: 'A Commitment to Qualified Education',
            bn: 'যোগ্য শিক্ষার প্রতি প্রতিশ্রুতি'
        },
        'commitment-description': {
            en: 'Our madrasha is more than just a place of learning; it is a nurturing ground for scholars. We focus on qualified education that combines rigorous academics with moral and spiritual development. Our curriculum is designed to meet the diverse needs of our students while promoting critical thinking and creativity.',
            bn: 'আমাদের মাদ্রাসা শুধুমাত্র একটি শিক্ষার স্থান নয়; এটি পণ্ডিতদের জন্য একটি লালন-পালনের ক্ষেত্র। আমরা কঠোর একাডেমিক এবং নৈতিক ও আধ্যাত্মিক উন্নয়নের সাথে যোগ্য শিক্ষার উপর মনোযোগ দিই। আমাদের পাঠ্যক্রমটি আমাদের শিক্ষার্থীদের বৈচিত্র্যময় চাহিদা পূরণের জন্য ডিজাইন করা হয়েছে যখন সমালোচনামূলক চিন্তাভাবনা এবং সৃজনশীলতাকে উৎসাহিত করে।'
        },
        'teaching-methods-title': {
            en: 'Innovative Teaching Methods',
            bn: 'উদ্ভাবনী শিক্ষাদান পদ্ধতি'
        },
        'teaching-methods-description': {
            en: 'Emphasizing modernized education, we employ innovative teaching methods that engage students actively. Our educators are trained in the latest pedagogical techniques, ensuring that lessons are not only informative but also inspiring. We believe in the power of interactive learning to make education enjoyable and effective.',
            bn: 'আধুনিক শিক্ষার উপর জোর দিয়ে, আমরা উদ্ভাবনী শিক্ষাদান পদ্ধতি ব্যবহার করি যা শিক্ষার্থীদের সক্রিয়ভাবে জড়িত করে। আমাদের শিক্ষকদের সর্বশেষ শিক্ষাদান কৌশলে প্রশিক্ষণ দেওয়া হয়েছে, নিশ্চিত করে যে পাঠগুলি শুধুমাত্র তথ্যবহুল নয় বরং অনুপ্রেরণামূলকও। আমরা বিশ্বাস করি যে ইন্টারেক্টিভ শিক্ষার শক্তি শিক্ষাকে উপভোগ্য এবং কার্যকর করে তুলতে পারে।'
        },
        'teachers-title': {
            en: 'Experienced and Qualified Teachers',
            bn: 'অভিজ্ঞ এবং যোগ্য শিক্ষক'
        },
        'teachers-description': {
            en: 'Our team of qualified teachers is passionate about education and dedicated to fostering a love for learning in every student. With extensive backgrounds in their respective fields, our educators are committed to personalizing the learning experience, ensuring that every student receives the attention they deserve.',
            bn: 'আমাদের যোগ্য শিক্ষকদের দল শিক্ষার প্রতি উত্সাহী এবং প্রতিটি শিক্ষার্থীর মধ্যে শেখার প্রতি ভালবাসা গড়ে তোলার জন্য নিবেদিত। তাদের নিজ নিজ ক্ষেত্রে বিস্তৃত পটভূমি সহ, আমাদের শিক্ষকেরা শেখার অভিজ্ঞতাকে ব্যক্তিগতকরণের জন্য প্রতিশ্রুতিবদ্ধ, নিশ্চিত করে যে প্রতিটি শিক্ষার্থী তাদের প্রাপ্য মনোযোগ পায়।'
        },
        'facilities-title': {
            en: 'State-of-the-Art Facilities',
            bn: 'আধুনিক সুবিধা'
        },
        'facilities-description': {
            en: 'We pride ourselves on our state-of-the-art facilities, which include well-equipped laboratories, libraries, and technology centers. Our labs provide hands-on learning experiences, allowing students to apply theoretical knowledge in practical settings, fostering a deeper understanding of their subjects.',
            bn: 'আমরা আমাদের অত্যাধুনিক সুবিধাগুলির উপর গর্বিত, যার মধ্যে রয়েছে সুসজ্জিত ল্যাবরেটরি, লাইব্রেরি এবং প্রযুক্তি কেন্দ্র। আমাদের ল্যাবগুলি হাতে-কলমে শেখার অভিজ্ঞতা প্রদান করে, শিক্ষার্থীদের ব্যবহারিক সেটিংসে তাত্ত্বিক জ্ঞান প্রয়োগ করতে দেয়, তাদের বিষয়গুলির গভীর বোঝাপড়া তৈরি করে।'
        },
        'modern-education-title': {
            en: 'A Focus on Modernized Education',
            bn: 'আধুনিক শিক্ষার উপর ফোকাস'
        },
        'modern-education-description': {
            en: 'At Poschim Gaon Madrasha, we are committed to staying at the forefront of educational advancements. Our modernized approach includes the integration of technology in the classroom, ensuring our students are not only well-versed in traditional knowledge but also prepared for future challenges in a digital world.',
            bn: 'পশ্চিমগাঁও মাদ্রাসায়, আমরা শিক্ষাগত অগ্রগতির অগ্রভাগে থাকার জন্য প্রতিশ্রুতিবদ্ধ। আমাদের আধুনিকীকৃত পদ্ধতির মধ্যে শ্রেণীকক্ষে প্রযুক্তির সংহতকরণ অন্তর্ভুক্ত রয়েছে, নিশ্চিত করে যে আমাদের শিক্ষার্থীরা শুধুমাত্র ঐতিহ্যবাহী জ্ঞানে সুপরিচিত নয় বরং একটি ডিজিটাল বিশ্বের ভবিষ্যতের চ্যালেঞ্জগুলির জন্যও প্রস্তুত।'
        },
        'future-title': {
            en: 'Building a Bright Future',
            bn: 'উজ্জ্বল ভবিষ্যত গড়ে তোলা'
        },
        'future-description': {
            en: 'We believe in building a bright future for our students by providing a supportive and encouraging environment. Every aspect of our madrasha is designed to empower students, fostering resilience and a lifelong love for learning. We invite you to join us on this journey toward excellence in education.',
            bn: 'আমরা একটি সহায়ক এবং উত্সাহজনক পরিবেশ প্রদান করে আমাদের শিক্ষার্থীদের জন্য একটি উজ্জ্বল ভবিষ্যত গড়ে তোলার বিশ্বাস করি। আমাদের মাদ্রাসার প্রতিটি দিক শিক্ষার্থীদের ক্ষমতায়নের জন্য ডিজাইন করা হয়েছে, স্থিতিস্থাপকতা এবং আজীবন শেখার প্রতি ভালবাসা তৈরি করে। আমরা আপনাকে শিক্ষায় উৎকর্ষতার দিকে এই যাত্রায় আমাদের সাথে যোগ দেওয়ার জন্য আমন্ত্রণ জানাই।'
        }
    };

    for (const id in elements) {
        document.getElementById(id).innerHTML = elements[id][language];
    }
}