



const homeLink = document.querySelector('nav a[href="about.html"]');
const aboutLink = document.querySelector('nav a[href="about.html"]');
const portfolioLink = document.querySelector('nav a[href="portfolio.html"]');
const contentContainer = document.querySelector('.content-container');

// Function to load content based on the clicked link
function loadContent(url) {
    fetch(url)
        .then((response) => response.text())
        .then((html) => {
            contentContainer.innerHTML = html;
        })
        .catch((error) => {
            console.error('Error loading content:', error);
        });
}

// Add click event listeners to the navigation links
homeLink.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent default link behavior
    loadContent('index.html');
});

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('about.html');
});

portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('portfolio.html');
});

// Initially load the home page content when the page loads
loadContent('index.html');