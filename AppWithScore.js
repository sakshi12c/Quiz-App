const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        correct: 2
    },
    {
        question: "Which planet is closest to the Sun?",
        options: ["Venus", "Mercury", "Earth", "Mars"],
        correct: 1
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        correct: 1
    },
    {
        question: "Who wrote Romeo and Juliet?",
        options: ["Jane Austen", "William Shakespeare", "Charles Dickens", "Mark Twain"],
        correct: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correct: 3
    },
    {
        question: "Which country has the most population?",
        options: ["USA", "India", "China", "Indonesia"],
        correct: 1
    },
    {
        question: "What is the chemical symbol for Gold?",
        options: ["Go", "Gd", "Au", "Ag"],
        correct: 2
    },
    {
        question: "In which year did World War II end?",
        options: ["1943", "1944", "1945", "1946"],
        correct: 2
    },
    {
        question: "What is the smallest prime number?",
        options: ["0", "1", "2", "3"],
        correct: 2
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        correct: 1
    }
];

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let selectedAnswer = null;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const totalQuestions = document.getElementById('total-questions');
const progressFill = document.getElementById('progress-fill');

totalQuestions.textContent = quizData.length;

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

function startQuiz() {
    startScreen.classList.remove('active');
    quizScreen.classList.add('active');
    loadQuestion();
}

function loadQuestion() {
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;
    questionNumber.textContent = currentQuestion + 1;
    
    const progressPercentage = ((currentQuestion) / quizData.length) * 100;
    progressFill.style.width = progressPercentage + '%';

    optionsContainer.innerHTML = '';
    selectedAnswer = null;
    nextBtn.disabled = true;

    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option';
        optionDiv.textContent = option;
        optionDiv.addEventListener('click', () => selectOption(index, optionDiv));
        optionsContainer.appendChild(optionDiv);
    });
}

function selectOption(index, element) {
    if (selectedAnswer === null) {
        selectedAnswer = index;
        element.classList.add('selected');
        nextBtn.disabled = false;
        
        const allOptions = document.querySelectorAll('.option');
        allOptions.forEach(opt => opt.style.pointerEvents = 'none');
    }
}

function nextQuestion() {
    const question = quizData[currentQuestion];
    userAnswers.push({
        question: question.question,
        selected: question.options[selectedAnswer],
        correct: question.options[question.correct],
        isCorrect: selectedAnswer === question.correct
    });

    if (selectedAnswer === question.correct) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');

    const finalScore = document.getElementById('final-score');
    const totalScore = document.getElementById('total-score');
    const scoreMessage = document.getElementById('score-message');
    const answersReview = document.getElementById('answers-review');

    finalScore.textContent = score;
    totalScore.textContent = quizData.length;

    const percentage = (score / quizData.length) * 100;
    if (percentage === 100) {
        scoreMessage.textContent = 'Perfect score! Outstanding!';
    } else if (percentage >= 80) {
        scoreMessage.textContent = 'Excellent! You did great!';
    } else if (percentage >= 60) {
        scoreMessage.textContent = 'Good job! Keep practicing!';
    } else if (percentage >= 40) {
        scoreMessage.textContent = 'Not bad! Try again to improve!';
    } else {
        scoreMessage.textContent = 'Keep learning! Try again!';
    }

    answersReview.innerHTML = '';
    userAnswers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.className = `answer-item ${answer.isCorrect ? 'correct' : 'incorrect'}`;
        answerDiv.innerHTML = `
            <div class="answer-item-question">Q${index + 1}: ${answer.question}</div>
            <div class="answer-item-text">Your answer: ${answer.selected}</div>
            ${!answer.isCorrect ? `<div class="answer-item-text">Correct answer: ${answer.correct}</div>` : ''}
        `;
        answersReview.appendChild(answerDiv);
    });
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    userAnswers = [];
    selectedAnswer = null;
    resultScreen.classList.remove('active');
    startScreen.classList.add('active');
}