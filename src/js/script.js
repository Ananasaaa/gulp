document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const name = document.getElementById('name').value;
      const message = document.getElementById('message').value;
  
      if (name && message) {
        alert(`Thank you, ${name}, for your message: "${message}"`);
        form.reset();
      } else {
        alert('Please fill out all fields.');
      }
    });
  });
  