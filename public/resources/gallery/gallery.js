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
        moreContent.style.display = "block"; // Show more content
        moreBtn.innerText = "Less"; // Change button text to "Less"
    } else {
        moreContent.style.display = "none"; // Hide more content
        moreBtn.innerText = "More"; // Change button text to "More"
    }
}

// Function to load more images when the button is clicked
function loadMore() {
    const moreImages = document.getElementById("moreImages");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    if (moreImages.style.display === "none" || moreImages.style.display === "") {
        moreImages.style.display = "flex"; // Show more images
        loadMoreBtn.innerText = "Load Less"; // Change button text to "Load Less"
    } else {
        moreImages.style.display = "none"; // Hide additional images
        loadMoreBtn.innerText = "Load More"; // Change button text to "Load More"
    }
}

// Initially hide the "More" content and additional images
document.getElementById("moreContent").style.display = "none";
document.getElementById("moreImages").style.display = "none";
