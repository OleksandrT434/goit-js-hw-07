const userText = document.querySelector('#name-output');
const userEnter = document.querySelector('#name-input');



function handleUserNameInput() {
    const trimValue = userEnter.value.trim();

    if (userEnter.value.trim() !== '') {
        userText.textContent = trimValue;
    } else {
        userText.textContent = 'Anonymous';
    }
};


userEnter.addEventListener('input', handleUserNameInput);