// contact.js

// Initialize EmailJS
(function () {
  emailjs.init("kw9smRjPqDuFpcX-1"); // Replace with your EmailJS public key
})();

// Form submission handler
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      emailjs.sendForm("service_m9xog97", "template_nj0foam", this)
        .then(() => {
          alert("Message sent successfully!");
          form.reset();
        }, (error) => {
          alert("Error sending message.");
          console.error("EmailJS Error:", error);
        });
    });
  }
});
