const questions = [
   {
    question: "If a rooster lays an egg on the roof, which side will it roll down?",
    answers: [
        { text: "Left", correct: false },
        { text: "Right", correct: false },
        { text: "Down the slope", correct: false },
        { text: "Roosters don't lay eggs", correct: true }
    ]
},
{
    question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
    answers: [
        { text: "Time", correct: false },
        { text: "Letter M", correct: true },
        { text: "Second", correct: false },
        { text: "Clock", correct: false }
    ]
},
{
    question: "Which weighs more?",
    answers: [
        { text: "1 kg of iron", correct: false },
        { text: "1 kg of feathers", correct: false },
        { text: "Both weigh the same", correct: true },
        { text: "Depends on gravity", correct: false }
    ]
},
{
    question: "If you overtake the second person in a race, what position are you in?",
    answers: [
        { text: "First", correct: false },
        { text: "Second", correct: true },
        { text: "Third", correct: false },
        { text: "Depends on speed", correct: false }
    ]
},
{
    question: "What has hands but can’t clap?",
    answers: [
        { text: "Clock", correct: true },
        { text: "Statue", correct: false },
        { text: "Mirror", correct: false },
        { text: "Robot", correct: false }
    ]
},
{
    question: "How many months have 28 days?",
    answers: [
        { text: "1", correct: false },
        { text: "2", correct: false },
        { text: "12", correct: true },
        { text: "Depends on leap year", correct: false }
    ]
},
{
    question: "What can travel around the world while staying in one corner?",
    answers: [
        { text: "Satellite", correct: false },
        { text: "Stamp", correct: true },
        { text: "Sunlight", correct: false },
        { text: "Wind", correct: false }
    ]
},
{
    question: "If a plane crashes on the border of two countries, where are the survivors buried?",
    answers: [
        { text: "Country A", correct: false },
        { text: "Country B", correct: false },
        { text: "On the border", correct: false },
        { text: "Survivors are not buried", correct: true }
    ]
},
{
    question: "What gets wetter the more it dries?",
    answers: [
        { text: "Rain", correct: false },
        { text: "Sun", correct: false },
        { text: "Towel", correct: true },
        { text: "Water", correct: false }
    ]
},
{
    question: "How many animals did Moses take on the ark?",
    answers: [
        { text: "Two of each", correct: false },
        { text: "None", correct: true },
        { text: "One of each", correct: false },
        { text: "Depends on species", correct: false }
    ]
},
{
    question: "What has a neck but no head?",
    answers: [
        { text: "Bottle", correct: true },
        { text: "Shirt", correct: false },
        { text: "Giraffe", correct: false },
        { text: "River", correct: false }
    ]
},
{
    question: "What can you catch but never throw?",
    answers: [
        { text: "Ball", correct: false },
        { text: "Cold", correct: true },
        { text: "Fish", correct: false },
        { text: "Frisbee", correct: false }
    ]
},
{
    question: "Which word is spelled incorrectly in every dictionary?",
    answers: [
        { text: "Incorrectly", correct: true },
        { text: "Misspell", correct: false },
        { text: "Wrong", correct: false },
        { text: "Dictionary", correct: false }
    ]
},
{
    question: "If you drop a yellow hat into the Red Sea, what does it become?",
    answers: [
        { text: "Red", correct: false },
        { text: "Purple", correct: false },
        { text: "Wet", correct: true },
        { text: "Lost", correct: false }
    ]
},
{
    question: "What has one eye but cannot see?",
    answers: [
        { text: "Cyclops", correct: false },
        { text: "Needle", correct: true },
        { text: "Camera", correct: false },
        { text: "Storm", correct: false }
    ]
},
{
    question: "What runs but never walks?",
    answers: [
        { text: "Car", correct: false },
        { text: "River", correct: true },
        { text: "Clock", correct: false },
        { text: "Human", correct: false }
    ]
},
{
    question: "Before Mount Everest was discovered, what was the highest mountain?",
    answers: [
        { text: "K2", correct: false },
        { text: "Mount Everest", correct: true },
        { text: "Kangchenjunga", correct: false },
        { text: "No mountain", correct: false }
    ]
},
{
    question: "What goes up but never comes down?",
    answers: [
        { text: "Smoke", correct: false },
        { text: "Age", correct: true },
        { text: "Balloon", correct: false },
        { text: "Rocket", correct: false }
    ]
},
{
    question: "What has many keys but can’t open a single lock?",
    answers: [
        { text: "Keyboard", correct: true },
        { text: "Map", correct: false },
        { text: "Safe", correct: false },
        { text: "Piano bench", correct: false }
    ]
},
{
    question: "If you have me, you want to share me. If you share me, you no longer have me. What am I?",
    answers: [
        { text: "Money", correct: false },
        { text: "Secret", correct: true },
        { text: "Time", correct: false },
        { text: "Food", correct: false }
    ]
}


];


const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }

}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

startQuiz();