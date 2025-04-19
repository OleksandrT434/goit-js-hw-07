const userText = document.querySelector('#name-output');
const userEnter = document.querySelector('#name-input');



function handleUserNameInput() {
    if (userEnter.value.trim() !== '') {
        userText.textContent = userEnter.value;
    } else {
        userText.textContent = 'Anonymous';
    }
};


userEnter.addEventListener('input', handleUserNameInput);