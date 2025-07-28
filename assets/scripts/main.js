// Quiz Script
let dataUrl = 'med_term_quiz_data.json';
if (window.location.pathname.includes('dosagequiz')) {
  dataUrl = 'dosage_quiz.json';
}

fetch(dataUrl)
  .then(res => res.json())
  .then(questions => {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    questions.forEach((q, index) => {
      const card = document.createElement("div");
      card.className = "quiz-card";

      const questionText = document.createElement("p");
      questionText.textContent = `Question ${index + 1}: ${q.prompt}`;
      card.appendChild(questionText);

      const input = document.createElement("input");
      input.type = "text";
      input.placeholder = "Your answer...";
      card.appendChild(input);

      const button = document.createElement("button");
      button.textContent = "Submit";
      card.appendChild(button);

      const feedback = document.createElement("p");
      card.appendChild(feedback);

      let tries = 0;

      function handleSubmission() {
        const userAnswer = input.value.trim().toLowerCase();
        const correctAnswer = q.answer.toLowerCase();
        tries++;

        if (userAnswer === correctAnswer) {
          feedback.textContent = "Correct!";
          feedback.className = "correct";
          input.disabled = true;
          button.disabled = true;
        } else if (tries >= 5) {
          feedback.innerHTML = `❌ The correct answer is: <strong>${q.answer}</strong>`;
          feedback.className = "wrong";
          input.disabled = true;
          button.disabled = true;
        } else {
          feedback.textContent = `❌ Try again (${5 - tries} tries left)`;
          feedback.className = "wrong";
        }
      }

      button.onclick = handleSubmission;

      // 🔑 Add Enter key support
      input.addEventListener("keydown", (event) => {
        if (event.key === "Enter" && !input.disabled) {
          handleSubmission();
        }
      });

      container.appendChild(card);
    });
  });

// === Navigation Handling ===
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

// Toggle menu on hamburger click
hamburger.onclick = function () {
  navLinks.classList.toggle("active");
};

// Close menu when clicking a link
const navItems = navLinks.querySelectorAll("a");
navItems.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Close menu when clicking outside
document.addEventListener("click", function (e) {
  const isInsideMenu = navLinks.contains(e.target);
  const isHamburger = hamburger.contains(e.target);
  if (!isInsideMenu && !isHamburger) {
    navLinks.classList.remove("active");
  }
});

// Show quiz section (only used on index.html)
const quizLink = document.getElementById("quiz-link");
if (quizLink && document.getElementById("quiz-section")) {
  quizLink.addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("quiz-section").style.display = "block";
    document.getElementById("quiz-section").scrollIntoView({ behavior: "smooth" });
  });
 

}
