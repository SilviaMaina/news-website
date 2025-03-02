
async function searchNews() {
    const query = document.querySelector('.search-input').value;
    if (!query) {
        alert('Please enter a search term');
        return;
    }
    const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=61a764131e59435a972a2a94a962ee8`);
    const data = await response.json();
    localStorage.setItem('news', JSON.stringify(data.articles));
    window.location.href = 'search.html';
}

