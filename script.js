document.getElementById('emailForm').addEventListener('submit', async function(e) {
    e.preventDefault(); 
    
    const emailInput = document.getElementById('email');
    const email = emailInput.value;
  
    
    const data = {
      email: email
    };
  
    try {
      // Make the POST request to the webhook
      const response = await fetch('https://hook.eu2.make.com/sj5v6qpoesiv5s6oe2bc51hinubnmp1c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (response.ok) {
        document.getElementById('responseMessage').textContent = 'Email submitted successfully!';
        emailInput.value = ''; 
      } else {
        document.getElementById('responseMessage').textContent = 'Failed to submit email. Please try again.';
      }
    } catch (error) {
      console.error('Error:', error);
      document.getElementById('responseMessage').textContent = 'An error occurred. Please try again later.';
    }
  });
  