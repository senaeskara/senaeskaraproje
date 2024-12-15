// Fetch latest news about women in STEM
document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.getElementById("news-container");

    // Example: Fetch from a public API or manually add news
    fetch("https://newsapi.org/v2/everything?q=women+in+STEM&apiKey=YOUR_API_KEY")
        .then(response => response.json())
        .then(data => {
            data.articles.slice(0, 5).forEach(article => {
                const newsItem = document.createElement("div");
                newsItem.className = "news-item";
                newsItem.innerHTML = `
                    <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
                    <p>${article.description}</p>
                `;
                newsContainer.appendChild(newsItem);
            });
        })
        .catch(error => {
            console.error("Error fetching news:", error);
            newsContainer.innerHTML = "<p>Failed to load news.</p>";
        });
});
