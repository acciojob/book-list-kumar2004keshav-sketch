//your JS code here. If required.
// Functionality to add and remove books
document.getElementById('book-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Input values capture karna
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Table body target karna
    const list = document.getElementById('book-list');

    // Nayi row create karna
    const row = document.createElement('tr');

    // Row mein data aur delete button insert karna
    row.innerHTML = `
        <td>${title}</td>
        <td>${author}</td>
        <td>${isbn}</td>
        <td><button class="delete">Clear</button></td>
    `;

    // Row ko table body mein add karna
    list.appendChild(row);

    // Form clear karna
    document.getElementById('book-form').reset();
});

// Event Delegation for Delete (Clear) Button
document.getElementById('book-list').addEventListener('click', function(e) {
    if (e.target.classList.contains('delete')) {
        // Button ki parent row (tr) ko remove karna
        e.target.parentElement.parentElement.remove();
    }
});

