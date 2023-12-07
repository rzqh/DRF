document.addEventListener('DOMContentLoaded', function(){
    fetchItems();
});

function fetchItems(){
    fetch('http://127.0.0.1:8000/apia/item/') // just fetch once
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