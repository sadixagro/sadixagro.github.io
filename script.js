// Sadix Agro Website
// Smooth scrolling for navigation links

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form message
function sendEnquiry() {
    alert("Thank you for your enquiry! Sadix Agro will contact you within 24 hours.");
}
