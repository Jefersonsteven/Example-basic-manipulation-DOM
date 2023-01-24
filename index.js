const output = document.querySelector('#output');
const entry = document.querySelector('#entry');
const button = document.querySelector('#print');

function print () {
    output.textContent = entry.value;
}

button.addEventListener('click', print);


function print(event) {
    event.preventDefault();
}
