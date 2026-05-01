//your JS code here. If required
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    
    const list = document.getElementById('book-list');

    const row = document.createElement('tr');

    
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    
    list.appendChild(row);

    
    document.getElementById('book-form').reset();
});


document.getElementById('book-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
    
        e.target.parentElement.parentElement.remove();
    }
});

