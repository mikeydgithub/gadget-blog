// login handler
async function loginFormHandler(event) {
  event.preventDefault();

  // trim removes the whitespace from both ends of a string. (' hello world ') before trim and ('hello world') after trim.
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });
    // check the response status
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
}
  
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);