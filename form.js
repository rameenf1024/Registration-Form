document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const usernameInput = document.querySelector('#username');
    const emailInput = document.querySelector('#email');
    const phoneInput = document.querySelector('#phone');
    const passwordInput = document.querySelector('#password');
    const confirmPasswordInput = document.querySelector('#confirmPassword');
    const messageContainer = document.querySelector('.message-container');

    form.addEventListener('submit', (e) => {
        // Clear any previous messages
        messageContainer.innerHTML = '';

        const username = usernameInput.value.trim();
        const email = emailInput.value.trim();
        const phone = phoneInput.value.trim();
        const password = passwordInput.value.trim();
        const confirmPassword = confirmPasswordInput.value.trim();

        // Basic validation
        if (!username || !email || !phone || !password || !confirmPassword) 
            {
            e.preventDefault();
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error');
            errorMessage.textContent = 'Please fill in all fields.';
            messageContainer.appendChild(errorMessage);
        } 
        else if (password !== confirmPassword) {
            e.preventDefault();
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error');
            errorMessage.textContent = 'Passwords do not match.';
            messageContainer.appendChild(errorMessage);
        } 
        else {
            // for success message 
            const successMessage = document.createElement('div');
            successMessage.classList.add('success');
            successMessage.textContent = 'Registration successful!';
            messageContainer.appendChild(successMessage);
        }
    });
});
