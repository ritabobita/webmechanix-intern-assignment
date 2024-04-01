let submit = document.getElementById('submit');
let message = document.getElementById('submit-message');
let inputs = document.getElementsByTagName('input');

function revealMessage() {
    message.style.display = 'block';
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = '';
    }
}

submit.addEventListener('click', revealMessage);