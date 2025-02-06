// Smooth Scrolling for Navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dark Mode Toggle
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    darkModeToggle.textContent = document.body.classList.contains('dark-mode') ? "☀️ Light Mode" : "🌙 Dark Mode";
});

// Contact Form Validation & Submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value.trim();
    let email = document.getElementById('email').value.trim();
    let message = document.getElementById('message').value.trim();
    let status = document.getElementById('form-status');

    if (name === "" || email === "" || message === "") {
        status.style.color = "red";
        status.textContent = "⚠️ Please fill out all fields!";
        return;
    }

    // Simulate form submission (Replace with actual backend integration)
    status.style.color = "green";
    status.textContent = "✅ Message Sent Successfully!";
    document.getElementById('contact-form').reset();
});
