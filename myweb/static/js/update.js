document.getElementById('updateItemForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const itemId = document.getElementById('updateItemId').value;
    const itemName = document.getElementById('updateItemName').value;
    const itemDescription = document.getElementById('updateItemDescription').value;

    // Pastikan semua field telah diisi
    if (!itemName || !itemDescription) {
        alert('Silahkan isi semua field');
        return;
    }

    const data = {
        name: itemName,
        description: itemDescription
    };

    const token = localStorage.getItem('accessToken');

    fetch(`http://localhost:8000/apia/item/${itemId}/`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok')
            }
            return response.json();
        })
        .then(updatedItem => {
            console.log('Item updated', updatedItem);
            $('#updateItemModal').modal('hide'); //tutup modal jika sukses        
            window.location.reload(); //update daftar item

        })
        .catch(error => {
            console.error('Error : ', error);
            alert('Terjadi kesalahan saat memperbarui item');
        });
})