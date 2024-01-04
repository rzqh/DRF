document.getElementById('addItemForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const itemName = document.getElementById('additemname').value;
    const itemDescription = document.getElementById('additemdescription').value;
    const token = localStorage.getItem('accessToken');

    fetch('http://localhost:8000/apia/item/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`},
        body: JSON.stringify({name: itemName, description: itemDescription})
    })
    .then(response => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error('Something went wrong')
        }
    })
    .then(data => {
        console.log('Success', data);

        $('#addItemModal').modal('hide');
        location.reload();

    })
    .catch(error => {
        console.error('Error : ', error);
    });
})