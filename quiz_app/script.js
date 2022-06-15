// all of our questions  i.e data questions , options ,correctanswers
const quizData = [
  {
    question: "HTML stands for?",
    a: "Hyper Text Markup Languagrestarte",
    b: "Hyper Text Makeup Language",
    c: "Hyper Tail Markup Language",
    d: "Hyper Tail Meetup Language",
    correct: "a",
  },
  {
    question: "Which is most used language?",
    a: "C++",
    b: "Java",
    c: "JavaScript",
    d: "Python",
    correct: "c",
  },
  {
    question: "Which one is faster?",
    a: "JavaScript",
    b: "Java",
    c: "Python",
    d: "C++",
    correct: "d",
  },
];

var currentQuestion = 0;
let score = 0;

// dom elements
let container = document.getElementById("quiz-container");
let question = document.getElementById("question");
let a = document.getElementById("option-a");
let b = document.getElementById("option-b");
let c = document.getElementById("option-c");
let d = document.getElementById("option-d");
let submit = document.getElementById("submit");
let alloptions = document.querySelectorAll('input[name="options"]');

// load question from quiz data
const loadQuestion = () => {
  question.innerText = quizData[currentQuestion].question;
  a.innerText = quizData[currentQuestion].a;
  b.innerText = quizData[currentQuestion].b;
  c.innerText = quizData[currentQuestion].c;
  d.innerText = quizData[currentQuestion].d;
};

// cheack if a radio button is selected or not
const cheakSelected = () => {
  let selectedVal;
  for (const radio of alloptions) {
    if (radio.checked) {
      selectedVal = radio.value; // if not selected return undefined if selected return on
      break;
    }
  }
  return selectedVal;
};

// to deselect all radio elements for next question
const deSelect = () => {
  for (const radio of alloptions) {
    if (radio.checked) {
      radio.checked = undefined;
      break;
    }
  }
};

// get value of selected element
const getSelected = () => {
  let value;
  for (const radio of alloptions) {
    if (radio.checked) {
      value = radio.id; // it will return id which will be options of that questions like a,b,c,d
      break;
    }
  }
  return value;
};

// cheaking answer if id of selected radio is same as of correct option in quiz data
const cheakAnswer = () => {
  let answer = getSelected();
  if (answer == quizData[currentQuestion].correct) {
    score++;
  }
  return score;
};

// to restart quiz after all questions have been attempted
const restart = () => {
  location.reload();
};

// on click submit button new question will appper
const nextQuestion = () => {
  let selected = cheakSelected();
  if (selected && currentQuestion < quizData.length) {
    cheakAnswer();
    console.log(score);
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    }
    deSelect();
  } else console.log("Select an Option first");
  if (currentQuestion === quizData.length) {
    container.innerHTML = `<p>Great work!
    You scored ${score}/${quizData.length}<p>
    <button id="submit" onclick="restart()">Restart</button>`;
  }
};

// loading initial question
loadQuestion();
// button to submit answer and go to next question
submit.addEventListener("click", nextQuestion);
