document.getElementById('emailForm').addEventListener('submit', async function(e) {
  e.preventDefault(); // Prevent the default form submission

  const emailInput = document.getElementById('email');
  const email = emailInput.value;
  const responseMessage = document.getElementById('responseMessage');

  // Simple email validation regex pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Clear any previous messages
  responseMessage.textContent = '';

  // Check if the email field is empty
  if (!email) {
    responseMessage.textContent = 'Email field cannot be empty.';
    responseMessage.style.color = 'red';
    return;
  }

  // Check if the email is in a valid format
  if (!emailPattern.test(email)) {
    responseMessage.textContent = 'Please enter a valid email address.';
    responseMessage.style.color = '#e3b307';
    return;
  }

  // Proceed to submit if validation passes
  try {
    const response = await fetch('https://hook.eu2.make.com/sj5v6qpoesiv5s6oe2bc51hinubnmp1c', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email }) // Send email as JSON
    });

    if (response.ok) {
      responseMessage.textContent = 'Email submitted successfully!';
      responseMessage.style.color = '#e3b307';
      emailInput.value = ''; // Clear input
    } else {
      responseMessage.textContent = 'Failed to submit email. Please try again.';
      responseMessage.style.color = 'red';
    }
  } catch (error) {
    console.error('Error:', error);
    responseMessage.textContent = 'An error occurred. Please try again later.';
    responseMessage.style.color = 'red';
  }
});
