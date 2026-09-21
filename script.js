// Project Filter Logic
function filterProjects(category) {
    // Select all project cards
    const cards = document.querySelectorAll('.project-card');
    // Select all filter buttons
    const buttons = document.querySelectorAll('.filter-btn');

    // Update active class on buttons
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    // Show/Hide cards with animation
    cards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            // Show card
            card.style.display = 'flex';
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 50);
        } else {
            // Hide card
            card.style.opacity = '0';
            card.style.transform = 'translateY(10px)';
            setTimeout(() => {
                card.style.display = 'none';
            }, 300);
        }
    });
}

// Contact Form Submit Handling
function handleFormSubmit(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const statusDiv = document.getElementById('form-status');
    const submitBtn = event.target.querySelector('button[type="submit"]');

    // Simple visual feedback
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;

    setTimeout(() => {
        // Reset button and clear form
        submitBtn.textContent = 'Send Message';
        submitBtn.disabled = false;
        event.target.reset();

        // Show success status
        statusDiv.className = 'form-status success';
        statusDiv.textContent = `Thank you, ${name}! Your message has been sent successfully.`;

        // Clear status after 5 seconds
        setTimeout(() => {
            statusDiv.textContent = '';
            statusDiv.className = 'form-status';
        }, 5000);
    }, 1200);
}

// Initialize styles on load for animation smoothness
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach(card => {
        card.style.transition = 'opacity 0.3s ease, transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
    });
});
