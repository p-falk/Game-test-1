const questions = [
  { q: "What's the capital of France?", answers: ["Berlin", "Paris", "Rome"], correct: 1 },
  { q: "Which planet is the largest?", answers: ["Earth", "Mars", "Jupiter"], correct: 2 }
];

let current = 0, score = 0;

function showQuestion() {
  const quiz = document.getElementById("quiz");
  if (current >= questions.length) {
    quiz.innerHTML = `<h2>Done! Score: ${score}/${questions.length}</h2>`;
    return;
  }
  const item = questions[current];
  quiz.innerHTML = `<p>${item.q}</p>` +
    item.answers.map((a, i) =>
      `<button onclick="answer(${i})">${a}</button>`
    ).join("");
}

function answer(i) {
  if (i === questions[current].correct) score++;
  current++;
  showQuestion();
}

document.getElementById("next").onclick = showQuestion;
showQuestion();
