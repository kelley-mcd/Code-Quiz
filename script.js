const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const timeGauge = document.getElementById("timer");
const scoreDiv = document.getElementById("scoreContainer");
const finalScore = document.getElementById("finalScore");

let questions = [
    {
        question : "Commonly used data types DO NOT include:",
        choiceA : "Strings",
        choiceB : "Booleans",
        choiceC : "Alerts",
        choiceD: "Numbers",
        correct : "C"
    },{
        question : "The condition in an if/else statement is enclosed with _________.",
        choiceA : "Quotes",
        choiceB : "Curly brackets",
        choiceC : "Parentheses",
        choiceD : "Square brackets",
        correct : "C"
    },{
        question : "Arrays in JavaScript can be used to store __________.",
        choiceA : "Numbers and Strings",
        choiceB : "Other Arrays",
        choiceC : "Booleans",
        choiceD : "All of the Above",
        correct : "D"
    },{
        question : "String values must be enclosed with ______ when being assigned to variables.",
        choiceA : "Commas",
        choiceB : "Curly brackets",
        choiceC : "Quotes",
        choiceD : "parentheses",
        correct : "C"  
    }
];


const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 15;
const gaugeWidth = 150; 
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;


function getQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);


function startQuiz(e){
    e.preventDefault();
    start.style.display = "none";
    getQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}

function renderProgress(){
    for(let i = 0; i <= lastQuestion; i++){
        progress.innerHTML += "<div class='prog' id="+ i +"></div>";
    }
}


function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            getQuestionn();
        }else{
            clearInterval(TIMER);
            getScore();
        }
    }
}


function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;
        answerIsCorrect();
    }else{
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        getQuestion();
    }else{
        clearInterval(TIMER);
        getScore();
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "black";
}


function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "black";
}



function getScore(){
    
    scoreDiv.style.display = "block";
  
}