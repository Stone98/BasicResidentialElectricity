// Quiz Questions and Answers
const quizData = [
    {
        question: "What is the standard household voltage in the United States for most outlets?",
        answers: [
            { text: "240 volts", correct: false },
            { text: "120 volts", correct: true },
            { text: "110 volts", correct: false },
            { text: "208 volts", correct: false }
        ],
        explanation: "Standard household outlets in the US operate at 120 volts. Large appliances like dryers and ovens use 240 volts."
    },
    {
        question: "What does amperage measure in an electrical circuit?",
        answers: [
            { text: "The electrical pressure", correct: false },
            { text: "The resistance to flow", correct: false },
            { text: "The rate of electrical flow", correct: true },
            { text: "The power consumption", correct: false }
        ],
        explanation: "Amperage (or current) measures the rate at which electricity flows through a circuit, similar to water flow through a pipe."
    },
    {
        question: "What is the primary purpose of a circuit breaker?",
        answers: [
            { text: "To reduce voltage", correct: false },
            { text: "To prevent overloading and fires", correct: true },
            { text: "To increase amperage", correct: false },
            { text: "To measure power consumption", correct: false }
        ],
        explanation: "Circuit breakers automatically shut off power when too much current flows through a circuit, preventing overheating and potential fires."
    },
    {
        question: "According to Ohm's Law, if voltage increases and resistance stays the same, what happens to current?",
        answers: [
            { text: "Current decreases", correct: false },
            { text: "Current increases", correct: true },
            { text: "Current stays the same", correct: false },
            { text: "Current becomes zero", correct: false }
        ],
        explanation: "Ohm's Law (V = I × R) shows that voltage is directly proportional to current. If voltage increases and resistance stays constant, current must increase."
    },
    {
        question: "What is the function of a transformer on a utility pole?",
        answers: [
            { text: "To measure electricity usage", correct: false },
            { text: "To step down voltage for residential use", correct: true },
            { text: "To protect against power surges", correct: false },
            { text: "To store electrical energy", correct: false }
        ],
        explanation: "Transformers on utility poles step down high-voltage electricity (thousands of volts) to the 240V/120V used in homes."
    },
    {
        question: "If you run a 1,500-watt appliance for 4 hours, how many kilowatt-hours (kWh) of energy did you use?",
        answers: [
            { text: "1.5 kWh", correct: false },
            { text: "4 kWh", correct: false },
            { text: "6 kWh", correct: true },
            { text: "600 kWh", correct: false }
        ],
        explanation: "Energy (kWh) = Power (kW) × Time (hours). 1,500 watts = 1.5 kW, so 1.5 kW × 4 hours = 6 kWh."
    },
    {
        question: "Where is a GFCI (Ground Fault Circuit Interrupter) outlet required by electrical code?",
        answers: [
            { text: "In bedrooms only", correct: false },
            { text: "In bathrooms and kitchens", correct: true },
            { text: "In living rooms", correct: false },
            { text: "They are optional everywhere", correct: false }
        ],
        explanation: "GFCI outlets are required in wet locations including bathrooms, kitchens, garages, outdoors, and basements for safety."
    },
    {
        question: "What does a kilowatt (kW) measure?",
        answers: [
            { text: "Total energy consumed over time", correct: false },
            { text: "The rate of power usage at a moment", correct: true },
            { text: "Electrical resistance", correct: false },
            { text: "Voltage level", correct: false }
        ],
        explanation: "A kilowatt measures power (the rate of energy use), while kilowatt-hours (kWh) measure total energy consumed over time."
    },
    {
        question: "What is the typical amperage rating for a main circuit breaker in a modern home?",
        answers: [
            { text: "15-20 amps", correct: false },
            { text: "50-60 amps", correct: false },
            { text: "100-200 amps", correct: true },
            { text: "300-400 amps", correct: false }
        ],
        explanation: "Most modern homes have main breakers rated for 100, 150, or 200 amps, depending on the size and electrical needs of the home."
    },
    {
        question: "How quickly does a GFCI outlet shut off power when it detects a ground fault?",
        answers: [
            { text: "Within 1 second", correct: false },
            { text: "Within 1/40th of a second", correct: true },
            { text: "Within 5 seconds", correct: false },
            { text: "Within 1 minute", correct: false }
        ],
        explanation: "GFCI outlets are extremely fast, shutting off power in as little as 1/40th of a second (25 milliseconds) to prevent electrocution."
    },
    {
        question: "What is resistance measured in?",
        answers: [
            { text: "Volts", correct: false },
            { text: "Amps", correct: false },
            { text: "Ohms", correct: true },
            { text: "Watts", correct: false }
        ],
        explanation: "Resistance is measured in ohms (Ω). It represents the opposition to the flow of electric current in a circuit."
    },
    {
        question: "What voltage do electric dryers and ranges typically require?",
        answers: [
            { text: "120 volts", correct: false },
            { text: "240 volts", correct: true },
            { text: "480 volts", correct: false },
            { text: "60 volts", correct: false }
        ],
        explanation: "Large appliances like electric dryers, ranges, and ovens require 240 volts for their high power demands."
    },
    {
        question: "If your electricity costs $0.15 per kWh and you use 1,000 kWh in a month, what is your electricity cost?",
        answers: [
            { text: "$15", correct: false },
            { text: "$150", correct: true },
            { text: "$1,500", correct: false },
            { text: "$100", correct: false }
        ],
        explanation: "Cost = kWh used × rate per kWh. So 1,000 kWh × $0.15 = $150."
    },
    {
        question: "What happens to the current in a circuit breaker when it 'trips'?",
        answers: [
            { text: "It increases significantly", correct: false },
            { text: "It stops flowing", correct: true },
            { text: "It reverses direction", correct: false },
            { text: "It stays the same", correct: false }
        ],
        explanation: "When a circuit breaker trips, it opens the circuit and stops the flow of current to prevent damage and fire hazards."
    },
    {
        question: "What is the main difference between a GFCI and a regular circuit breaker?",
        answers: [
            { text: "GFCI handles higher voltages", correct: false },
            { text: "GFCI protects against ground faults and electrocution", correct: true },
            { text: "GFCI increases power efficiency", correct: false },
            { text: "GFCI reduces electricity costs", correct: false }
        ],
        explanation: "While regular breakers protect against overloads and short circuits, GFCIs specifically protect against ground faults that could cause electrocution."
    }
];

// Quiz State
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;
let questionsAnswered = 0;

// DOM Elements
const questionContainer = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const submitBtn = document.getElementById('submit-btn');
const nextBtn = document.getElementById('next-btn');
const resultElement = document.getElementById('result');
const scoreDisplay = document.getElementById('score-display');
const quizContainer = document.getElementById('quiz-container');
const finalResults = document.getElementById('final-results');
const finalScore = document.getElementById('final-score');
const performanceMessage = document.getElementById('performance-message');
const restartBtn = document.getElementById('restart-btn');

// Initialize Quiz
function initQuiz() {
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
    questionsAnswered = 0;
    
    // Hide final results, show quiz
    finalResults.style.display = 'none';
    quizContainer.style.display = 'block';
    
    // Shuffle questions for variety
    shuffleArray(quizData);
    
    loadQuestion();
}

// Shuffle array function (Fisher-Yates algorithm)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Load current question
function loadQuestion() {
    resetState();
    
    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = `Question ${currentQuestion + 1} of ${quizData.length}: ${currentQuizData.question}`;
    
    // Shuffle answers
    const shuffledAnswers = [...currentQuizData.answers];
    shuffleArray(shuffledAnswers);
    
    shuffledAnswers.forEach((answer, index) => {
        const answerDiv = document.createElement('div');
        answerDiv.classList.add('answer-option');
        answerDiv.textContent = answer.text;
        answerDiv.dataset.correct = answer.correct;
        answerDiv.dataset.index = index;
        
        answerDiv.addEventListener('click', selectAnswer);
        answersElement.appendChild(answerDiv);
    });
    
    updateScoreDisplay();
}

// Reset state for new question
function resetState() {
    selectedAnswer = null;
    submitBtn.disabled = true;
    nextBtn.style.display = 'none';
    resultElement.textContent = '';
    resultElement.className = 'result';
    answersElement.innerHTML = '';
}

// Select answer
function selectAnswer(e) {
    if (submitBtn.style.display === 'none') return; // Don't allow selection after submission
    
    // Remove previous selection
    const allAnswers = document.querySelectorAll('.answer-option');
    allAnswers.forEach(answer => answer.classList.remove('selected'));
    
    // Add selection to clicked answer
    e.target.classList.add('selected');
    selectedAnswer = e.target;
    submitBtn.disabled = false;
}

// Submit answer
function submitAnswer() {
    if (!selectedAnswer) return;
    
    questionsAnswered++;
    const isCorrect = selectedAnswer.dataset.correct === 'true';
    
    if (isCorrect) {
        score++;
        selectedAnswer.classList.add('correct');
        resultElement.textContent = '✓ Correct! ' + quizData[currentQuestion].explanation;
        resultElement.classList.add('correct');
    } else {
        selectedAnswer.classList.add('incorrect');
        // Show correct answer
        const allAnswers = document.querySelectorAll('.answer-option');
        allAnswers.forEach(answer => {
            if (answer.dataset.correct === 'true') {
                answer.classList.add('correct');
            }
        });
        resultElement.textContent = '✗ Incorrect. ' + quizData[currentQuestion].explanation;
        resultElement.classList.add('incorrect');
    }
    
    // Disable all answer options
    const allAnswers = document.querySelectorAll('.answer-option');
    allAnswers.forEach(answer => {
        answer.classList.add('disabled');
        answer.style.cursor = 'not-allowed';
    });
    
    submitBtn.style.display = 'none';
    
    if (currentQuestion < quizData.length - 1) {
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.textContent = 'See Results';
        nextBtn.style.display = 'inline-block';
    }
    
    updateScoreDisplay();
}

// Next question
function nextQuestion() {
    currentQuestion++;
    
    if (currentQuestion < quizData.length) {
        loadQuestion();
        submitBtn.style.display = 'inline-block';
    } else {
        showFinalResults();
    }
}

// Update score display
function updateScoreDisplay() {
    if (questionsAnswered > 0) {
        scoreDisplay.textContent = `Score: ${score} / ${questionsAnswered}`;
    } else {
        scoreDisplay.textContent = '';
    }
}

// Show final results
function showFinalResults() {
    quizContainer.style.display = 'none';
    finalResults.style.display = 'block';
    
    const percentage = Math.round((score / quizData.length) * 100);
    finalScore.textContent = `${score} out of ${quizData.length} (${percentage}%)`;
    
    let message = '';
    let messageClass = '';
    
    if (percentage >= 90) {
        message = '🎉 Excellent! You have a strong understanding of residential electricity!';
        messageClass = 'excellent';
    } else if (percentage >= 70) {
        message = '👍 Good job! You have a solid grasp of the basics. Review the material to master the remaining concepts.';
        messageClass = 'good';
    } else if (percentage >= 50) {
        message = '📚 Not bad, but there\'s room for improvement. Review the tutorial sections and try again!';
        messageClass = 'needs-improvement';
    } else {
        message = '📖 Keep studying! Review the tutorial carefully and take the quiz again to improve your score.';
        messageClass = 'needs-improvement';
    }
    
    performanceMessage.textContent = message;
    performanceMessage.className = messageClass;
}

// Restart quiz
function restartQuiz() {
    initQuiz();
}

// Event Listeners
submitBtn.addEventListener('click', submitAnswer);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Smooth scroll for navigation
document.querySelectorAll('#navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// Highlight active nav link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.topic-section, .quiz-section');
    const navLinks = document.querySelectorAll('#navbar a');
    
    let currentSection = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 100) {
            currentSection = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.style.backgroundColor = '';
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.style.backgroundColor = '#34495e';
        }
    });
});

// Initialize quiz on page load
initQuiz();
