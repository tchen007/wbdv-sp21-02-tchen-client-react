import {BASE_URL, QUIZZES_PATH, QUESTIONS_PATH} from './services-constants'

const QUIZZES_URL = BASE_URL + QUIZZES_PATH

export const findQuestionsForQuiz = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}${QUESTIONS_PATH}`)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export default {
    findQuestionsForQuiz
}