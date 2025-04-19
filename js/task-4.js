const btnText = document.querySelector('button');


btnText.textContent = btnText.textContent.replace("Login", "Log in");


const userForm = document.querySelector('.login-form');

userForm.addEventListener('submit', e => {
    e.preventDefault();
    const mail = e.target.elements.email.value.trim();
    const pass = e.target.elements.password.value.trim();
    
    if (mail === '' || pass === '') {
        alert('All form fields must be filled in');
        return;
    }

    const formData = {
    mail,
    pass
  };

    console.log(formData);
    e.target.reset();
    
})