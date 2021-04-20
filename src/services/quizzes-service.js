import {NODE_BASE_URL, QUIZZES_PATH} from './services-constants'

const QUIZZES_URL = NODE_BASE_URL + QUIZZES_PATH

export const findAllQuizzes = () => {
    return fetch(QUIZZES_URL)
        .then(response => response.json())
        .catch(error => console.log(error))
}

export const findQuizById = (quizId) => {
    return fetch(`${QUIZZES_URL}/${quizId}`)
        .then(response => response.json)
        .catch(error => console.log(error))
}

export const submitQuiz = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}

export const findAttempts = (quizId, questions) => {
    return fetch(`${QUIZZES_URL}/${quizId}/attempts`)
        .then(response => response.json())
}

export default {
    findAllQuizzes, findQuizById, submitQuiz, findAttempts
}