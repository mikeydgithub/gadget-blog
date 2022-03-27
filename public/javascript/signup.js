// signup handler
async function signupFormHandler(event) {
    event.preventDefault();
  
    const username = document.querySelector('#username-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
  
    if (username && email && password) {
        const response = await fetch('/api/users', {
        method: 'post',
        body: JSON.stringify({
            username,
            email,
            password
        }),
        headers: { 'Content-Type': 'application/json' }
        });
  
        if (response.ok) {
        // replace() method removes the page from the session history and navigates to the given URL
        // redirect users to the dashboard after successful login
        document.location.replace('/dashboard');
        } else {
        alert(response.statusText);
        }
    }
}
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);