
async function getNews() {
    const url = "https://newsapi.org/v2/everything?q=world-politics&apiKey=61a764131e59435a972a2a94a962ee85"
    try {
        const response = await fetch (url);

   if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }

        const items =await response.json();
        const articles = items.articles.slice(0,3);
        const newsContainer = document.querySelector (".news-container");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("article");
            newsItemDiv.innerHTML=`
            <img class=image src="${article.urlToImage}" alt="">
                <h1>${ article.title}</h1>
                <p> ${article.description}</p>
            `;
            newsContainer.appendChild(newsItemDiv);
        });




    }catch (error) {
        console.error (`Error:${error}`);
    }
    
    
}

//fetch the latest news
async function getLatestNews() {
    const url = "https://newsapi.org/v2/everything?q=apple&from=2025-02-24&to=2025-02-24&sortBy=popularity&apiKey=61a764131e59435a972a2a94a962ee85"
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }
        const latestArticles = document.querySelector



    }catch (error) {
        console.error (`Error:${error}`);
    }
    
}
document.addEventListener("DOMContentLoaded",getNews());




    
    
    
