const dataUrl = 'med_term_quiz_data.json'; // You must host this file in the same folder
fetch(dataUrl)
  .then(res => res.json())
  .then(questions => {
    const container = document.getElementById("quiz-container");
    container.innerHTML = "";
    questions.forEach((q, index) => {
      const card = document.createElement("div");
      card.className = "quiz-card";

      const questionText = document.createElement("p");
      questionText.textContent = `Q${index + 1}: ${q.prompt}`;
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
      button.onclick = () => {
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
      };
      container.appendChild(card);
    });
  });