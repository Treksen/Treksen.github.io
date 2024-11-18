// JavaScript for interactivity
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from refreshing the page
  
    // Retrieve form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    // Display a thank you message
    alert(`Thank you, ${name}! Your message has been sent.`);
    
    // Optionally, clear the form
    this.reset();
  });
  
