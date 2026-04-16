const quiz = [
  {
    question: "① シンヤコヅカで買ったプレゼントは何色？",
    image: "images/q1.jpeg",
    choices: ["白", "グレー", "黒"],
    answer: 0
  },
  {
    question: "② 目玉プレゼントは？",
    image: "images/q2.jpeg",
    choices: ["ネックレス", "財布", "リング"],
    answer: 2
  },
  {
    question: "③ 世界に一つだけのプレゼントは？",
    image: "images/q4.jpeg",
    choices: ["お菓子", "リング", "アルバム"],
    answer: 0
  },
  {
    question: "④ 使ってほしいシーンは？",
    image: "images/q3.jpeg",
    choices: ["名刺交換時", "出張時", "デート"],
    answer: 1
  },
  {
    question: "⑤ 今日の主役は？",
    image: "images/q5.jpeg",
    choices: ["ゆくん", "なゆ", "やまと"],
    answer: 0
  }
];

let current = 0;

/* 初期表示 */
function loadQuiz() {
  const q = quiz[current];

  document.getElementById("quizBox").style.display = "block";
  document.getElementById("resultOverlay").classList.add("hidden");

  document.getElementById("question").textContent = q.question;
  document.getElementById("quizImage").src = q.image;
  document.getElementById("progress").textContent = `${current + 1} / 5`;

  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  q.choices.forEach((c, i) => {
    const btn = document.createElement("button");
    btn.textContent = c;
    btn.onclick = () => checkAnswer(i);
    choices.appendChild(btn);
  });
}

/* ○×アニメ */
function showMark(type, callback) {
  const feedback = document.getElementById("feedback");
  const mark = document.getElementById("mark");

  feedback.classList.remove("hidden");
  mark.textContent = type;
  mark.className = (type === "○") ? "correct" : "wrong";

  setTimeout(() => {
    feedback.classList.add("hidden");
    callback();
  }, 800);
}

/* 回答 */
function checkAnswer(index) {
  const isCorrect = index === quiz[current].answer;

  showMark(isCorrect ? "○" : "×", () => {
    showResult(isCorrect);

    if (isCorrect) {
      setTimeout(() => {
        fireConfetti();
      }, 200);
    }
  });
}

/* 結果表示 */
function showResult(isCorrect) {
  const overlay = document.getElementById("resultOverlay");
  const mark = document.getElementById("resultMark");
  const buttons = document.getElementById("resultButtons");
  const img = document.getElementById("resultImage");

  overlay.classList.remove("hidden");

  buttons.innerHTML = "";

  if (isCorrect) {
    img.src = "images/wrong.jpeg";
    mark.textContent = "🎉 正解！";

    if (current === quiz.length - 1) {
      const btn = document.createElement("button");
      btn.textContent = "トップへ戻る";
      btn.onclick = () => location.href = "home.html";
      buttons.appendChild(btn);
    } else {
      const btn = document.createElement("button");
      btn.textContent = "次へ→";
      btn.onclick = nextQuestion;
      buttons.appendChild(btn);
    }

  } else {
    img.src = "images/correct.jpeg";
    mark.textContent = "不正解";

    const btn = document.createElement("button");
    btn.textContent = "もう一回";
    btn.onclick = retryQuiz;
    buttons.appendChild(btn);
  }
}

function fireConfetti() {
  const canvas = document.createElement("canvas");
  canvas.className = "confetti-canvas";

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  document.body.appendChild(canvas);

  const myConfetti = confetti.create(canvas, {
    resize: true,
    useWorker: true
  });

  myConfetti({
    particleCount: 150,
    spread: 80,
    origin: { y: 0.6 }
  });

  setTimeout(() => {
    canvas.remove();
  }, 2000);
}

/* 次へ */
function nextQuestion() {
  current++;
  loadQuiz();
}

/* リトライ */
function retryQuiz() {
  loadQuiz();
}

loadQuiz();