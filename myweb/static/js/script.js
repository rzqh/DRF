document.addEventListener('DOMContentLoaded', function () {
    fetchItems();
})

function fetchItems() {
    const token = localStorage.getItem('accessToken')

    
    fetch('http://127.0.0.1:8000/apia/item/', {
        headers: {
         'Authorization': `Bearer ${token}`
        }
    })
        .then(response => response.json())
        .then(data => displayItems(data))
        .catch(error => console.error('Error: '. error))
}

function displayItems (items) {
    const itemsContainer = document.getElementById('items')
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML = `
            <div class="card mb-4">                
                <h5 class="card-title"> ${item.name}</h5>
                <p class="card-text">${item.description}</p>                
                <button class="btn btn-primary update-btn" data-id="${item.id}"><i class="fas fa-edit"></i> Update </button>
            </div>
        `
        itemsContainer.appendChild(itemElement);
    });
}