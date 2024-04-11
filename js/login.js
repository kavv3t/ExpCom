const form = document.getElementById('login-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = form.username.value;
    const password = form.password.value;

    if (username === 'admin' && password === 'admin') {
        window.location.href = 'admin.html';

    } else {
        alert('Nom d\'utilisateur ou mot de passe incorrect.');
        window.location.href = 'index.html';

    }
});