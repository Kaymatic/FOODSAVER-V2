// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
    });
});

// Smooth scroll to form and location
function scrollToForm() {
    document.getElementById("get-started").scrollIntoView({ behavior: "smooth" });
}

function scrollToLocation() {
    document.getElementById("newsfeeds-locations").scrollIntoView({ behavior: "smooth" });
}

// Toggle forms for donation and volunteering
function showForm(type) {
    const donateForm = document.getElementById("donate-form");
    const volunteerForm = document.getElementById("volunteer-form");

    if (type === 'donate') {
        donateForm.style.display = 'block';
        volunteerForm.style.display = 'none';
    } else {
        donateForm.style.display = 'none';
        volunteerForm.style.display = 'block';
    }
}

// Form submission and success message display
document.getElementById("newsfeed-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("newsfeed-success").style.display = "block";
    setTimeout(() => {
        document.getElementById("newsfeed-success").style.display = "none";
    }, 3000);
});

document.getElementById("donate-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("donation-success").style.display = "block";
    setTimeout(() => {
        document.getElementById("donation-success").style.display = "none";
    }, 3000);
});

document.getElementById("volunteer-form").addEventListener("submit", function(e) {
    e.preventDefault();
    document.getElementById("volunteer-success").style.display = "block";
    setTimeout(() => {
        document.getElementById("volunteer-success").style.display = "none";
    }, 3000);
});
async function submitForm(endpoint, formData) {
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        document.getElementById('success-message').style.display = 'block';
      } else {
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }
  