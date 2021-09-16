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
    if (sec == -1) {
        clearInterval(time);
    }
}

var quiz = document.getElementById("quiz")
var answerEls = document.querySelectorAll(".answer")
var questionEls = document.getElementById("question")
var a_question = document.getElementById("a_question")
var b_question = document.getElementById("b_question")
var c_question = document.getElementById("c_question")
var d_question = document.getElementById("d_question")
var submitBtn = document.getElementById("submit")

var currentQuiz = 0
var score = 0

function loadQuiz() {
    
    var currentQuizQuestion = quizQuestion[currentQuiz]

    questionEls.innerText = currentQuizQuestion.question
    a_question.innerText = currentQuizQuestion.a
    b_question.innerText = currentQuizQuestion.b
    c_question.innerText = currentQuizQuestion.c
    d_question.innerText = currentQuizQuestion.d
}

loadQuiz()

function submit(){
       currentQuiz++
       loadQuiz()
       if(currentQuiz >= 5){
                      
        }
                 
}
submitBtn.addEventListener("click",submit);
