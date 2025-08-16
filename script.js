document.addEventListener('DOMContentLoaded', () => {
    console.log("News website loaded!");

    // Function to fetch news from a mock API
    async function fetchNews() {
        // Here you would replace this with a real News API URL
        // Example: https://newsapi.org/v2/top-headlines?country=in&apiKey=YOUR_API_KEY
        const mockApiData = {
            featured: {
                title: "New Technology: Artificial Intelligence in Mobile Phones",
                image: "https://via.placeholder.com/600x300",
                summary: "Artificial Intelligence (AI) technology is now being integrated into mobile phones, enhancing the user experience.",
                date: "2024-08-14"
            },
            recent: [
                {
                    title: "Free Education Schemes: New Announcement by Tamil Nadu Government",
                    image: "https://via.placeholder.com/300x150",
                    summary: "The Tamil Nadu government has introduced new schemes to provide free education to students.",
                    date: "2024-08-14"
                },
                {
                    title: "Sports: Indian Team Wins World Cup",
                    image: "https://via.placeholder.com/300x150",
                    summary: "The Indian team achieved a brilliant victory in the Cricket World Cup final match.",
                    date: "2024-08-14"
                },
                {
                    title: "Health: New Variants of the Corona Vaccine",
                    image: "https://via.placeholder.com/300x150",
                    summary: "New vaccines have been discovered to fight against the new variants of the Corona virus.",
                    date: "2024-08-13"
                },
                {
                    title: "Economy: Stock Market Rises",
                    image: "https://via.placeholder.com/300x150",
                    summary: "The Indian stock market saw a significant rise last week.",
                    date: "2024-08-13"
                }
            ]
        };
        return mockApiData;
    }

    // Function to update the HTML with news data
    async function updateNews() {
        const newsData = await fetchNews();

        // Update Featured News
        const featuredArticle = document.querySelector('.featured-news .news-item');
        if (featuredArticle) {
            featuredArticle.querySelector('img').src = newsData.featured.image;
            featuredArticle.querySelector('h3 a').textContent = newsData.featured.title;
            featuredArticle.querySelector('.publish-date').textContent = `Published Date: ${newsData.featured.date}`;
            featuredArticle.querySelector('.summary').textContent = newsData.featured.summary;
        }

        // Update Recent News Grid
        const recentNewsGrid = document.querySelector('.news-grid');
        if (recentNewsGrid) {
            recentNewsGrid.innerHTML = ''; // Clear existing articles
            newsData.recent.forEach(article => {
                const articleHTML = `
                    <article class="news-item">
                        <img src="${article.image}" alt="${article.title}">
                        <h3><a href="#">${article.title}</a></h3>
                        <p class="publish-date">Published Date: ${article.date}</p>
                        <p class="summary">${article.summary}</p>
                        <a href="#" class="read-more">Read More</a>
                    </article>
                `;
                recentNewsGrid.insertAdjacentHTML('beforeend', articleHTML);
            });
        }
    }

    updateNews();
});