// Get the modals
var howToPlay = document.getElementById("instructions");
var musicToggle12 = document.getElementById("musicOnOff");
const music = document.getElementById("music");
const musicToggle = document.getElementById("toggleMusic");
const resetButton = document.querySelector(".btn-reset");


// Play the audio when the user clicks on Music Toggle button
musicToggle.addEventListener("click", function () {
    if (music.paused) {
        // If the music is paused, start playing
        music.play().catch(error => {
            console.error("Failed to play music:", error);
        });
        // Change the button text to indicate pausing
        musicToggle.textContent = "Music On";
    } else {
        // If the music is playing, pause it
        music.pause();
        // Change the button text to indicate resuming
        musicToggle.textContent = "Music Off";
    }
});

// Get the buttons that open the modals
var htp = document.querySelectorAll(".btn")[0];
var mT = document.querySelectorAll(".btn")[1];
var rG = document.querySelectorAll(".btn")[2];

// Get the <span> elements that close the modals
var spans = document.querySelectorAll(".close");

// When the user clicks the buttons, open the corresponding modal
htp.onclick = function () {
    howToPlay.style.display = "block";
}

rG.onclick = function () {
    resetButton.style.display = "block";
}

// When the user clicks on <span> (x), close the modals
for (var i = 0; i < spans.length; i++) {
    spans[i].onclick = function () {
        howToPlay.style.display = "none";

    }
}
// When the user clicks anywhere outside of the modals, close them
window.onclick = function (event) {
    if (event.target == howToPlay) {
        howToPlay.style.display = "none";
    }
}

function resetGame() {
    // Reset current question counter and score
    currentQuestionCounter = 0;
    score = 0;

    // Show the first question
    showQuestion();

    // Remove any previous styling and enable answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("green", "red");
        answerButtons[i].disabled = false;
    }

    // Hide the next button
    nextButton.style.display = "none";
}
// the quiz script

// question object

const question = [{
    ques: "Which mighty bird serves as the vehicle of Lord Vishnu?",
    answers: [
        { ans: "Peacock", result: false },
        { ans: "Parrot", result: false },
        { ans: "Kite", result: true },
        { ans: "Sparrow", result: false },
    ]
},
{
    ques: "The epic Ramayana tells the tale of Rama's battle against which demon king?",
    answers: [
        { ans: "Ravana", result: true },
        { ans: "Duryodhana", result: false },
        { ans: "Shiva", result: false },
        { ans: "Mahishasura", result: false },
    ]
},
{
    ques: "The powerful weapon Trishul is associated with which deity?",
    answers: [
        { ans: "Brahma", result: false },
        { ans: "Shiva", result: true },
        { ans: "Vishnu", result: false },
        { ans: "Ganesha", result: false },
    ]
},
{
    ques: "Which Hindu festival celebrates the victory of good over evil and the triumph of Lord Rama over Ravana?",
    answers: [
        { ans: "Holi", result: false },
        { ans: "Dusshera", result: true },
        { ans: "Janmasthami", result: false },
        { ans: "Diwali", result: false },
    ]
},
{
    ques: "What is the name of the celestial weapon wielded by Lord Vishnu?",
    answers: [
        { ans: "Sudarshana Chakra", result: true },
        { ans: "Vajra", result: false },
        { ans: "Spear", result: false },
        { ans: "Trident", result: false },
    ]
},
{
    ques: "Nandi the mount of Shiva is represented by what animal?",
    answers: [
        { ans: "Mouse", result: false },
        { ans: "Monkey", result: false },
        { ans: "Bull", result: true },
        { ans: "Lion", result: false },
    ]
},
{
    ques: "What is the sacred abode of lord Vishnu?",
    answers: [
        { ans: "Ocean", result: true },
        { ans: "Mars", result: false },
        { ans: "Himalayas", result: false },
        { ans: "The Sun", result: false },
    ]
},
{
    ques: "Who is the goddess of wealth and prosperity in Hindu Mythology?",
    answers: [
        { ans: "Saraswati", result: false },
        { ans: "Kali", result: false },
        { ans: "Lakshmi", result: true },
        { ans: "Parvati", result: false },
    ]
},
{
    ques: "What does Krishna adornes on his head gear?",
    answers: [
        { ans: "Peacock feather", result: true },
        { ans: "Gold Leaf", result: false },
        { ans: "Pearl", result: false },
        { ans: "Kohinoor Diamond", result: false },
    ]
},
{
    ques: "Krishna is beleived to be an incarnation of which god?",
    answers: [
        { ans: "Brahma", result: false },
        { ans: "Shiva", result: false },
        { ans: "Vishnu", result: true },
        { ans: "Indra", result: false },
    ]
},
{
    ques: "Vayu is the god of which element?",
    answers: [
        { ans: "Wind", result: true },
        { ans: "Water", result: false },
        { ans: "Earth", result: false },
        { ans: "Fire", result: false },
    ]
},
{
    ques: "Ravana was known as the king of which golden kingdom",
    answers: [
        { ans: "Hastinapur", result: false },
        { ans: "Magadha", result: false },
        { ans: "Kandahar", result: false },
        { ans: "Lanka", result: true },
    ]
},
{
    ques: "Hindu god Ganesha has a head of which animal?",
    answers: [
        { ans: "Horse", result: false },
        { ans: "Elephant", result: true },
        { ans: "Pig", result: false },
        { ans: "Monkey", result: false },
    ]
},
{
    ques: "Vishnu is believed to have how many avatars (incarnations) on planet earth?",
    answers: [
        { ans: "Three", result: false },
        { ans: "Fifteen", result: false },
        { ans: "Ten", result: true },
        { ans: "Seven", result: false },
    ]
},
{
    ques: "Which is considered the holy book of Hindu religion?",
    answers: [
        { ans: "Gita", result: true },
        { ans: "Veda", result: false },
        { ans: "Quran", result: false },
        { ans: "Bible", result: false },
    ]
},
{
    ques: "What is considered the sacred language in Hindu religion?",
    answers: [
        { ans: "Hebrew", result: false },
        { ans: "Hindi", result: false },
        { ans: "Sanskrit", result: true },
        { ans: "Pali", result: false },
    ]
},
{
    ques: "Who is known as the Destroyer among the Hindu Trinity of Gods?",
    answers: [
        { ans: "Brahma", result: false },
        { ans: "Parvati", result: false },
        { ans: "Vishnu", result: false },
        { ans: "Shiva", result: true },
    ]
},
{
    ques: "The Narasimha avatar of Vishnu is half human and half what animal?",
    answers: [
        { ans: "Pig", result: false },
        { ans: "Lion", result: true },
        { ans: "Elephant", result: false },
        { ans: "Monkey", result: false },
    ]
},
{
    ques: "What is the sacred white elephant ridden by Indra called?",
    answers: [
        { ans: "Airavat", result: true },
        { ans: "Ashwathama", result: false },
        { ans: "Ganesh", result: false },
        { ans: "Naga", result: false },
    ]
},
{
    ques: "Which celestial river is considered sacred in Hinduism and flows through the Himalayas?",
    answers: [
        { ans: "Ganga", result: true },
        { ans: "Saraswati", result: false },
        { ans: "Yamuna", result: false },
        { ans: "Brahmaputra", result: false },
    ]
},
]

const questions = document.getElementById("question");
const answerButtons = document.getElementsByClassName("ans");
const nextButton = document.getElementById("next");
const CopyOfQuestion = question;
let question1 = question;

// Generate random question number




// Set initial values for quiz counter to nil
let currentQuestionCounter = 0;
let questionNo = 0;
let score = 0;
// 
function startQuiz() {
    currentQuestionCounter = 0;
    question1 = question;
    questionNo = 0;
    score = 0;    
    nextButton.innerHTML = "Next";
    showQuestion();
    nextButton.style.display = "none";
}

function showQuestion() {     
    question1 = question1.slice(0, currentQuestionCounter).concat(question1.slice(currentQuestionCounter + 1));        
    console.log(question1);
    const qL = question1.length - 1;    
    while (true) {
        currentQuestionCounter = Math.floor(Math.random() * qL) + 1; 

        if(currentQuestionCounter != 0 && currentQuestionCounter != qL) {
            break;
        }
    }
     
    console.log(currentQuestionCounter);         
    let questionDisplayed = question1[currentQuestionCounter];    
    let questionNumber = questionNo + 1;
    questions.innerHTML = `${questionNumber}. ${questionDisplayed.ques}`;

    questionDisplayed.answers.forEach((answer, i) => {
        document.getElementById("option" + (i + 1)).innerHTML = answer.ans;
    });

    // Remove any background-color already applied
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("green", "red");
    }

    for (let i = 1; i <= answerButtons.length; i++) {
        var buttonId = "option" + [i];       
        let x = document.getElementById(buttonId);
        x.style.pointerEvents = "";
        x.style.cursor = "pointer";

    }
    
}

function enterAnswer(evt) {
    const clicked = evt.target.innerHTML;
    

    // Find the corresponding question object
    const questionObj = question1[currentQuestionCounter];
    const ansArray = questionObj.answers;

    // Find the corresponding answer object
    const answerObj = questionObj.answers.find((a) => a.ans === clicked);
    

    // Add classes based on the result
    if (answerObj.result === true) {
        evt.target.classList.add("green");
        score++; // Increment the score if the answer is correct
    } else {
        evt.target.classList.add("red");
    }

    // Find correct Answer object
    let rightAns;
    ansArray.forEach(function (obj, c) {
        if (obj.result === true) {
            rightAns = ansArray[c].ans;
        }
    });

    // Disable answer buttons after selection

    for (let i = 1; i <= answerButtons.length; i++) {
        var buttonId = "option" + [i];
        
        let x = document.getElementById(buttonId);
        x.style.pointerEvents = "none";
        x.style.button = "disable";
        x.style.cursor = "none";
        
        if (x.textContent === rightAns) {
            x.classList.add("green");
        }

    }

    // Show next button
    nextButton.style.display = "block";
}

startQuiz();



function nextQuestion() {
    // Move to the next question
    questionNo++;

    // If all questions are answered, show score
    if (questionNo >= 10) {
        questions.innerHTML = `Your score is: ${score} / 10`;
        nextButton.style.display = "none"; // Hide next button
    } else {
        showQuestion();
        nextButton.style.display = "none"; // Hide next button
    }
}



nextButton.addEventListener("click", nextQuestion);

// Function to reset the game
function resetGame() {
    // Reset current question counter and score
    currentQuestionCounter = 0;
    question1 = question
    questionNo = 0;
    score = 0;

    // Show the first question
    showQuestion();

    // Remove any previous styling and enable answer buttons
    for (let i = 0; i < answerButtons.length; i++) {
        answerButtons[i].classList.remove("green", "red");
        answerButtons[i].disabled = false;
    }

    // Hide the next button
    nextButton.style.display = "none";

}

// Event listener for the reset button
resetButton.addEventListener("click", resetGame);
