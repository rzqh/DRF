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
        .catch(error => console.error('Error: '.error))
}

function displayItems(items) {
    const itemsContainer = document.getElementById('items')
    items.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('col-md-6');
        itemElement.innerHTML = `
            <div class="card mb-4">                
                <h5 class="card-title"> ${item.name}</h5>
                <p class="card-text">${item.description}</p>                
                <button class="btn btn-warning update-btn" data-id="${item.id}"><i class="fas fa-edit"></i> Update </button>
                <button class="btn btn-danger delete-btn" data-id="${item.id}"><i class="fas fa-trash"></i> Delete </button>
            </div>
        `
        itemsContainer.appendChild(itemElement);
    });

    // tambahkan event listner ke tombol update    
    document.querySelectorAll('.update-btn').forEach(button => {
        button.addEventListener('click', function () {
            openUpdateModal(this.getAttribute('data-id'));
        });
    });
}

function openUpdateModal(id) {
    // Ambil data item dari API atau dari list yang sudah ada
    const token = localStorage.getItem('accessToken');
    fetch(`http://127.0.0.1:8000/apia/item/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

        .then(response => response.json())
        .then(data => {
            // isi formulir di modal dengan data yyang ada
            document.getElementById('updateItemName').value = data.name;
            document.getElementById('updateItemDescription').value = data.description;
            document.getElementById('updateItemId').value = data.id;
            // tampilkan modal
            $('#updateItemModal').modal('show');
        })
        .catch(error => console.error('Error:', error));
}
