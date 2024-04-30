// Get the modals
var howToPlay = document.getElementById("instructions");
var musicToggle = document.getElementById("musicOnOff");
var resetGame = document.getElementById("gameReset");

// Get the buttons that open the modals
var htp = document.querySelectorAll(".btn")[0];
var mT = document.querySelectorAll(".btn")[1];
var rG = document.querySelectorAll(".btn")[2];

// Get the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// When the user clicks the buttons, open the corresponding modal
htp.onclick = function() {
    howToPlay.style.display = "block";
}
mT.onclick = function() {
    mT.classList.add("strike");
} 
rG.onclick = function() {
    resetGame.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function() {
        howToPlay.style.display = "none";
        if((document.querySelectorAll == 'btn.strike')[i] === 'button.btn.strike') {
            mT.onclick = function() {
                mT.classList.remove("strike");
            }; /*how to target if Music toggle button is striked through? */

        };

        resetGame.style.display = "none";
    }
}
// When the user clicks anywhere outside of the modals, close them
window.onclick = function(event) {
    if (event.target == howToPlay) {
        howToPlay.style.display = "none";        
    }
}


// the quiz script

// question object

const question = [{
        question: "Which mighty bird serves as the vehicle of Lord Vishnu?",
        answers: [
            {ans: "Peacock", result: false},
            {ans: "Parrot", result: false},
            {ans: "Kite", result: true},
            {ans: "Sparrow", result: false},
        ]
    },
    {
        question: "The epic Ramayana tells the tale of Rama's battle against which demon king?",
        answers: [
            {ans: "Ravana", result: true},
            {ans: "Duryodhana", result: false},
            {ans: "Shiva", result: false},
            {ans: "Mahishasura", result: false},
        ]
    },
    {
        question: "The powerful weapon Trishul is associated with which deity?",
        answers: [
            {ans: "Brahma", result: false},
            {ans: "Shiva", result: true},
            {ans: "Vishnu", result: false},
            {ans: "Ganesha", result: false},
        ]
    },
    {
        question: "Which Hindu festival celebrates the victory of good over evil and the triumph of Lord Rama over Ravana?",
        answers: [
            {ans: "Holi", result: false},
            {ans: "Dusshera", result: false},
            {ans: "Janmasthami", result: true},
            {ans: "Diwali", result: false},
        ]
    },
    {
        question: "What is the name of the celestial weapon wielded by Lord Vishnu?",
        answers: [
            {ans: "Sudarshana Chakra", result: true},
            {ans: "Vajra", result: false},
            {ans: "Spear", result: false},
            {ans: "Trident", result: false},
        ]
    },
    {
        question: "Nandi the mount of Shiva is represented by what animal?",
        answers: [
            {ans: "Mouse", result: false},
            {ans: "Monkey", result: false},
            {ans: "Bull", result: true},
            {ans: "Lion", result: false},
        ]
    },
    {
        question: "What is the sacred abode of lord Vishnu?",
        answers: [
            {ans: "Ocean", result: true},
            {ans: "Mars", result: false},
            {ans: "Himalayas", result: false},
            {ans: "The Sun", result: false},
        ]
    },
    {
        question: "Who is the goddess of wealth and prosperity in Hindu Mythology?",
        answers: [
            {ans: "Saraswati", result: false},
            {ans: "Kali", result: false},
            {ans: "Lakshmi", result: true},
            {ans: "Parvati", result: false},
        ]
    },
    {
        question: "What does Krishna adornes on his head gear?",
        answers: [
            {ans: "Peacock feather", result: true},
            {ans: "Gold Leaf", result: false},
            {ans: "Pearl", result: false},
            {ans: "Kohinoor Diamond", result: false},
        ]
    },
    {
        question: "Krishna is beleived to be an incarnation of which god?",
        answers: [
            {ans: "Brahma", result: false},
            {ans: "Shiva", result: false},
            {ans: "Vishnu", result: true},
            {ans: "Indra", result: false},
        ]
    },

]

const questions = document.getElementById("question");
const answerButtons = document.getElementsByClassName("ans");
const nextButton = document.getElementById("next");

let currentQuestionCounter = 0;
let score = 0;

function startQuiz(){
    currentQuestionCounter = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    
    let questionDisplayed = question[currentQuestionCounter];
    let questionNumber = currentQuestionCounter + 1;
    questions.innerHTML = questionNumber + ". " + questionDisplayed.question;

    questionDisplayed.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("ans");
        answerButtons.appendChild(answerBoxes);
    })
}

startQuiz()

function enterAnswer(evt) {
   let clicked = evt.target.innerHTML;
  console.log(clicked);

}