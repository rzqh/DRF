document.addEventListener('DOMContentLoaded', function(){
    fetchItems();
});

function fetchItems(){
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzAyNTQxMTYwLCJpYXQiOjE3MDI1NDA4NjAsImp0aSI6IjE3MDc5MThlOGQ3MTQzMjRhZGE0M2JjMzViZWQzNDFhIiwidXNlcl9pZCI6MX0.yWxts0th2n2p4rEehmsDIpnYnwiR6NdpvfFZ42HLnYA'
    const token  = localStorage.getItem('accessToken');
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