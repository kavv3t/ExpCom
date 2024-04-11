const urlParams = new URLSearchParams(window.location.search);
const role = urlParams.get('role');

if (role !== 'admin') {
    window.location.href = 'index.html';
}