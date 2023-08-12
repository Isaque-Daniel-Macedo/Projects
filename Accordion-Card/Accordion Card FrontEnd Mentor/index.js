let activeStates;
const answerBoxes = document.querySelectorAll('.card--right__box__answer')
const QuestionSeta = document.querySelectorAll('.card--right__box__question__img')
const answerSeta = document.getElementsByClassName('card--right__box__answer__img')

const titles = document.querySelectorAll('.card--right__box__question__title')

function mostrar(number){   
    const selectedAnswerBoxes = answerBoxes[number - 1]
    selectedAnswerBoxes.classList.remove('hidden')
    const selectedTitles = titles[number - 1]
    selectedTitles.classList.add('activeQuestions')

    const selectedQuestionSeta = QuestionSeta[number - 1]

    const selectedAnswerSeta = answerSeta[number - 1]

    

    selectedQuestionSeta.classList.add('hidden')
    selectedAnswerSeta.classList.remove('hidden')
}

function sumir(number){
    const selectedAnswerBoxes = answerBoxes[number - 1]
    const selectedTitles = titles[number - 1]
    selectedAnswerBoxes.classList.add('hidden')
    selectedTitles.classList.remove('activeQuestions')

    const selectedQuestionSeta = QuestionSeta[number - 1]
    const selectedAnswerSeta = answerSeta[number - 1]

    selectedQuestionSeta.classList.remove('hidden')
    selectedAnswerSeta.classList.add('hidden')
}
