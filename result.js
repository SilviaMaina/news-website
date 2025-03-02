let searchButton = document.getElementById("search-button");
     searchButton.addEventListener("click",
async function searchNews(event) {
    event.preventDefault();
    const query = document.querySelector('.search-input').value;
    

    
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=61a764131e59435a972a2a94a962ee85`);
    const data = await response.json();
    const articles = data.articles.slice(0,24);
        const newsContainer = document.querySelector (".search-container");
        newsContainer.innerHTML='';

        articles.forEach(article => {
            const newsItemDiv = document.createElement('div');
            newsItemDiv.classList.add("new-article");
            // console.log(article.url)
            newsItemDiv.innerHTML=`
            <img  src="${article.urlToImage}" alt="">
                <h1> <a href= ${article.url}></a> ${ article.title} </h1>
                <p> ${article.description}</p>
                <button><a href="${article.url}"> Readmore</a> </button>
                 
                
            `;
            newsContainer.appendChild(newsItemDiv);
        });




     
    
})


function showNav() {
    const navElements = document.querySelector(".nav-elements");
    if (navElements.style.display === "block") {
        navElements.style.display = "none";
    }else {
        navElements.style.display = "block";
    }
} 
//  subscribe to newsletter
// (function () {
//     emailjs.init("e3ZUBznRByF_3vBfw");
// })();
// function sendMail(event) {
//     event.preventDefault(); 
//     const templateParams = document.getElementById("enter-email");

//     emailjs.send("service_24wjlag", "template_pesxnn3", templateParams)
//         .then((response) => {
//             // Show success message using SweetAlert2
//             Swal.fire({
//                 title: 'Subscribed',
//                 text: 'Thank you for subscribing!',
//                 icon: 'success',
//             });
//             // Clear the form fields
//             document.querySelector('.email-input').reset()
//         })
//         .catch((error) => {
//             // Show error message using SweetAlert2
//             Swal.fire({
//                 title: 'Error',
//                 text: 'Failed to subscribe. Please try again later.',
//                 icon: 'error',
//             });
//             console.error('Failed to subscribe:', error);
//         });
// }

// document.getElementById('email'). addEventListener('click', sendMail);

// const menuBtn = document.querySelector('.menu-btn');



