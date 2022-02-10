const quizData = [{
        question: 'What year are we?',
        a_1: '1. We are in the year 2029.',
        a_2: '2. We are in the year 2022.',
        a_3: '3. We are in the year 2026.',
        a_4: '4. We are in the year 2025.',
        correct: 'a_2'
    },
    {
        question: 'How many sides does a square have?',
        a_1: '1. Four sides in total.',
        a_2: '2. Two sides in total.',
        a_3: '3. Seven sides in total.',
        a_4: '4. Three sides in total.',
        correct: 'a_1'
    },
    {
        question: 'What is paper made of?',
        a_1: '1. From a specific plant.',
        a_2: '2. From a volcanic rock.',
        a_3: '3. From the wood of a tree.',
        a_4: '4. From an asteroid.',
        correct: 'a_3'
    }
]

const answerEls = document.querySelectorAll('.answer')

const quiz = document.getElementById('quiz')

const questionEl = document.getElementById('question')

const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question

    a_text.innerText = currentQuizData.a_1
    b_text.innerText = currentQuizData.a_2
    c_text.innerText = currentQuizData.a_3
    d_text.innerText = currentQuizData.a_4
}

function getSelected() {

    let answer = undefined

    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

function deselectAnswers() {
    answerEls.forEach(answerEl => {
        answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {

    const answer = getSelected()

    console.log(answer)

    if (answer) {

        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2> Congrats! You answered correctly at ${score}/${quizData.length} questions</h2>
            <button onClick="location.reload()">Reload</button>`
        }
    }

})