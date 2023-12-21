document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password-field').value;
    const messageDiv = document.getElementById('message');

    fetch('http://localhost:8000/api/token/', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({username, password})
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Login Failed')
        }

        return response.json();
    })
    .then(data => {
        if (data.access) {
            localStorage.setItem('accessToken', data.access);
            messageDiv.textContent = 'Login Successfull!';
            messageDiv.style.color = 'green';

            window.location.href = './index.html'
        }
    })
    .catch(error => {
        console.error('Error : ', error);
        messageDiv.textContent = 'Login failed: Invalid username or password';
        messageDiv.style.color = 'red';
    });
})