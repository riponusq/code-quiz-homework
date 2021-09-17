var quizQuestion = [

    {
        question: "which character used to indicate an end tag?",
        a: "/",
        b: "<",
        c: "*",
        d: "^",
        correct: "a",
    },

    {
        question: "Inside which HTML element do we put the javascript?",
        a: "JS",
        b: "Javascript",
        c: "Scripting",
        d: "Script",
        correct: "d",
    },

    {
        question: "What does CSS stand for?",
        a: "Colorful Style Sheets",
        b: "Cascading Style Sheets",
        c: "Computer Style Sheets ",
        d: "Creative Style Sheets",
        correct: "b",
    },

    {
        question: "which HTML attribute is used for define inline style ?",
        a: "Font",
        b: "Styles",
        c: "Class",
        d: "Style",
        correct: "d",
    },

    {
        question: "who is making Web Standards?",
        a: "Google",
        b: "Mozilla",
        c: "Microsoft",
        d: "The World Wide Web Consortium",
        correct: "d",
    },
];

var sec = 10;
var time = setInterval(quizTimer, 1000);

function quizTimer() {
    document.getElementById('time').innerHTML = sec + "sec left";
    sec--;
// within if statement set in html of the container div to display score
    if (sec == -1) {
        endGame()

        clearInterval(time);
    }
}
function endGame(){
    document.getElementById("quiz").innerHTML = "GAME OVER"
}
var quiz = document.getElementById("quiz")
var answerEls = document.querySelectorAll(".answer")
var questionEls = document.getElementById("question")
var a_question = document.getElementById("a_question")
var a = document.getElementById("a")
var b_question = document.getElementById("b_question")
var b = document.getElementById("b")
var c_question = document.getElementById("c_question")
var c = document.getElementById("c")
var d_question = document.getElementById("d_question")
var d = document.getElementById("d")
var submitBtn = document.getElementById("submit")

var currentQuiz = 0
var score = 0
function loadQuiz() {
    
    var currentQuizQuestion = quizQuestion[currentQuiz]

    questionEls.innerText = currentQuizQuestion.question
    a_question.innerText = currentQuizQuestion.a
    a.checked=false
    b_question.innerText = currentQuizQuestion.b
    b.checked=false
    c_question.innerText = currentQuizQuestion.c
    c.checked=false
    d_question.innerText = currentQuizQuestion.d
    d.checked = false
}

loadQuiz()

function submit(){
       currentQuiz++
       loadQuiz()
       if(currentQuiz >= 5){
        doucument.getElementById ("quiz"). innerHTML = 'your score' 
        score++   
        endGame()
                             
        }
                
}
submitBtn.addEventListener("click",submit);
