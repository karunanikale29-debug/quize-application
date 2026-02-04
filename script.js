const quizData = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlinks Text Mark Language",
      "Home Tool Markup Language"
    ],
    answer: 0
  },
  {
    question: "Which language is used for styling web pages?",
    options: ["HTML", "JQuery", "CSS", "XML"],
    answer: 2
  },
  {
    question: "Which is used for web scripting?",
    options: ["PHP", "Python", "JavaScript", "Java"],
    answer: 2
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

const questionEl = document.getElementById("question");
const answersEl = document.getElementById("answers");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("nextBtn");
const resultEl = document.getElementById("result");
const quizEl = document.getElementById("quiz");
const scoreEl = document.getElementById("score");

loadQuestion();

function loadQuestion() {
  answered = false;
  feedbackEl.textContent = "";
  answersEl.innerHTML = "";

  const q = quizData[currentQuestion];
  questionEl.textContent = q.question;

  q.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(index, btn);
    answersEl.appendChild(btn);
  });
}

function checkAnswer(index, button) {
  if (answered) return;
  answered = true;

  const correctIndex = quizData[currentQuestion].answer;

  if (index === correctIndex) {
    button.classList.add("correct");
    feedbackEl.textContent = "Correct Answer!";
    score++;
  } else {
    button.classList.add("wrong");
    feedbackEl.textContent = "Wrong Answer!";
    answersEl.children[correctIndex].classList.add("correct");
  }
}

nextBtn.onclick = () => {
  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    quizEl.classList.add("hidden");
    resultEl.classList.remove("hidden");
    scoreEl.textContent = `${score} / ${quizData.length}`;
  }
};
