// import dotenv from "dotenv";
// dotenv.config();
// const apiKey = process.env.API-KEY ;



//fetch the latest news
async function getLatestNews() {
    const url = "https://newsapi.org/v2/everything?q=world&from=2025-02-24&to=2025-02-24&sortBy=popularity&apiKey=61a764131e59435a972a2a94a962ee85"
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }
        const latestNews =await response.json();
        const articles = latestNews.articles.slice(0,24);
        const newsContainer = document.querySelector (".latest-container");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("new-article");
            newsItemDiv.innerHTML=`
            <img  src="${article.urlToImage}" alt="">
                <h1> <a href= ${article.url}></a> ${ article.title} </h1>
                <p> ${article.description}</p>
               <button><a href="${article.url}"> Readmore</a> </button>
                 
                
            `;
            newsContainer.appendChild(newsItemDiv);
        });




    }catch (error) {
        console.error (`Error:${error}`);
    }
    
}



    

async function getPoliticalNews()  {
    const url = "https://newsapi.org/v2/everything?q=politics&from=2025-02-24&to=2025-02-24&apiKey=61a764131e59435a972a2a94a962ee85"
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }
        const politicalNews =await response.json();
        const articles = politicalNews.articles.slice(0,24);
        const newsContainer = document.querySelector (".political-news");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("new-article");
            newsItemDiv.innerHTML=`
            <img  src="${article.urlToImage}" alt="">
                <h1>${ article.title}</h1>
                <p> ${article.description}</p>
                <button><a href="${article.url}"> Readmore</a> </button>
            `;
            newsContainer.appendChild(newsItemDiv);
        });




    }catch (error) {
        console.error(`Error:${error}`);
    }
    
}

async function getBusinessNews() {
    const url = "https://newsapi.org/v2/everything?q=business&from=2025-02-24&to=2025-02-24&apiKey=f571d9586dc04a9eb5e13a7d41843a98"
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }
        const businessNews =await response.json();
        const articles = businessNews.articles.slice(0,24);
        const newsContainer = document.querySelector (".business-news");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("new-article");
            newsItemDiv.innerHTML=`
            <img  src="${article.urlToImage}" alt="">
                <h1>${ article.title}</h1>
                <p> ${article.description}</p>
                <button><a href="${article.url}"> Readmore</a> </button>
            `;
            newsContainer.appendChild(newsItemDiv);
        });




    }catch (error) {
        console.error (`Error:${error}`);
    }
    
}
async function getTechNews()  {
    const url = "https://newsapi.org/v2/everything?q=technology&from=2025-02-24&to=2025-02-24&apiKey=f571d9586dc04a9eb5e13a7d41843a98"
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }
        const lifestyleNews =await response.json();
        const articles = lifestyleNews.articles.slice(0,24);
        const newsContainer = document.querySelector (".technology-news");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("new-article");
            newsItemDiv.innerHTML=`
            <img  src="${article.urlToImage}" alt="">
                <h1>${ article.title}</h1>
                <p> ${article.description}</p>
                <button><a href="${article.url}"> Readmore</a> </button>
            `;
            newsContainer.appendChild(newsItemDiv);
        });




    }catch (error) {
        console.error (`Error:${error}`);
    }
    
}

async function getSportsNews()  {
    const url = "https://newsapi.org/v2/everything?q=sports&from=2025-02-24&to=2025-02-24&apiKey=f571d9586dc04a9eb5e13a7d41843a98"
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }
        const sportsNews =await response.json();
        const articles = sportsNews.articles.slice(0,24);
        const newsContainer = document.querySelector (".sports-news");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("new-article");
            newsItemDiv.innerHTML=`
            <img  src="${article.urlToImage}" alt="">
                <h1>${ article.title}</h1>
                <p> ${article.description}</p>
                <button><a href="${article.url}"> Readmore</a> </button>
            `;
            newsContainer.appendChild(newsItemDiv);
        });




    }catch (error) {
        console.error (`Error:${error}`);
    }
    
}
async function getEntNews()  {
    const url = "https://newsapi.org/v2/everything?q=sports&from=2025-02-24&to=2025-02-24&apiKey=f571d9586dc04a9eb5e13a7d41843a98"
    try{
        const response = await fetch(url);
        if (!response.ok) {
            console.error("Failed to fetch items!")
            return;
        }
        const entNews =await response.json();
        const articles = entNews.articles.slice(0,24);
        const newsContainer = document.querySelector (".ent-news");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("new-article");
            newsItemDiv.innerHTML=`
            <img  src="${article.urlToImage}" alt="">
                <h1>${ article.title}</h1>
                <p> ${article.description}</p>
                <button><a href="${article.url}"> Readmore</a> </button>
            `;
            newsContainer.appendChild(newsItemDiv);
        });




    }catch (error) {
        console.error (`Error:${error}`);
    }
    
}

        
    
function showNav() {
    const navElements = document.querySelector(".nav-elements");
    if (navElements.style.display === "block") {
        navElements.style.display = "none";
    }else {
        navElements.style.display = "block";
    }
} 
        
    
    
        
    
    
        
    

document.addEventListener("DOMContentLoaded",getLatestNews());
document.addEventListener("DOMContentLoaded",getPoliticalNews());
document.addEventListener("DOMContentLoaded",getBusinessNews());
document.addEventListener("DOMContentLoaded",getTechNews());
document.addEventListener("DOMContentLoaded",getSportsNews());
document.addEventListener("DOMContentLoaded",getEntNews());