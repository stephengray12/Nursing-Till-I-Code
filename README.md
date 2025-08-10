# Nursing ’Till I Code

[![HTML](https://img.shields.io/badge/HTML-5-E34F26?logo=html5&logoColor=white)](https://developer.mozilla.org/docs/Web/HTML)
[![CSS](https://img.shields.io/badge/CSS-3-1572B6?logo=css3&logoColor=white)](https://developer.mozilla.org/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6-F7DF1E?logo=javascript&logoColor=222)](https://developer.mozilla.org/docs/Web/JavaScript)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](#license)

A free, open-source site to help **nursing students** study with quick-reference **dosage formulas** and **interactive quizzes** (e.g., Dosage, Terminology). Built with lightweight **HTML/CSS/JS** so it’s fast and easy to host anywhere.  
**Live site:** https://www.nursingtillicode.org/

---

## ✨ Features

- **Dosage formulas** reference (solid/liquid calculations, conversions, abbreviations, routes) for quick look-ups  
- **Quizzes** for practice (e.g., Dosage, Terminology) loaded from simple JSON files  
- **No framework** — just open `index.html` or serve the folder from any static host  
- **Mobile-friendly** layout and straightforward navigation (Home, About, Contact, Blog, Dosage, Quizzes)

---

## 🧰 Tech Stack

- **Frontend:** HTML, CSS, JavaScript (vanilla)  
- **Data:** JSON files for quizzes (e.g., `dosage_quiz.json`, `med_term_quiz_data.json`)  
- **Hosting:** Any static host (Vercel, Netlify, GitHub Pages, etc.)

---

## 🚀 Quick Start

```bash
git clone https://github.com/stephengray12/Nursing-Till-I-Code.git
cd Nursing-Till-I-Code

# Option A: open directly (for quick view)
# double-click index.html

# Option B: run a tiny static server (recommended for fetch/JSON)
npx serve .
# or
python3 -m http.server 3000
Visit the printed URL (e.g., http://localhost:3000).

📁 Project Structure
text
Copy
Edit
.
├── index.html                # Home
├── dosage.html               # Dosage formulas reference
├── dosagequiz.html           # Dosage quiz UI
├── about.html
├── blog.html
├── contact.html
├── dosage_quiz.json          # Quiz data: dosage
├── med_term_quiz_data.json   # Quiz data: terminology
├── assets/                   # images, styles, scripts
└── LICENSE
🧪 Add or Edit a Quiz
Duplicate an existing quiz JSON (e.g., dosage_quiz.json).

Edit questions/answers in the new file (keep the same JSON shape).

Wire it from a quiz page (e.g., add a new *.html or reuse dosagequiz.html and point the fetch to your file).

Tip: version your sets (dosage_quiz_v2.json) so changes are easy to track.

🖼️ Screenshots (optional)
Add images to assets/screens/ and embed in this README:

markdown
Copy
Edit
![Home](assets/screens/home.png)
![Dosage Formulas](assets/screens/dosage.png)
![Dosage Quiz](assets/screens/dosage-quiz.png)
♿ Accessibility & Performance
Semantic HTML for screen readers

Minimal JS → fast on slow networks

Responsive from mobile to desktop

🌐 Deploy
Vercel/Netlify: drag-and-drop or connect the repo

GitHub Pages: enable Pages on main (root)

Any static host works — no server code required

🗺️ Roadmap
 More quiz sets (pharmacology, med-surg basics)

 Brief rationales/explanations for answers

 Print-friendly PDF of formulas

 Dark mode toggle

 Multi-language support

🤝 Contributing
Contributions welcome!

Open an issue for features/corrections

Submit a PR (typos, new Q/A, formula fixes)

Keep clinical content accurate; cite a source if adding definitions

📄 License
MIT — see LICENSE.

