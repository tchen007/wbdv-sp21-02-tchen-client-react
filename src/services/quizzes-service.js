import {BASE_URL, QUIZZES_PATH} from './services-constants'

const QUIZZES_URL = BASE_URL + QUIZZES_PATH

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

export default {
    findAllQuizzes, findQuizById
}