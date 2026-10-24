const questions = [
  { q: "What's the capital of France?", answers: ["Berlin", "Paris", "Rome"], correct: 1 },
  { q: "Which planet is the largest?", answers: ["Earth", "Mars", "Jupiter"], correct: 2 }
];

let current = 0, score = 0;

function getBest() {
  return parseInt(localStorage.getItem("quizBest") || 0, 10);
}

function saveScore() {
  if (score > getBest()) localStorage.setItem("quizBest", score);
}

function showQuestion() {
  const quiz = document.getElementById("quiz");
  if (current >= questions.length) {
    saveScore();
    const best = getBest();
    const isNew = score === best && score > 0 ? " 🎉 New best!" : "";
    quiz.innerHTML = `<h2>Done! Score: ${score}/${questions.length}</h2>
                      <p>Best score: ${best}/${questions.length}${isNew}</p>`;
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
