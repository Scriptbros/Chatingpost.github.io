document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var postContent = document.getElementById('postContent').value;
    var postList = document.getElementById('postList');

    var postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <p>${postContent}</p>
        <button onclick="agree(this)">Agree</button>
        <button onclick="disagree(this)">Disagree</button>
    `;

    postList.appendChild(postElement);
});

function agree(element) {
    element.previousSibling.innerHTML = 'Agreed!';
}

function disagree(element) {
    element.previousSibling.innerHTML = 'Disagreed!';
}


document.getElementById('postForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var postContent = document.getElementById('postContent').value;
    var postList = document.getElementById('postList');

    var postElement = document.createElement('div');
    postElement.classList.add('post');
    postElement.innerHTML = `
        <p>${postContent}</p>
        <button class="agree" onclick="agree(this)">Agree</button>
        <button class="disagree" onclick="disagree(this)">Disagree</button>
        <div class="counter">Agreed: <span>0</span></div>
    `;

    postList.appendChild(postElement);
});

function agree(element) {
    var counter = element.nextSibling.nextSibling.querySelector('span');
    var count = parseInt(counter.textContent, 10);
    counter.textContent = count + 1;
}

function disagree(element) {
    var counter = element.nextSibling.querySelector('span');
    var count = parseInt(counter.textContent, 10);
    counter.textContent = count + 1;
                                                     }
