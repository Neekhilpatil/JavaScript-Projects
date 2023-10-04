const quizData = [
    {
        question : 'What is the full form of HTML ?',
        a: "Hyper Text Makeup Language",
        b: "Hydra Type Markup Language",
        c: "Hyper Text Makeup Language",
        d: "Scripting Language",
        correct: "b"
    },
    {
        question : "Which of these elements in HTML can be used for making a text bold?" ,
        a: "<a>",
        b: "<pre>",
        c: "<br>",
        d: "<b>",
        correct:"d"
    },
    {
        question : "Which tag do we use in HTML for inserting a line-break?" ,
        a: "<a>",
        b: "<pre>",
        c: "<br>",
        d: "<hr>",
        correct:"c"
    },
    {
        question:" Which tag do we use to define the options present in the drop-down selection lists?",
        a: "<list>",
        b: "<option>",
        c: "<dropdown>",
        d: "<select>",
        correct:"b"
    },
];


// const questionEl = document.getElementById('question');
// const a_text = document.getElementById('a_text');
// const b_text = document.getElementById('b_text');
// const c_text = document.getElementById('c_text');
// const d_text = document.getElementById('d_text');
// const submitBtn = document.getElementById('submit')

// let currentQuiz = 0;
// let answer = undefined;

// loadQuiz();

// function loadQuiz() {

//     const currentQuizData = quizData[currentQuiz];

//     questionEl.innerText = currentQuizData.question;
//     a_text.innerText = currentQuizData.a;
//     b_text.innerText = currentQuizData.b;
//     c_text.innerText = currentQuizData.c;
//     d_text.innerText = currentQuizData.d;

// }

// function getSelected(){
//     const answers = document.querySelectorAll("answer");

//     answers.forEach((answer)=>{
//         // console.log(answer.value);

//         if(answerEl.checked){
//             answer=answerEl.id;
//         }
//     });
// }

// submitBtn.addEventListener('click',()=>{
//     currentQuiz++;

//     if(currentQuiz < quizData.length){
//         loadQuiz();
//     }
//     else{
//         alert("You Finished! your quiz.")
//     }

//     loadQuiz();

// })


const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});