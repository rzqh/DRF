document.addEventListener('DOMContentLoaded', function(){
    fetchItems();
});

function fetchItems(){
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNTM3OTAyLCJpYXQiOjE3MDI1Mzc2MDIsImp0aSI6ImM5MjM2ZGY0M2Y4MzRhN2ZiOGVhNDEzZmY4YTVhMzg1IiwidXNlcl9pZCI6MX0.nvpq1M1Ufcri3I03fSJF7Or8vzh9rGhrwfwPsyvv8tY'
    //const token  = localStorage.getItem('accessToken');
    fetch('http://127.0.0.1:8000/apia/item/',
        {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        }
    ) // Ganti dengan URL API anda
        .then(response => response.json()) // convert response to json
        .then(data => displayItems(data)) // display items
        .catch(error => console.error('Error:', error)); // handle errors
}


function displayItems(items){
    const itemsContainer = document.getElementById('items');
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML = `
            <div class="card mb-4">
                <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <p class="card-text">${item.description}</p>                    
                </div>
            </div>
        `;
        itemsContainer.appendChild(itemElement);
    });
}